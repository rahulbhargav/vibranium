const Ajv = require('ajv')
const { VM } = require('vm2')
const { homedir } = require('os')
let { promisify } = require('util')
const fetch = require('node-fetch')
const { sep, join } = require('path')
const { exec } = require('child_process')
const { platform, env } = require('process')
const { readFile, unlink } = require('fs').promises
const { green, yellow, redBright } = require('chalk')
const { existsSync, mkdirSync, writeFileSync, readFileSync } = require('fs')

const moduleLogger = require('./logger')
const { vibPath, userConfig, logLevels, vibSchemas, SCHEMA_SPECIFICATION_V6 } = require('./constants')

const logger = moduleLogger('util')
const ajv = new Ajv({ allErrors: true })
let validator
let commonScriptVariables = {
	fetch,
	Error,
	setTimeout,
	setInterval,
	exec: promisify(exec)
}

ajv.addMetaSchema(SCHEMA_SPECIFICATION_V6)
validator = ajv.addSchema(vibSchemas.endpoint).compile(vibSchemas.scenario)


/**
 * Create a custom iterator for number ranges
 */
Number.prototype[Symbol.iterator] = function* () {
	for (let i = 0; i < this; i++) {
		yield i;
	}
}


/**
 * Check if the system is a Mac or not
 */
module.exports.isMac = platform === 'darwin';


/**
 * Get the loglevel object from the string
 */
module.exports.getLogLevel = level => ({
	error: logLevels.error,
	debug: logLevels.debug,
	warn: logLevels.warn,
	info: logLevels.info,
	log: logLevels.log,
	success: logLevels.success
}[level.toLowerCase()])


/**
 * Get the collection name from the absolute file path
 * @param {string} fileToParse
 * @returns {string}
 */
module.exports.getCollectionNameForScenario = fileToParse => {
	if (!fileToParse.includes(vibPath.scenarios) || fileToParse === vibPath.scenarios) return ''

	let parts = fileToParse.replace(vibPath.scenarios, '')
	return parts.split(sep)[1]
}


/**
 * Get the scenario name from the absolute file path
 * @param {string} fileToParse
 * @returns {string}
 */
module.exports.getScenarioFileNameFromPath = fileToParse => {
	if (!fileToParse.includes(vibPath.scenarios) || fileToParse === vibPath.scenarios) return ''

	let scenario = fileToParse
		.replace(vibPath.scenarios, '')
		.split(sep)
		.pop()

	if (scenario.includes('.json')) return scenario.split('.')[0]
	return ''
}


/**
 * Split and trim user input string
 * @param {string} input
 * @returns {array}
 */
module.exports.splitAndTrimInput = input => (input ? input.split(',').map(_ => _.trim()) : []);


/**
 * Check if the user has passed 'all' as the input.
 * If the user hasn't given any input, it is still considered as 'all' as it's the default
 * @param {string} input
 * @returns {boolean}
 */
module.exports.isAll = input => (input ? input.toLowerCase() === 'all' : true);


/**
 * Asynchronous sleep function.
 * Used for limiting the number of parallel executions
 * @param {integer} ms milliseconds to sleep
 */
module.exports.sleep = ms => new Promise(resolve => setTimeout(resolve, ms));


/**
 * Split the given and input and see if any of the elements specified in the array match
 * the set of inputs
 * @param {array} arr
 * @param {string} input
 * @returns {boolean}
 */
module.exports.includesRegex = (arr, input) => !!arr && !!input ? arr.filter(_ => input.toLowerCase().match(_.toLowerCase())).length > 0 : false;


/**
 * Parse AJV validation object to get response errors
 * 
 * @param {array} errors AJV validation errors
 */
const ajvResponseParser = (errors) => {
	return errors.map(err => {
		if (err.keyword === 'additionalProperties') {
			return `${err.message} '${err.params.additionalProperty}'`
		} if (err.keyword === 'required') {
			return `required key not found: ${err.message}`
		}
		return `${err.message}`
	})
}

/**
 * Validate if the scenario file follows the schema
 * 
 * @param {AJV} ajv schema validator object
 * @param {obkect} scenario scenario file JSON
 */
