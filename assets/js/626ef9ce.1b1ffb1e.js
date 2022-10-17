"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2080],{5318:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>d});var r=n(7378);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},m=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),u=l(n),d=o,f=u["".concat(s,".").concat(d)]||u[d]||p[d]||a;return n?r.createElement(f,c(c({ref:t},m),{},{components:n})):r.createElement(f,c({ref:t},m))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var l=2;l<a;l++)c[l]=n[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9022:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(7378),o=n(9619);function a(e){let{header:t,updated:n,version:a}=e;return r.createElement(o.Z,{text:`v${a}`,variant:n?"success":"info",className:t?"absolute right-0 top-1.5":"ml-2"})}},9619:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(7378),o=n(8944),a=n(1792);const c={failure:"bg-red-100 text-red-900",info:"bg-pink-100 text-pink-900",success:"bg-green-100 text-green-900",warning:"bg-orange-100 text-orange-900"};function i(e){let{className:t,icon:n,text:i,variant:s}=e;return r.createElement("span",{className:(0,o.Z)("inline-flex items-center px-1 py-0.5 rounded text-xs font-bold uppercase",s?c[s]:"bg-gray-100 text-gray-800",t)},n&&r.createElement(a.Z,{icon:n,className:"mr-1"}),i)}},2729:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>c,metadata:()=>s,toc:()=>m});var r=n(5773),o=(n(7378),n(5318)),a=n(9022);const c={title:"check"},i=void 0,s={unversionedId:"commands/check",id:"commands/check",title:"check",description:"The moon check [...projects] (or moon c) command will run all",source:"@site/docs/commands/check.mdx",sourceDirName:"commands",slug:"/commands/check",permalink:"/docs/commands/check",draft:!1,editUrl:"https://github.com/moonrepo/moon/tree/master/website/docs/commands/check.mdx",tags:[],version:"current",frontMatter:{title:"check"},sidebar:"docs",previous:{title:"ci",permalink:"/docs/commands/ci"},next:{title:"clean",permalink:"/docs/commands/clean"}},l={},m=[{value:"Arguments",id:"arguments",level:3}],p={toc:m};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(a.Z,{header:!0,version:"0.13",mdxType:"VersionLabel"}),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"moon check [...projects]")," (or ",(0,o.kt)("inlineCode",{parentName:"p"},"moon c"),") command will run ",(0,o.kt)("em",{parentName:"p"},"all"),"\n",(0,o.kt)("a",{parentName:"p",href:"../concepts/task#types"},"build and test tasks")," for one or many projects. This is a convenience\ncommand for verifying the current state of a project, instead of running multiple\n",(0,o.kt)("a",{parentName:"p",href:"./run"},(0,o.kt)("inlineCode",{parentName:"a"},"moon run"))," commands."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"# Check project at current working directory\n$ moon check\n\n# Check project by name\n$ moon check app\n\n# Check multiple projects by name\n$ moon check client server\n")),(0,o.kt)("h3",{id:"arguments"},"Arguments"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"[...names]")," - List of project names or aliases to explicitly check, as defined in\n",(0,o.kt)("a",{parentName:"li",href:"../config/workspace#projects"},(0,o.kt)("inlineCode",{parentName:"a"},"projects")),".")))}u.isMDXComponent=!0}}]);