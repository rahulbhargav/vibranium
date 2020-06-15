(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{kVq8:function(e,a,t){"use strict";t.r(a),t.d(a,"_frontmatter",(function(){return c})),t.d(a,"default",(function(){return o}));t("rGqo"),t("yt8O"),t("Btvt"),t("RW0V"),t("91GP"),t("q1tI");var n=t("7ljp"),s=t("L6Je");var c={},r={_frontmatter:c},i=s.a;function o(e){var a=e.components,t=function(e,a){if(null==e)return{};var t,n,s={},c=Object.keys(e);for(n=0;n<c.length;n++)t=c[n],a.indexOf(t)>=0||(s[t]=e[t]);return s}(e,["components"]);return Object(n.b)(i,Object.assign({},r,t,{components:a,mdxType:"MDXLayout"}),Object(n.b)("h1",{id:"configure-vibranium",style:{position:"relative"}},Object(n.b)("a",Object.assign({parentName:"h1"},{href:"#configure-vibranium","aria-label":"configure vibranium permalink",className:"anchor before"}),Object(n.b)("svg",Object.assign({parentName:"a"},{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}),Object(n.b)("path",Object.assign({parentName:"svg"},{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"})))),"Configure Vibranium"),Object(n.b)("p",null,"This step initializes Vibranium configurations. Open Command Line/ Terminal and change the directory to the directory that you with to make as your workspace and run the following command and enter the answers to the questions that follow"),Object(n.b)("pre",null,Object(n.b)("code",Object.assign({parentName:"pre"},{className:"language-shell"}),"vc setup\n")),Object(n.b)("blockquote",null,Object(n.b)("p",{parentName:"blockquote"},"Make sure you navigate to the workspace directory before running this command as it sets the current working directory as the workspace.")),Object(n.b)("h3",{id:"example",style:{position:"relative"}},Object(n.b)("a",Object.assign({parentName:"h3"},{href:"#example","aria-label":"example permalink",className:"anchor before"}),Object(n.b)("svg",Object.assign({parentName:"a"},{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}),Object(n.b)("path",Object.assign({parentName:"svg"},{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"})))),"Example:"),Object(n.b)("pre",null,Object(n.b)("code",Object.assign({parentName:"pre"},{className:"language-shell"}),"cd ˜  \nmkdir workspace\ncd  workspace\n\nvc setup\n                                         \nPlease enter your user id: sarathm09\nPlease enter your email id: some.email@domain.com\nPlease enter your name: VibraniumTester\n")),Object(n.b)("p",null,"This step basically register the current working directory as the workspace in the internal Vibranium configuration, and creates the initial set of directories like ",Object(n.b)("inlineCode",{parentName:"p"},"jobs")," and ",Object(n.b)("inlineCode",{parentName:"p"},"logs"),". "),Object(n.b)("h2",{id:"clone-test-cases",style:{position:"relative"}},Object(n.b)("a",Object.assign({parentName:"h2"},{href:"#clone-test-cases","aria-label":"clone test cases permalink",className:"anchor before"}),Object(n.b)("svg",Object.assign({parentName:"a"},{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}),Object(n.b)("path",Object.assign({parentName:"svg"},{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"})))),"Clone test cases"),Object(n.b)("p",null,"If you have test cases already available, you'll have to clone the test cases into the workspace"),Object(n.b)("pre",null,Object(n.b)("code",Object.assign({parentName:"pre"},{className:"language-shell"}),"cd ˜/workspace\ngit clone https://github.com/someUserOrOrg/Vibranium-Tests.git\n")),Object(n.b)("p",null,Object(n.b)("a",Object.assign({parentName:"p"},{href:"1.3.installation.md"}),"Previous"),"\n",Object(n.b)("a",Object.assign({parentName:"p"},{href:"1.5.config_json.md"}),"Next")))}o.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-setup-1-4-configuration-mdx-b530a540f48976a98a11.js.map