const isScenarioSchemaValid = (isValid, scenario, fileName) => {
	if (!isValid(scenario)) {
		logger.error(`Error in scenario ${yellow(fileName)}: ${redBright(ajvResponseParser(isValid.errors))}`)
		return false
	}
	return true
}

/**
 * Convert the file data to string and then parse the repsonse.
 * 
 * @param {string} fileToParse the path to the file to be parsed
 * @param {string} fileData File data string
 * @param {boolean} payload Is the file a payload file or not
 */
const parseJsonFile = async (fileToParse, fileData, payload) => {
	let fileParseStatus = {};
	try {
		let obj = JSON.parse(fileData);
		// If the file is a scenario file, add filepath and scenario name to the json
		if (!payload) {
			delete obj['$schema']

			if (env.VALIDATE_SCENARIOS && !isScenarioSchemaValid(validator, obj, fileToParse)) {
				fileParseStatus = {
					status: false,
					message: `Parsing file ${yellow(fileToParse)} failed with the error ${redBright(ajvResponseParser(validator.errors))}`
				};
			}
			let scenarioFileName = fileToParse.replace(vibPath.scenarios, '')
			obj = {
				...obj,
				file: scenarioFileName,
				scenarioFile: scenarioFileName.split(sep).pop().split('.')[0],
				collection: module.exports.getCollectionNameForScenario(fileToParse),
				sid: `${fileToParse.replace(vibPath.scenarios, '').split(sep)[1]}_${obj.name}`
			};
		}
		fileParseStatus = { status: true, data: obj };
	} catch (error) {
		fileParseStatus = {
			status: false,
			error: true,
			message: `Parsing file ${yellow(fileToParse)} failed with the error ${redBright(error)}`
		};
	}
	return fileParseStatus;
}


/**
 * Read the json file (scenario/payload) from the filesystem, parse it as json
 * and return the json object
 *
 * @param {string} fileToParse The absolute path of the file to be read and parsed
 * @param {boolean} payload is the file a payload file or not. Used for file parsing
 */
module.exports.readJsonFile = async (fileToParse, payload = false) => {
	if (!fileToParse) return { status: false, message: 'The filename is not valid.' }

	if (!!fileToParse && fileToParse.split('.').pop() != 'json')
		return {
			status: false,
			message: `The file ${yellow(fileToParse)} does not have the extension '.json'`
		}
	else {
		let fileData = await readFile(fileToParse, 'utf8')
		return parseJsonFile(fileToParse, fileData, payload)
	}
}


/**
 * Save the scenarios into cache.
 * Cache is created by running --freeze option
 *
 * @param {array} scenarios List of scenarios
 */
module.exports.freezeScenarios = scenarios => {
	if (!existsSync(vibPath.cache)) {
		mkdirSync(vibPath.cache);
	}
	writeFileSync(vibPath.cachedScenarios, JSON.stringify(scenarios));
}


/**
 * Remove all cache. Triggered by the --unfreeze option
 */
module.exports.unfreezeScenarios = async () => {
	if (existsSync(vibPath.cachedScenarios)) await unlink(vibPath.cachedScenarios);
}


/**
 * Check if cache exists. Cache is created by running --freeze option
 */
module.exports.cacheExists = () => existsSync(vibPath.cachedScenarios);


/**
 * Load the cached scenarios
 */
module.exports.loadCachedScenarios = async () => {
	if (!existsSync(vibPath.cachedScenarios)) return
	let cachedScenarios = await readFile(vibPath.cachedScenarios, 'utf8');
	return JSON.parse(cachedScenarios);
}


/**
 * Get available systems defined in the config
 */
module.exports.getAvailableSystemsFromConfig = () => {
	return {
		systems: userConfig.accounts,
		default: userConfig.default_account
	};
}


/**
 * Check if the config is set and Vibranium is cloned
 */
