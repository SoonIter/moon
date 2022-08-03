"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5880],{5318:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var r=n(7378);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=c(n),d=i,f=u["".concat(p,".").concat(d)]||u[d]||m[d]||o;return n?r.createElement(f,a(a({ref:t},s),{},{components:n})):r.createElement(f,a({ref:t},s))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7920:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return m}});var r=n(5773),i=n(808),o=(n(7378),n(5318)),a=["components"],l={title:"init"},p=void 0,c={unversionedId:"commands/init",id:"commands/init",title:"init",description:"The moon init [dest] command will initialize moon into a repository and scaffold config files by",source:"@site/docs/commands/init.mdx",sourceDirName:"commands",slug:"/commands/init",permalink:"/docs/commands/init",draft:!1,editUrl:"https://github.com/moonrepo/moon/tree/master/website/docs/commands/init.mdx",tags:[],version:"current",frontMatter:{title:"init"},sidebar:"docs",previous:{title:"dep-graph",permalink:"/docs/commands/dep-graph"},next:{title:"migrate",permalink:"/docs/commands/migrate"}},s={},m=[{value:"Arguments",id:"arguments",level:3},{value:"Options",id:"options",level:3}],u={toc:m};function d(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"moon init [dest]")," command will initialize moon into a repository and scaffold config files by\ncreating a ",(0,o.kt)("inlineCode",{parentName:"p"},".moon")," folder. By default, moon will automatically infer the Node.js version, package\nmanager, and potential projects based on existing files."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ moon init\n\n# In another directory\n$ moon init ./app\n")),(0,o.kt)("h3",{id:"arguments"},"Arguments"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"[dest]")," - Destination to initialize and scaffold into. Defaults to ",(0,o.kt)("inlineCode",{parentName:"li"},".")," (current working\ndirectory).")),(0,o.kt)("h3",{id:"options"},"Options"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"--force")," - Overwrite existing config files if they exist."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"--inheritProjects <as>")," - Sets the default value on whether to inherit projects from\n",(0,o.kt)("inlineCode",{parentName:"li"},"package.json")," workspaces. Supports:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"none")," - Do not inherit projects."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"globs-list")," - Inherit globs as-is and configure as a list."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"projects-map")," - Glob the file system for projects and configure as a map."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"--packageManager <type>")," - Sets the default value for which package manager to use, if none were\ndetected.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Types: ",(0,o.kt)("inlineCode",{parentName:"li"},"npm"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"pnpm"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"yarn")))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"--yes")," - Skip all prompts and use default values.")))}d.isMDXComponent=!0}}]);