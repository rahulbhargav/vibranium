(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{lxwW:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return c})),a.d(t,"default",(function(){return o}));a("rGqo"),a("yt8O"),a("Btvt"),a("RW0V"),a("91GP"),a("q1tI");var n=a("7ljp"),s=a("L6Je");var c={},i={_frontmatter:c},r=s.a;function o(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,n,s={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,["components"]);return Object(n.b)(r,Object.assign({},i,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("h1",{id:"creating-new-tests",style:{position:"relative"}},Object(n.b)("a",Object.assign({parentName:"h1"},{href:"#creating-new-tests","aria-label":"creating new tests permalink",className:"anchor before"}),Object(n.b)("svg",Object.assign({parentName:"a"},{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}),Object(n.b)("path",Object.assign({parentName:"svg"},{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"})))),"Creating new tests"),Object(n.b)("p",null,"You can create new tests by simply creating a new json file and adding the required keys, but to make the process more easier, you can use the ",Object(n.b)("inlineCode",{parentName:"p"},"create")," command in Vibranium."),Object(n.b)("pre",null,Object(n.b)("code",Object.assign({parentName:"pre"},{className:"language-shell"}),'❯ vc c -h                                  \nUsage: vc create|c [options]\n\nCreate a new scenario test file\n\nOptions:\n  -c --collection <collection>  Collection Name\n  -s --scenario <scenario>      Scenario Name\n  -t --template [template]      Create scenario with a template. [t1|t2|t3|e1_github] (default: "t1")\n  -h, --help                    output usage information\n')),Object(n.b)("blockquote",null,Object(n.b)("p",{parentName:"blockquote"},"While creating tests, you need to specify the collection in which the tests needs to be created using the ",Object(n.b)("inlineCode",{parentName:"p"},"-c")," option and the scenario name using the ",Object(n.b)("inlineCode",{parentName:"p"},"-s")," option.")),Object(n.b)("h2",{id:"templates",style:{position:"relative"}},Object(n.b)("a",Object.assign({parentName:"h2"},{href:"#templates","aria-label":"templates permalink",className:"anchor before"}),Object(n.b)("svg",Object.assign({parentName:"a"},{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}),Object(n.b)("path",Object.assign({parentName:"svg"},{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"})))),"Templates"),Object(n.b)("p",null,"Vibranium provides a set of templates that you can use to create tests. These templates can be used by specifying the template name in the ",Object(n.b)("inlineCode",{parentName:"p"},"--template")," option. They are usually named ",Object(n.b)("inlineCode",{parentName:"p"},"t1")," to ",Object(n.b)("inlineCode",{parentName:"p"},"tn")," where each increment stands for increase in complexity. The templates starting with ",Object(n.b)("inlineCode",{parentName:"p"},"e")," are example templates, like ",Object(n.b)("inlineCode",{parentName:"p"},"e1_github")," refers to example of github API v3."),Object(n.b)("h3",{id:"user-provided-templates",style:{position:"relative"}},Object(n.b)("a",Object.assign({parentName:"h3"},{href:"#user-provided-templates","aria-label":"user provided templates permalink",className:"anchor before"}),Object(n.b)("svg",Object.assign({parentName:"a"},{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}),Object(n.b)("path",Object.assign({parentName:"svg"},{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"})))),"User provided Templates"),Object(n.b)("p",null,"You can have user provided templates also. If you want to have a standard structure for all your tests, you can create a template json and place it in the templates directory inside the tests directory in your workspace. For example, if I have my workspace at ",Object(n.b)("inlineCode",{parentName:"p"},"˜/workspace")," and my tests directory is named ",Object(n.b)("inlineCode",{parentName:"p"},"Vibranium-Tests"),", then I'll have a directory structure for my templates as follows:"),Object(n.b)("pre",null,Object(n.b)("code",Object.assign({parentName:"pre"},{className:"language-shell"}),"˜/\n  workspace/\n    config.json\n    jobs/\n      latest/\n      job_n/\n    logs/\n    Vibranium-Tests/\n      scenarios/\n      payloads/\n      schemas/\n      templates/\n        template_myCustomTemplate.json\n        template_myComplexTemplate.json\n")),Object(n.b)("p",null,"To use the templates, I can use either ",Object(n.b)("inlineCode",{parentName:"p"},"vc c --template myCustomTemplate")," or ",Object(n.b)("inlineCode",{parentName:"p"},"vc c --template myComplexTemplate")),Object(n.b)("blockquote",null,Object(n.b)("p",{parentName:"blockquote"},"Make sure the directory structure is correct and that you prefix the templates with ",Object(n.b)("inlineCode",{parentName:"p"},"template_"),"for user provided templates to work.")))}o.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-cli-2-3-vc-c-mdx-0ef5e44891f33e3106b1.js.map