module.exports.isVibraniumInitialized = () => {
	let status = true;
	if (!existsSync(join(homedir(), '.vib', 'config.json'))) {
		status = false;
	} else {
		try {
			let systemConfig = JSON.parse(readFileSync(join(homedir(), '.vib', 'config.json'), 'utf8'));
			let workspace = systemConfig.workspace;
			if (
				!existsSync(join(workspace, 'config.json')) ||
				!existsSync(join(workspace, 'jobs')) ||
				!existsSync(join(workspace, 'logs'))
			) {
				status = false;
			}
			let userConfig = JSON.parse(readFileSync(join(workspace, 'config.json'), 'utf8'));
			let testsDirectory = userConfig.tests_directory ? userConfig.tests_directory : 'tests';
			if (!existsSync(join(workspace, testsDirectory)) || !existsSync(join(workspace, testsDirectory, 'scenarios'))) {
				status = false;
			}
		} catch (err) {
			status = false;
		}
	}

	if (!status) {
		logger.error('Vibranium not initialized.')
		logger.error('Please run the setup command to initialize and then clone/create the tests.')
		logger.error('For more info, please run ' + green('vc setup --help'))
		process.exit(1);
	}
}


/**
 * Execute a given script and return the variables
 *
 * @param {string} script The script to execute
 * @param {object} variables The variables to be used for script execution and also for setting env vars from script
 * @param {logger} logger object to log details
 * @param {function} getApiResponse method to get API response. Used inscripts to get api response.
 * @returns {object} modified variables
 */
module.exports.executeScript = (script, getApiResponse, variables, parent, scriptType) => {
	scriptType = scriptType
		.toString()
		.replace('Symbol(', '')
		.replace(')', '');
	const scriptName = `script_${parent}_${scriptType}_${Date.now()}`;
	const vm = new VM({
		external: true,
		sandbox: { variables, getApiResponse, logger: moduleLogger(scriptName) }
	});
	logger.debug(`Executing ${scriptType} script [${scriptName}]: ${script}`)
	vm.run(`
        const ${scriptName} = () => {
            ${script}
        }
        logger.debug('Executing script ${scriptName}')
        ${scriptName}()
    `);
	return variables;
}


/**
 * Convert a text to avalid javascript function name
 * 
 * @param {string} text String to be converted
 */
const getValidJSVariableName = text => text
	.split('-').join('_')
	.split('.').join('_')
	.split('˜').join('_')


/**
 * Load the script file to be executed
 * 
 * @param {string} fileName script file name
 */
const readScriptFile = async (fileName) => {
	if (!existsSync(join(vibPath.scripts, fileName))) {
		let errorMessage = `Script file ${redBright(join(vibPath.scripts, fileName))} not found.`
		logger.error(errorMessage)
		throw new Error(errorMessage)
	}

	return await readFile(join(vibPath.scripts, fileName), 'utf8')
}


/**
 * Replace scriptFile() with the script file text
 * 
 * @param {string} script the script string
 */
