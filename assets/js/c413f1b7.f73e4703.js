"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4384],{5318:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(7378);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=s(r),f=o,d=m["".concat(c,".").concat(f)]||m[f]||u[f]||i;return r?n.createElement(d,a(a({ref:t},p),{},{components:r})):n.createElement(d,a({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var s=2;s<i;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},8109:(e,t,r)=>{r.d(t,{Z:()=>o});var n=r(7378);function o(e){let{src:t,width:r="90%",alt:o="",title:i,align:a="center",padding:l="1rem"}=e;return n.createElement("div",{style:{paddingBottom:l,paddingTop:l,textAlign:a}},n.createElement("img",{src:t.default,width:r,alt:o,title:i}))}},5971:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var n=r(5773),o=(r(7378),r(5318));r(8109);const i={slug:"v0.18",title:"v0.18 - Improved configuration and initialization flow",authors:["milesj"],tags:["projects","config","init","node"]},a=void 0,l={permalink:"/blog/v0.18",editUrl:"https://github.com/moonrepo/moon/tree/master/website/blog/2022-10-31_v0.18.mdx",source:"@site/blog/2022-10-31_v0.18.mdx",title:"v0.18 - Improved configuration and initialization flow",description:"Happy Halloween \ud83c\udf83 \ud83d\udc7b! With this spooky release, we've focused heavily on our internals and",date:"2022-10-31T00:00:00.000Z",formattedDate:"October 31, 2022",tags:[{label:"projects",permalink:"/blog/tags/projects"},{label:"config",permalink:"/blog/tags/config"},{label:"init",permalink:"/blog/tags/init"},{label:"node",permalink:"/blog/tags/node"}],readingTime:2.025,hasTruncateMarker:!0,authors:[{name:"Miles Johnson",title:"Founder, developer",url:"https://github.com/milesj",imageURL:"https://pbs.twimg.com/profile_images/1532262885648281601/TQbEOiNd_400x400.jpg",key:"milesj"}],frontMatter:{slug:"v0.18",title:"v0.18 - Improved configuration and initialization flow",authors:["milesj"],tags:["projects","config","init","node"]},nextItem:{title:"v0.17 - Webhooks, extended YAML, and improved runtime performance",permalink:"/blog/v0.17"}},c={authorsImageUrls:[void 0]},s=[],p={toc:s};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Happy Halloween \ud83c\udf83 \ud83d\udc7b! With this spooky release, we've focused heavily on our internals and\nbenchmarking performance metrics, so it's rather light on new features, but we still have some to\nshow!"))}u.isMDXComponent=!0}}]);