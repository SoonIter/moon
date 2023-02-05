"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3088],{5318:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>d});var a=n(7378);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),c=p(n),d=o,k=c["".concat(s,".").concat(d)]||c[d]||u[d]||r;return n?a.createElement(k,l(l({ref:t},m),{},{components:n})):a.createElement(k,l({ref:t},m))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,l=new Array(r);l[0]=c;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var p=2;p<r;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},9798:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(7378),o=n(8944);const r="tabItem_wHwb";function l(e){let{children:t,hidden:n,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,o.Z)(r,l),hidden:n},t)}},3337:(e,t,n)=>{n.d(t,{Z:()=>k});var a=n(5773),o=n(7378),r=n(8944),l=n(3457),i=n(5595),s=n(6457);const p="tabList_J5MA",m="tabItem_l0OV";function u(e){let{className:t,block:n,selectedValue:i,selectValue:s,tabValues:p}=e;const u=[],{blockElementScrollPositionUntilNextRender:c}=(0,l.o5)(),d=e=>{const t=e.currentTarget,n=u.indexOf(t),a=p[n].value;a!==i&&(c(t),s(a))},k=e=>{var t;let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=u.indexOf(e.currentTarget)+1;n=u[t]??u[0];break}case"ArrowLeft":{const t=u.indexOf(e.currentTarget)-1;n=u[t]??u[u.length-1];break}}null==(t=n)||t.focus()};return o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":n},t)},p.map((e=>{let{value:t,label:n,attributes:l}=e;return o.createElement("li",(0,a.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>u.push(e),onKeyDown:k,onClick:d},l,{className:(0,r.Z)("tabs__item",m,null==l?void 0:l.className,{"tabs__item--active":i===t})}),n??t)})))}function c(e){let{lazy:t,children:n,selectedValue:a}=e;if(t){const e=n.find((e=>e.props.value===a));return e?(0,o.cloneElement)(e,{className:"margin-top--md"}):null}return o.createElement("div",{className:"margin-top--md"},n.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function d(e){const t=(0,i.Y)(e);return o.createElement("div",{className:(0,r.Z)("tabs-container",p)},o.createElement(u,(0,a.Z)({},e,t)),o.createElement(c,(0,a.Z)({},e,t)))}function k(e){const t=(0,s.Z)();return o.createElement(d,(0,a.Z)({key:String(t)},e))}},5595:(e,t,n)=>{n.d(t,{Y:()=>c});var a=n(7378),o=n(5331),r=n(654),l=n(784),i=n(1819);function s(e){return function(e){return a.Children.map(e,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:o}}=e;return{value:t,label:n,attributes:a,default:o}}))}function p(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??s(n);return function(e){const t=(0,l.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function u(e){let{queryString:t=!1,groupId:n}=e;const l=(0,o.k6)(),i=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,r._X)(i),(0,a.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(l.location.search);t.set(i,e),l.replace({...l.location,search:t.toString()})}),[i,l])]}function c(e){const{defaultValue:t,queryString:n=!1,groupId:o}=e,r=p(e),[l,s]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:r}))),[c,d]=u({queryString:n,groupId:o}),[k,h]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[o,r]=(0,i.Nk)(n);return[o,(0,a.useCallback)((e=>{n&&r.set(e)}),[n,r])]}({groupId:o}),g=(()=>{const e=c??k;return m({value:e,tabValues:r})?e:null})();(0,a.useEffect)((()=>{g&&s(g)}),[g]);return{selectedValue:l,selectValue:(0,a.useCallback)((e=>{if(!m({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);s(e),d(e),h(e)}),[d,h,r]),tabValues:r}}},2183:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>k,frontMatter:()=>s,metadata:()=>m,toc:()=>c});var a=n(5773),o=(n(7378),n(5318)),r=n(3337),l=n(9798),i=n(6911);const s={slug:"v0.23",title:"moon v0.23 - Scoped task inheritance, and project config updates",authors:["milesj"],tags:["survey","tasks","projects"],image:"./img/v0.23.png"},p=void 0,m={permalink:"/blog/v0.23",editUrl:"https://github.com/moonrepo/moon/tree/master/website/blog/2023-01-30_v0.23.mdx",source:"@site/blog/2023-01-30_v0.23.mdx",title:"moon v0.23 - Scoped task inheritance, and project config updates",description:"With this release, we're launching the next iteration of our task inheritance model, as well as",date:"2023-01-30T00:00:00.000Z",formattedDate:"January 30, 2023",tags:[{label:"survey",permalink:"/blog/tags/survey"},{label:"tasks",permalink:"/blog/tags/tasks"},{label:"projects",permalink:"/blog/tags/projects"}],readingTime:5.735,hasTruncateMarker:!0,authors:[{name:"Miles Johnson",title:"Founder, developer",url:"https://github.com/milesj",imageURL:"https://pbs.twimg.com/profile_images/1532262885648281601/TQbEOiNd_400x400.jpg",key:"milesj"}],frontMatter:{slug:"v0.23",title:"moon v0.23 - Scoped task inheritance, and project config updates",authors:["milesj"],tags:["survey","tasks","projects"],image:"./img/v0.23.png"},nextItem:{title:"moon v0.22 - New pipeline, hashing, and caching, with Turborepo migration",permalink:"/blog/v0.22"}},u={image:n(7936).Z,authorsImageUrls:[void 0]},c=[{value:"Developer survey",id:"developer-survey",level:2},{value:"Improved task inheritance model",id:"improved-task-inheritance-model",level:2},{value:"New <code>.moon/tasks.yml</code> (breaking)",id:"new-moontasksyml-breaking",level:3},{value:"New scoped tasks with <code>.moon/tasks/*.yml</code>",id:"new-scoped-tasks-with-moontasksyml",level:3},{value:"Moved <code>implicitDeps</code> and <code>implicitInputs</code> (breaking)",id:"moved-implicitdeps-and-implicitinputs-breaking",level:3},{value:"Project-level environment variables",id:"project-level-environment-variables",level:2},{value:"Globs in task outputs",id:"globs-in-task-outputs",level:2},{value:"Other changes",id:"other-changes",level:2},{value:"What&#39;s next?",id:"whats-next",level:2}],d={toc:c};function k(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"With this release, we're launching the next iteration of our task inheritance model, as well as\nquality of life improvements for project configuration."),(0,o.kt)("h2",{id:"developer-survey"},"Developer survey"),(0,o.kt)("p",null,"Before we dive into this new release, we have a quick survey for everyone. We know how everyone\nfeels about surveys, but this one is real quick, only a few minutes, and is mostly multiple choice\nquestions."),(0,o.kt)("p",null,"We're looking for feedback on moon itself, what features you're looking for, what you currently do\nnot like, how you're currently using monorepos, your development workflows, so on and so forth. We'd\nvery much appreciate it if you could engage with this survey!"),(0,o.kt)("div",{class:"flex justify-center"},(0,o.kt)(i.Z,{label:"Take survey!",href:"https://a.sprig.com/UE1SOG1zV3o5SzdRfnNpZDpmOTQ5MjU1Yy1jYTZlLTRmYjQtOTRjZi0wMzZlZjExN2JjZDg=",mdxType:"Button"})),(0,o.kt)("h2",{id:"improved-task-inheritance-model"},"Improved task inheritance model"),(0,o.kt)("p",null,'One of the guiding principles behind moon is to simplify repository maintenance, with task\nmanagement being top of list. We weren\'t happy with the current state of things, as every build\nsystem and task runner that exists always opted for per-project task management, which is a massive\namount of overhead and tech debt in the long run. To combat this, moon was designed from the\nground-up using a task inheritance model, where "global" tasks were defined in\n',(0,o.kt)("a",{parentName:"p",href:"/docs/config/tasks"},(0,o.kt)("inlineCode",{parentName:"a"},".moon/project.yml")),", with per-project tasks still being an option with\n",(0,o.kt)("a",{parentName:"p",href:"/docs/config/project"},(0,o.kt)("inlineCode",{parentName:"a"},"moon.yml")),"."),(0,o.kt)("p",null,"While inheritance worked great, it did have some shortcomings, such as:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"With the addition of ",(0,o.kt)("a",{parentName:"li",href:"/blog/v0.21"},"new programming languages"),", there's no way to easily define\ntasks for specific languages, that should only be inherited by specific projects."),(0,o.kt)("li",{parentName:"ul"},"There's no way to differentiate tasks between applications or libraries, as they typically have\ndifferent build/compilation systems."),(0,o.kt)("li",{parentName:"ul"},'All of the problems above can be "solved" with\n',(0,o.kt)("a",{parentName:"li",href:"/docs/config/project#inheritedtasks"},(0,o.kt)("inlineCode",{parentName:"a"},"workspace.inheritedTasks"))," in all projects, but it's a\nmaintenance headache.")),(0,o.kt)("p",null,"We've been documenting a solution to these problems for many months now, and we're very excited to\nfinally release our new and improved task inheritance model that solves all of the problems above,\nand opens the doors for future enhancements! Keep reading for more information."),(0,o.kt)("h3",{id:"new-moontasksyml-breaking"},"New ",(0,o.kt)("inlineCode",{parentName:"h3"},".moon/tasks.yml")," (breaking)"),(0,o.kt)("p",null,"To start, we renamed ",(0,o.kt)("inlineCode",{parentName:"p"},".moon/project.yml")," to ",(0,o.kt)("inlineCode",{parentName:"p"},".moon/tasks.yml")," as we want to emphasize that this\nconfiguration file is for task inheritance functionality only. However, the semantics of this file\nhas ",(0,o.kt)("em",{parentName:"p"},"not"),' changed, and is still "tasks to be inherited by ',(0,o.kt)("em",{parentName:"p"},"all"),' projects".'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title=".moon/tasks.yml"',title:'".moon/tasks.yml"'},"$schema: 'https://moonrepo.dev/schemas/tasks.json'\n\ntasks:\n  # ...\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"We'll automatically rename this file for you when running a ",(0,o.kt)("inlineCode",{parentName:"p"},"moon")," command!")),(0,o.kt)("h3",{id:"new-scoped-tasks-with-moontasksyml"},"New scoped tasks with ",(0,o.kt)("inlineCode",{parentName:"h3"},".moon/tasks/*.yml")),(0,o.kt)("p",null,"The biggest change to task inheritance is that tasks can now be scoped by a project's\n",(0,o.kt)("a",{parentName:"p",href:"/docs/config/project#language"},(0,o.kt)("inlineCode",{parentName:"a"},"language"))," or ",(0,o.kt)("a",{parentName:"p",href:"/docs/config/project#type"},(0,o.kt)("inlineCode",{parentName:"a"},"type"))," using the new\n",(0,o.kt)("inlineCode",{parentName:"p"},".moon/tasks/<language>.yml")," or ",(0,o.kt)("inlineCode",{parentName:"p"},".moon/tasks/<language>-<type>.yml")," configuration files! Jump to the\n",(0,o.kt)("a",{parentName:"p",href:"/docs/concepts/task#inheritance"},"official documentation on task inheritance")," for more information\non how scoping works, the lookup order of files, and much more."),(0,o.kt)("p",null,"As a demonstration, you can scope tasks to Node.js projects with ",(0,o.kt)("inlineCode",{parentName:"p"},".moon/tasks/node.yml"),", Rust\napplications with ",(0,o.kt)("inlineCode",{parentName:"p"},".moon/tasks/rust-application.yml"),", Go libraries with\n",(0,o.kt)("inlineCode",{parentName:"p"},".moon/tasks/go-library.yml"),", Ruby scripts with ",(0,o.kt)("inlineCode",{parentName:"p"},".moon/tasks/ruby-tool.yml"),", so on and so forth!"),(0,o.kt)("p",null,"We're very excited for this feature, as it's something we personally needed, and we're sure you all\ndo as well. It also future proofs moon for new programming languages, additional implicit scenarios\nto handle, and yet to be discovered functionality."),(0,o.kt)(r.Z,{groupId:"scoped-task",defaultValue:"node",values:[{label:"Node",value:"node"},{label:"Go",value:"go"},{label:"PHP",value:"php"},{label:"Python",value:"python"},{label:"Ruby",value:"ruby"},{label:"Rust",value:"rust"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"node",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title=".moon/tasks/node.yml"',title:'".moon/tasks/node.yml"'},"tasks:\n    format:\n        command: 'prettier --write .'\n"))),(0,o.kt)(l.Z,{value:"go",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title=".moon/tasks/go.yml"',title:'".moon/tasks/go.yml"'},"tasks:\n    format:\n        command: 'go fmt'\n"))),(0,o.kt)(l.Z,{value:"php",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title=".moon/tasks/php.yml"',title:'".moon/tasks/php.yml"'},"tasks:\n    format:\n        command: 'phpcbf .'\n"))),(0,o.kt)(l.Z,{value:"python",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title=".moon/tasks/python.yml"',title:'".moon/tasks/python.yml"'},"tasks:\n    format:\n        command: 'pylint .'\n"))),(0,o.kt)(l.Z,{value:"ruby",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title=".moon/tasks/ruby.yml"',title:'".moon/tasks/ruby.yml"'},"tasks:\n    format:\n        command: 'rubocop -l'\n"))),(0,o.kt)(l.Z,{value:"rust",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title=".moon/tasks/rust.yml"',title:'".moon/tasks/rust.yml"'},"tasks:\n    format:\n        command: 'cargo fmt --all --check'\n")))),(0,o.kt)("h3",{id:"moved-implicitdeps-and-implicitinputs-breaking"},"Moved ",(0,o.kt)("inlineCode",{parentName:"h3"},"implicitDeps")," and ",(0,o.kt)("inlineCode",{parentName:"h3"},"implicitInputs")," (breaking)"),(0,o.kt)("p",null,"To standardize inheritance and expansion related functionality, we've moved the\n",(0,o.kt)("inlineCode",{parentName:"p"},"runner.implicitDeps")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"runner.implicitInputs")," settings from ",(0,o.kt)("inlineCode",{parentName:"p"},".moon/workspace.yml")," to\n",(0,o.kt)("a",{parentName:"p",href:"/docs/config/tasks#implicitdeps"},(0,o.kt)("inlineCode",{parentName:"a"},".moon/tasks.yml"))," and\n",(0,o.kt)("a",{parentName:"p",href:"/docs/config/tasks#implicitinputs"},(0,o.kt)("inlineCode",{parentName:"a"},".moon/tasks/*.yml"))," and removed the ",(0,o.kt)("inlineCode",{parentName:"p"},"runner")," prefix."),(0,o.kt)("p",null,"This allows for implicits to also be scoped accordingly and granularly. For example, projects can\nnow inherit dependency manager related files as implicit inputs on a per-language basis:"),(0,o.kt)(r.Z,{groupId:"scoped-task",defaultValue:"node",values:[{label:"Node",value:"node"},{label:"Go",value:"go"},{label:"PHP",value:"php"},{label:"Python",value:"python"},{label:"Ruby",value:"ruby"},{label:"Rust",value:"rust"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"node",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title=".moon/tasks/node.yml"',title:'".moon/tasks/node.yml"'},"implicitInputs:\n    - 'package.json'\n"))),(0,o.kt)(l.Z,{value:"go",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title=".moon/tasks/go.yml"',title:'".moon/tasks/go.yml"'},"implicitInputs:\n    - 'go.mod'\n"))),(0,o.kt)(l.Z,{value:"php",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title=".moon/tasks/php.yml"',title:'".moon/tasks/php.yml"'},"implicitInputs:\n    - 'composer.json'\n"))),(0,o.kt)(l.Z,{value:"python",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title=".moon/tasks/python.yml"',title:'".moon/tasks/python.yml"'},"implicitInputs:\n    - 'pyproject.toml'\n"))),(0,o.kt)(l.Z,{value:"ruby",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title=".moon/tasks/ruby.yml"',title:'".moon/tasks/ruby.yml"'},"implicitInputs:\n    - 'Gemfile'\n"))),(0,o.kt)(l.Z,{value:"rust",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title=".moon/tasks/rust.yml"',title:'".moon/tasks/rust.yml"'},"implicitInputs:\n    - 'Cargo.toml'\n")))),(0,o.kt)("h2",{id:"project-level-environment-variables"},"Project-level environment variables"),(0,o.kt)("p",null,"Since moon's inception, tasks can be configured with pre-defined environment variables using the\n",(0,o.kt)("a",{parentName:"p",href:"/docs/config/project#env-1"},(0,o.kt)("inlineCode",{parentName:"a"},"env"))," setting. These variables would then be passed to the command\nduring execution. This works perfectly for encapsulation, but becomes tedious when the same\nvariables are repeated for multiple tasks."),(0,o.kt)("p",null,"To remedy this, environment variables can now be defined at the top of\n",(0,o.kt)("a",{parentName:"p",href:"/docs/config/project"},(0,o.kt)("inlineCode",{parentName:"a"},"moon.yml"))," using the top-level ",(0,o.kt)("a",{parentName:"p",href:"/docs/config/project#env"},(0,o.kt)("inlineCode",{parentName:"a"},"env"))," setting.\nVariables defined at the top-level will be inherited by all tasks in the current project, but will\nnot override task-level variables of the same name."),(0,o.kt)("p",null,"To demonstrate this, the following config:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="<project>/moon.yml"',title:'"<project>/moon.yml"'},"tasks:\n  dev:\n    # ...\n    env:\n      TARGET_ENV: 'development'\n\n  build:\n    # ...\n    env:\n      TARGET_ENV: 'development'\n\n  serve:\n    # ...\n    env:\n      TARGET_ENV: 'development'\n")),(0,o.kt)("p",null,"Can be rewritten as:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="<project>/moon.yml"',title:'"<project>/moon.yml"'},"env:\n  TARGET_ENV: 'development'\n\ntasks:\n  dev:\n    # ...\n\n  build:\n    # ...\n\n  serve:\n    # ...\n")),(0,o.kt)("h2",{id:"globs-in-task-outputs"},"Globs in task outputs"),(0,o.kt)("p",null,"Another feature that's been around since moon's inception is task\n",(0,o.kt)("a",{parentName:"p",href:"/docs/config/project#outputs"},(0,o.kt)("inlineCode",{parentName:"a"},"outputs")),", which only supported relative files and folders. For\nhistorical reasons, it was the easiest solution at the time, but in practice, supporting more\ngranular control is better."),(0,o.kt)("p",null,"As such, task ",(0,o.kt)("inlineCode",{parentName:"p"},"outputs")," now support glob patterns as well! This is perfect for restricting and\nfiltering down which files are cached in the artifact. However, be aware that during hydration (a\ncache hit), all files ",(0,o.kt)("em",{parentName:"p"},"not matching the glob")," will be deleted, so ensure that critical files ",(0,o.kt)("em",{parentName:"p"},"do"),"\nmatch."),(0,o.kt)("p",null,"To demonstrate this, if building a JavaScript project, you may want to include ",(0,o.kt)("inlineCode",{parentName:"p"},".js")," and ",(0,o.kt)("inlineCode",{parentName:"p"},".css"),"\nfiles, but exclude everything else (",(0,o.kt)("inlineCode",{parentName:"p"},".map"),", etc)."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="moon.yml" {4,5}',title:'"moon.yml"',"{4,5}":!0},"tasks:\n  build:\n    command: 'webpack'\n    outputs:\n      - 'build/**/*.{js,css}'\n")),(0,o.kt)("h2",{id:"other-changes"},"Other changes"),(0,o.kt)("p",null,"View the\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/moonrepo/moon/releases/tag/%40moonrepo%2Fcli%400.23.0"},"official release")," for a\nfull list of changes."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Updated ",(0,o.kt)("inlineCode",{parentName:"li"},"moon migrate from-turborepo")," to preserve globs in outputs."),(0,o.kt)("li",{parentName:"ul"},"Updated project graph to no longer cache when there's no VCS root."),(0,o.kt)("li",{parentName:"ul"},"Updated pnpm to use the new ",(0,o.kt)("inlineCode",{parentName:"li"},"pnpm dedupe")," command when the version is >= 7.26.0.")),(0,o.kt)("h2",{id:"whats-next"},"What's next?"),(0,o.kt)("p",null,"Expect the following in the v0.24 release!"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"New ",(0,o.kt)("inlineCode",{parentName:"li"},"moon query tasks")," command."),(0,o.kt)("li",{parentName:"ul"},"New per-project ",(0,o.kt)("inlineCode",{parentName:"li"},"platform")," setting."),(0,o.kt)("li",{parentName:"ul"},"Token support in task ",(0,o.kt)("inlineCode",{parentName:"li"},"outputs"),"."),(0,o.kt)("li",{parentName:"ul"},"TypeScript v5 support.")))}k.isMDXComponent=!0},7936:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/v0.23-7f465b99a3ddadd6415b79205a586713.png"}}]);