const replaceScriptFileValues = async script => {
	let scriptFileRegex = /scriptFile\(['"`]([a-zA-Z0-9.-]+)['"`]\)/gm, scriptLines = []
	if (script.match(scriptFileRegex).length > 0) {
		let lines = script.split(';'), length = lines.length
		for (let lineNum = 0; lineNum < length; lineNum++) {
			let matches = lines[lineNum].match(scriptFileRegex)
			if (matches.length === 0) scriptLines.push(lines[lineNum])
			else {
				let filePath = matches[0].match(/\(['"`]([a-zA-Z0-9.-]+)['"`]\)/)[0].replace(/['"`()]/g, '')
				scriptLines.push(lines[lineNum].replace(scriptFileRegex, await readScriptFile(filePath)))
			}
		}
	} else {
		return script
	}
	return scriptLines.join(';\n')
}

/**
 * Execute a given script and return the variables
 *
 * @param {string} script The script to execute
 * @param {object} variables The variables to be used for script execution and also for setting env vars from script
 * @param {logger} logger object to log details
 * @param {function} getApiResponse method to get API response. Used inscripts to get api response.
 * @returns {object} modified variables
 */
module.exports.executeScenarioScript = async (script, getApiResponse, variables, scenarioName, scriptType) => {
	const scriptName = getValidJSVariableName(`script_${scenarioName}_${scriptType}_${Date.now()}`)
	const vm = new VM({
		external: true,
		timeout: 10 * 60 * 1000,
		sandbox: {
			...commonScriptVariables,

			variables,
			getApiResponse,
			logger: moduleLogger(scriptName)
		}
	});
	try {
		script = await replaceScriptFileValues(script)
		logger.debug(`Executing ${scriptType} script [${scriptName}]: ${script}`)
		let response = await vm.run(`(async function ${scriptName} () {
			logger.debug('Inside script ${scriptName}')
			${script}
		})()`);
		if (response && response !== variables) variables = { ...variables, ...response }
	} catch (error) {
		logger.error(`Error running script ${yellow(scriptType)} script [${scriptName}]: ${redBright(script)}`)
		logger.error('Check the syntax of the JS snippet and/or check if you have used variables or modules that you don\'t have access to')
		return { status: false }
	}
	return { status: true, variables }
}


/**
 * Execute a given script and return the variables
 *
 * @param {string} script The script to execute
 * @param {object} variables The variables to be used for script execution and also for setting env vars from script
 * @param {logger} logger object to log details
 * @param {function} getApiResponse method to get API response. Used inscripts to get api response.
 * @returns {object} modified variables
 */
module.exports.executeEndpointScript = async (script, getApiResponse, variables, api, scriptType) => {
	const scriptName = getValidJSVariableName(`script_${api.name}_${scriptType}_${Date.now()}`)
	const vm = new VM({
		external: true,
		timeout: 10 * 60 * 1000,
		sandbox: {
			...commonScriptVariables,

			api,
			variables,
			getApiResponse,
			logger: moduleLogger(scriptName)
		}
	});
	try {
		script = await replaceScriptFileValues(script)
		logger.debug(`Executing ${scriptType} script [${scriptName}]: ${script}`)
		let response = await vm.run(`(async function ${scriptName} () { 
			logger.debug('Inside script ${scriptName}');
			${script}
		})()`);
		if (response && response !== { api, variables }) {
			variables = { ...variables, ...response.variables }
			api = response.api
		}
	} catch (error) {
		logger.error(`Error running script ${yellow(scriptType)} script [${scriptName}]: ${redBright(script)}`)
		logger.error('Check the syntax of the JS snippet and/or check if you have used variables or modules that you don\'t have access to')
		return { status: false }
	}

	return { variables, status: true };
}

/**
 * Check for valid name. Used in scenario name validation
 */
module.exports.isValidName = inputText => {
	if (inputText == undefined || inputText == null || inputText == '') return false;

	if ('|}{[]\\/*&ˆ%$#@!();:,?<>˜`+'.split().filter(char => inputText.includes(char)) > 0) return false;

	if (inputText.length < 2) return false;

	return true;
};


/**
 * Get the max number of parallel executors
 */
module.exports.getParallelExecutorLimit = () => {
	if (env.MAX_PARALLEL_EXECUTORS && !isNaN(env.MAX_PARALLEL_EXECUTORS))
		return parseInt(env.MAX_PARALLEL_EXECUTORS)
	return !!userConfig.executor && !!userConfig.executor.max_parallel_executors
		? userConfig.executor.max_parallel_executors
		: 10;
}

/**
 * Right padding generator
 */
// eslint-disable-next-line no-unused-vars
module.exports.printSpaces = (text, max = 15) => [...(max - text.length)].map(_ => ' ').join('');


/**
 * Promisify readline to read user inputs
 * 
 * @param readlineObject implementation of readline interface
 * @param question The text to printed in the console when getting user input
 */
module.exports.readlinePromise = readlineObject => question => new Promise(resolve => {
	readlineObject.question(question, inputText => {
		resolve(inputText)
	})
})


/**
 * Shuffles array in place.
 * @param {Array} a items An array containing the items.
 */
module.exports.shuffleArray = (a) => {
	for (let i = a.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[a[i], a[j]] = [a[j], a[i]];
	}
	return a;
}