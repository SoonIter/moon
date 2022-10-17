"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2949],{5318:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(7378);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=c(r),d=a,f=m["".concat(s,".").concat(d)]||m[d]||p[d]||o;return r?n.createElement(f,l(l({ref:t},u),{},{components:r})):n.createElement(f,l({ref:t},u))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},9798:(e,t,r)=>{r.d(t,{Z:()=>l});var n=r(7378),a=r(8944);const o="tabItem_wHwb";function l(e){let{children:t,hidden:r,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,l),hidden:r},t)}},3337:(e,t,r)=>{r.d(t,{Z:()=>d});var n=r(5773),a=r(7378),o=r(8944),l=r(6457),i=r(784),s=r(9947),c=r(3457);const u="tabList_J5MA",p="tabItem_l0OV";function m(e){var t;const{lazy:r,block:l,defaultValue:m,values:d,groupId:f,className:v}=e,b=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),g=d??b.map((e=>{let{props:{value:t,label:r,attributes:n}}=e;return{value:t,label:r,attributes:n}})),h=(0,i.l)(g,((e,t)=>e.value===t.value));if(h.length>0)throw new Error(`Docusaurus error: Duplicate values "${h.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const y=null===m?m:m??(null==(t=b.find((e=>e.props.default)))?void 0:t.props.value)??b[0].props.value;if(null!==y&&!g.some((e=>e.value===y)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${y}" but none of its children has the corresponding value. Available values are: ${g.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:k,setTabGroupChoices:w}=(0,s.U)(),[O,E]=(0,a.useState)(y),T=[],{blockElementScrollPositionUntilNextRender:j}=(0,c.o5)();if(null!=f){const e=k[f];null!=e&&e!==O&&g.some((t=>t.value===e))&&E(e)}const D=e=>{const t=e.currentTarget,r=T.indexOf(t),n=g[r].value;n!==O&&(j(t),E(n),null!=f&&w(f,String(n)))},x=e=>{var t;let r=null;switch(e.key){case"ArrowRight":{const t=T.indexOf(e.currentTarget)+1;r=T[t]??T[0];break}case"ArrowLeft":{const t=T.indexOf(e.currentTarget)-1;r=T[t]??T[T.length-1];break}}null==(t=r)||t.focus()};return a.createElement("div",{className:(0,o.Z)("tabs-container",u)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":l},v)},g.map((e=>{let{value:t,label:r,attributes:l}=e;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:O===t?0:-1,"aria-selected":O===t,key:t,ref:e=>T.push(e),onKeyDown:x,onFocus:D,onClick:D},l,{className:(0,o.Z)("tabs__item",p,null==l?void 0:l.className,{"tabs__item--active":O===t})}),r??t)}))),r?(0,a.cloneElement)(b.filter((e=>e.props.value===O))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},b.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==O})))))}function d(e){const t=(0,l.Z)();return a.createElement(m,(0,n.Z)({key:String(t)},e))}},992:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var n=r(5773),a=(r(7378),r(5318));r(3337),r(9798);const o={slug:"v0.15",title:"v0.15 - Enhanced Docker support and 1,000 stars!",authors:["milesj"],tags:["generator","docker"],image:"./img/v0.15.png"},l=void 0,i={permalink:"/blog/v0.15",editUrl:"https://github.com/moonrepo/moon/tree/master/website/blog/2022-09-26_v0.15.mdx",source:"@site/blog/2022-09-26_v0.15.mdx",title:"v0.15 - Enhanced Docker support and 1,000 stars!",description:"With this release, we've focused heavily on Docker integration and enhancing the Dockerfile",date:"2022-09-26T00:00:00.000Z",formattedDate:"September 26, 2022",tags:[{label:"generator",permalink:"/blog/tags/generator"},{label:"docker",permalink:"/blog/tags/docker"}],readingTime:3.495,hasTruncateMarker:!0,authors:[{name:"Miles Johnson",title:"Founder, developer",url:"https://github.com/milesj",imageURL:"https://pbs.twimg.com/profile_images/1532262885648281601/TQbEOiNd_400x400.jpg",key:"milesj"}],frontMatter:{slug:"v0.15",title:"v0.15 - Enhanced Docker support and 1,000 stars!",authors:["milesj"],tags:["generator","docker"],image:"./img/v0.15.png"},prevItem:{title:"v0.16 - Per-project tool versions and TypeScript impovements",permalink:"/blog/v0.16"},nextItem:{title:"v0.14 - Code generation and implicit dependencies",permalink:"/blog/v0.14"}},s={image:r(818).Z,authorsImageUrls:[void 0]},c=[],u={toc:c};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"With this release, we've focused heavily on Docker integration and enhancing the ",(0,a.kt)("inlineCode",{parentName:"p"},"Dockerfile"),"\nworkflow, as well as some minor quality of life improvements for template files and run reports."))}p.isMDXComponent=!0},818:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/v0.15-df3082f5cae38090b567718791719d91.png"}}]);