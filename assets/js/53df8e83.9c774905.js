"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3439],{5318:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>f});var o=r(7378);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=o.createContext({}),s=function(e){var t=o.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=s(e.components);return o.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),u=s(r),f=n,y=u["".concat(c,".").concat(f)]||u[f]||m[f]||i;return r?o.createElement(y,a(a({ref:t},l),{},{components:r})):o.createElement(y,a({ref:t},l))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=u;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:n,a[1]=p;for(var s=2;s<i;s++)a[s]=r[s];return o.createElement.apply(null,a)}return o.createElement.apply(null,r)}u.displayName="MDXCreateElement"},7887:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>m,frontMatter:()=>i,metadata:()=>p,toc:()=>s});var o=r(5773),n=(r(7378),r(5318));const i={slug:"typescript-monorepo",title:"Integrating TypeScript in a monorepo",authors:["milesj"],tags:["typescript","monorepo"]},a=void 0,p={permalink:"/blog/typescript-monorepo",editUrl:"https://github.com/moonrepo/moon/tree/master/website/blog/2022-11-21_typescript-monorepo.mdx",source:"@site/blog/2022-11-21_typescript-monorepo.mdx",title:"Integrating TypeScript in a monorepo",description:"A common question in the JavaScript ecosystem is how to integrate TypeScript in a monorepo. This is",date:"2022-11-21T00:00:00.000Z",formattedDate:"November 21, 2022",tags:[{label:"typescript",permalink:"/blog/tags/typescript"},{label:"monorepo",permalink:"/blog/tags/monorepo"}],readingTime:.505,hasTruncateMarker:!0,authors:[{name:"Miles Johnson",title:"Founder, developer",url:"https://github.com/milesj",imageURL:"https://pbs.twimg.com/profile_images/1532262885648281601/TQbEOiNd_400x400.jpg",key:"milesj"}],frontMatter:{slug:"typescript-monorepo",title:"Integrating TypeScript in a monorepo",authors:["milesj"],tags:["typescript","monorepo"]},prevItem:{title:"moon v0.20 - Toolchain, caching, and hydration improvements",permalink:"/blog/v0.20"},nextItem:{title:"moon v0.19 - Remote caching beta, affected files, and graph optimization",permalink:"/blog/v0.19"}},c={authorsImageUrls:[void 0]},s=[],l={toc:s};function m(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,o.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"A common question in the JavaScript ecosystem is how to integrate TypeScript in a monorepo. This is\na fair question, as there's no in-depth source of truth, or one perfect way of doing it. However, we\ntook it upon ourselves to answer this question!"))}m.isMDXComponent=!0}}]);