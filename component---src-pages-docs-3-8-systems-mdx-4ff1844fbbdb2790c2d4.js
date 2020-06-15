(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{"6fUk":function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return i})),n.d(t,"default",(function(){return o}));n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("91GP"),n("q1tI");var a=n("7ljp"),s=n("L6Je");var i={},r={_frontmatter:i},c=s.a;function o(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,a,s={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,["components"]);return Object(a.b)(c,Object.assign({},r,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"systems",style:{position:"relative"}},Object(a.b)("a",Object.assign({parentName:"h1"},{href:"#systems","aria-label":"systems permalink",className:"anchor before"}),Object(a.b)("svg",Object.assign({parentName:"a"},{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}),Object(a.b)("path",Object.assign({parentName:"svg"},{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"})))),"Systems"),Object(a.b)("p",null,"A ",Object(a.b)("inlineCode",{parentName:"p"},"system")," is a very loosely defined term in Vibranium. It can refer to different landscapes, applications, accounts, tenants etc."),Object(a.b)("p",null,"For example, If we have a dev landscape with three tenants, each having two users that are used for testing, then if we want to use them in Vibranium, it becomes six accounts, as follows:"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},Object(a.b)("strong",{parentName:"li"},"dev_tenant1_user1")," : user1 credentials in dev tenant1 "),Object(a.b)("li",{parentName:"ol"},Object(a.b)("strong",{parentName:"li"},"dev_tenant1_user2")," : user2 credentials in dev tenant1 "),Object(a.b)("li",{parentName:"ol"},Object(a.b)("strong",{parentName:"li"},"dev_tenant2_user1")," : user1 credentials in dev tenant2 "),Object(a.b)("li",{parentName:"ol"},Object(a.b)("strong",{parentName:"li"},"dev_tenant2_user2")," : user2 credentials in dev tenant2 "),Object(a.b)("li",{parentName:"ol"},Object(a.b)("strong",{parentName:"li"},"dev_tenant3_user1")," : user1 credentials in dev tenant3 "),Object(a.b)("li",{parentName:"ol"},Object(a.b)("strong",{parentName:"li"},"dev_tenant3_user2")," : user2 credentials in dev tenant3 ")),Object(a.b)("p",null,"A better way to visualize this is using the JSON structure in ",Object(a.b)("inlineCode",{parentName:"p"},"config.json")),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-json"}),'{\n    "dev_tenant1_read_access_user": {\n        "url": "https://dev.tenant1.domain.com/ui",\n        "api_url": "https://dev.tenant1.domain.com/api/v1",\n        "method": "basic",\n        "credentials": {\n            "username": "readAccessUserName",\n            "password": "readAccessUserPassword"\n        }\n    },\n    "dev_tenant1_write_access_user": {\n        "url": "https://dev.tenant1.domain.com/ui",\n        "api_url": "https://dev.tenant1.domain.com/api/v1",\n        "method": "basic",\n        "credentials": {\n            "username": "writeAccessUserName",\n            "password": "writeAccessUserPassword"\n        }\n    },\n    "dev_tenant1_read_access_user": {\n        "url": "https://dev.tenant2.domain.com/ui",\n        "api_url": "https://dev.tenant2.domain.com/api/v1",\n        "method": "basic",\n        "credentials": {\n            "username": "readAccessUserName",\n            "password": "readAccessUserPassword"\n        }\n    },\n    "dev_tenant1_write_access_user": {\n        "url": "https://dev.tenant2.domain.com/ui",\n        "api_url": "https://dev.tenant2.domain.com/api/v1",\n        "method": "basic",\n        "credentials": {\n            "username": "writeAccessUserName",\n            "password": "writeAccessUserPassword"\n        }\n    },\n    "dev_tenant1_read_access_user": {\n        "url": "https://dev.tenant3.domain.com/ui",\n        "api_url": "https://dev.tenant3.domain.com/api/v1",\n        "method": "basic",\n        "credentials": {\n            "username": "readAccessUserName",\n            "password": "readAccessUserPassword"\n        }\n    },\n    "dev_tenant1_write_access_user": {\n        "url": "https://dev.tenant3.domain.com/ui",\n        "api_url": "https://dev.tenant3.domain.com/api/v1",\n        "method": "basic",\n        "credentials": {\n            "username": "writeAccessUserName",\n            "password": "writeAccessUserPassword"\n        }\n    }\n}\n')),Object(a.b)("p",null,"This configuration is maintained in the ",Object(a.b)("a",Object.assign({parentName:"p"},{href:"../setup/1.5.config_json.md"}),"Config file"),"\nTo set one of these systems as the default, all you need to do is add the system name to the config json's ",Object(a.b)("inlineCode",{parentName:"p"},"default_account")," key."),Object(a.b)("h2",{id:"usage",style:{position:"relative"}},Object(a.b)("a",Object.assign({parentName:"h2"},{href:"#usage","aria-label":"usage permalink",className:"anchor before"}),Object(a.b)("svg",Object.assign({parentName:"a"},{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}),Object(a.b)("path",Object.assign({parentName:"svg"},{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"})))),"Usage"),Object(a.b)("p",null,"Once the systems are defined in the ",Object(a.b)("inlineCode",{parentName:"p"},"config.json"),", to use the systems, you need to use the ",Object(a.b)("inlineCode",{parentName:"p"},"system")," keyword (If you need to use any system other than the system marked as default)."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"If the system is not specified anywhere in endpoint of in execution arguments, the default system is picked up."),Object(a.b)("li",{parentName:"ul"},"If the system is specified in the execution level, using ",Object(a.b)("inlineCode",{parentName:"li"},"--system")," option [",Object(a.b)("a",Object.assign({parentName:"li"},{href:"../cli/2.4.vc_r.md"}),"Refer here"),"], then that system is picked up. You can override the default system to say ",Object(a.b)("inlineCode",{parentName:"li"},"dev_tenant1_write_access_user")," by specifying ",Object(a.b)("inlineCode",{parentName:"li"},"--system default=dev_tenant1_write_access_user")),Object(a.b)("li",{parentName:"ul"},"If the system is specified at the endpoint level, using the ",Object(a.b)("inlineCode",{parentName:"li"},"system")," key [",Object(a.b)("a",Object.assign({parentName:"li"},{href:"3.2.endpoint_object.md"}),"Refer here"),"], then this takes priority and this system is picked up for execution.")),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"If in any case the system specified is not found in the config.json, then the default system specified in the config.json is automatically picked up.")),Object(a.b)("h2",{id:"examples",style:{position:"relative"}},Object(a.b)("a",Object.assign({parentName:"h2"},{href:"#examples","aria-label":"examples permalink",className:"anchor before"}),Object(a.b)("svg",Object.assign({parentName:"a"},{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}),Object(a.b)("path",Object.assign({parentName:"svg"},{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"})))),"Examples"),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-json"}),'{\n    "some_system_with_no_auth": {\n        "url": "https://reqres.in/",\n        "api_url": "https://reqres.in",\n        "method": "none"\n    },\n    "some_random_name_for_my_system_with_basic_auth": {\n        "url": "SYSTEM_UI_URL",\n        "api_url": "API_ENDPOINT",\n        "method": "basic",\n        "credentials": {\n            "username": "MY_SUPER_SECRET_USERNAME",\n            "password": "MY_SUPER_SECRET_PASSWORD"\n        }\n    },\n    "another_system_that_uses_jwt_token_based_auth": {\n        "url": "SYSTEM_UI_URL",\n        "api_url": "API_ENDPOINT",\n        "method": "oauth2",\n        "oauth_url": "OAUTH_TOKEN_URL_FOR_THE_SYSTEM",\n        "credentials": {\n            "clientid": "MY_SUPER_SECRET_CLIENT_ID",\n            "secret": "MY_SUPER_SECRET_CLIENT_SECRET"\n        }\n    },\n    "github_api_v3_basic_auth": {\n        "url": "",\n        "api_url": "https://api.github.com/v3",\n        "method": "basic",\n        "credentials": {\n            "username": "MY_SUPER_SECRET_USERNAME",\n            "password": "MY_SUPER_SECRET_PASSWORD",\n        }\n    }\n}\n')))}o.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-docs-3-8-systems-mdx-4ff1844fbbdb2790c2d4.js.map