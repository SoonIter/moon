"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9514,6119],{6550:(e,t,n)=>{n.r(t),n.d(t,{default:()=>ke});var a=n(7378),l=n(6119),o=n(6816),c=n(8944),r=n(9213),i=n(9169),s=n(5484);const d="backToTopButton_ecpa",m="backToTopButtonShow_xx7T";function u(){const{shown:e,scrollToTop:t}=(0,i.a)({threshold:300});return a.createElement("button",{"aria-label":(0,r.I)({id:"theme.BackToTopButton.buttonAriaLabel",message:"Scroll back to top",description:"The ARIA label for the back to top button"}),className:(0,c.Z)("clean-btn",s.k.common.backToTopButton,d,e&&m),type:"button",onClick:t})}var b=n(8357),p=n(624),h=n(3059),E=n(5773);function f(e){return a.createElement("svg",(0,E.Z)({width:"20",height:"20","aria-hidden":"true"},e),a.createElement("g",{fill:"#7a7a7a"},a.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),a.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})))}const v="collapseSidebarButton_Essf",g="collapseSidebarButtonIcon_bqna";function k(e){let{onClick:t}=e;return a.createElement("button",{type:"button",title:(0,r.I)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,r.I)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,c.Z)("button button--secondary button--outline",v),onClick:t},a.createElement(f,{className:g}))}var _=n(10),C=n(3457),I=n(1763),N=n(5161),S=n(8862),Z=n(376),T=n(6666),y=n(1884),x=n(6457);function w(e){let{categoryLabel:t,onClick:n}=e;return a.createElement("button",{"aria-label":(0,r.I)({id:"theme.DocSidebarItem.toggleCollapsedCategoryAriaLabel",message:"Toggle the collapsible sidebar category '{label}'",description:"The ARIA label to toggle the collapsible sidebar category"},{label:t}),type:"button",className:"clean-btn menu__caret",onClick:n})}function L(e){let{item:t,onItemClick:n,activePath:l,level:o,index:r,...i}=e;const{items:d,label:m,collapsible:u,className:b,href:h}=t,f=function(e){const t=(0,x.Z)();return(0,a.useMemo)((()=>e.href?e.href:!t&&e.collapsible?(0,N.Wl)(e):void 0),[e,t])}(t),v=(0,N._F)(t,l),g=(0,S.Mg)(h,l),{collapsed:k,setCollapsed:_}=(0,Z.u)({initialState:()=>!!u&&(!v&&t.collapsed)});!function(e){let{isActive:t,collapsed:n,setCollapsed:l}=e;const o=(0,I.D9)(t);(0,a.useEffect)((()=>{t&&!o&&n&&l(!1)}),[t,o,n,l])}({isActive:v,collapsed:k,setCollapsed:_});const{expandedItem:C,setExpandedItem:L}=(0,T.f)();function A(e){void 0===e&&(e=!k),L(e?null:r),_(e)}const{docs:{sidebar:{autoCollapseCategories:M}}}=(0,p.L)();return(0,a.useEffect)((()=>{u&&C&&C!==r&&M&&_(!0)}),[u,C,r,_,M]),a.createElement("li",{className:(0,c.Z)(s.k.docs.docSidebarItemCategory,s.k.docs.docSidebarItemCategoryLevel(o),"menu__list-item",{"menu__list-item--collapsed":k},b)},a.createElement("div",{className:(0,c.Z)("menu__list-item-collapsible",{"menu__list-item-collapsible--active":g})},a.createElement(y.Z,(0,E.Z)({className:(0,c.Z)("menu__link",{"menu__link--sublist":u,"menu__link--sublist-caret":!h&&u,"menu__link--active":v}),onClick:u?e=>{null==n||n(t),h?A(!1):(e.preventDefault(),A())}:()=>{null==n||n(t)},"aria-current":g?"page":void 0,"aria-expanded":u?!k:void 0,href:u?null!=f?f:"#":f},i),m),h&&u&&a.createElement(w,{categoryLabel:m,onClick:e=>{e.preventDefault(),A()}})),a.createElement(Z.z,{lazy:!0,as:"ul",className:"menu__list",collapsed:k},a.createElement(R,{items:d,tabIndex:k?-1:0,onItemClick:n,activePath:l,level:o+1})))}var A=n(5626),M=n(8458);const F="menuExternalLink_tzvs";function B(e){let{item:t,onItemClick:n,activePath:l,level:o,index:r,...i}=e;const{href:d,label:m,className:u}=t,b=(0,N._F)(t,l),p=(0,A.Z)(d);return a.createElement("li",{className:(0,c.Z)(s.k.docs.docSidebarItemLink,s.k.docs.docSidebarItemLinkLevel(o),"menu__list-item",u),key:m},a.createElement(y.Z,(0,E.Z)({className:(0,c.Z)("menu__link",!p&&F,{"menu__link--active":b}),"aria-current":b?"page":void 0,to:d},p&&{onClick:n?()=>n(t):void 0},i),m,!p&&a.createElement(M.Z,null)))}const P="menuHtmlItem_s6ic";function H(e){let{item:t,level:n,index:l}=e;const{value:o,defaultStyle:r,className:i}=t;return a.createElement("li",{className:(0,c.Z)(s.k.docs.docSidebarItemLink,s.k.docs.docSidebarItemLinkLevel(n),r&&P+" menu__list-item",i),key:l,dangerouslySetInnerHTML:{__html:o}})}function D(e){let{item:t,...n}=e;switch(t.type){case"category":return a.createElement(L,(0,E.Z)({item:t},n));case"html":return a.createElement(H,(0,E.Z)({item:t},n));default:return a.createElement(B,(0,E.Z)({item:t},n))}}function W(e){let{items:t,...n}=e;return a.createElement(T.D,null,t.map(((e,t)=>a.createElement(D,(0,E.Z)({key:t,item:e,index:t},n)))))}const R=(0,a.memo)(W),z="menu_XU2j",U="menuWithAnnouncementBar_vo3y";function V(e){let{path:t,sidebar:n,className:l}=e;const o=function(){const{isActive:e}=(0,_.nT)(),[t,n]=(0,a.useState)(e);return(0,C.RF)((t=>{let{scrollY:a}=t;e&&n(0===a)}),[e]),e&&t}();return a.createElement("nav",{className:(0,c.Z)("menu thin-scrollbar",z,o&&U,l)},a.createElement("ul",{className:(0,c.Z)(s.k.docs.docSidebarMenu,"menu__list")},a.createElement(R,{items:n,activePath:t,level:1})))}const q="sidebar_Uz2u",Y="sidebarWithHideableNavbar_MFe1",G="sidebarHidden_x4MP",Q="sidebarLogo_iqfm";function j(e){let{path:t,sidebar:n,onCollapse:l,isHidden:o}=e;const{navbar:{hideOnScroll:r},docs:{sidebar:{hideable:i}}}=(0,p.L)();return a.createElement("div",{className:(0,c.Z)(q,r&&Y,o&&G)},r&&a.createElement(h.Z,{tabIndex:-1,className:Q}),a.createElement(V,{path:t,sidebar:n}),i&&a.createElement(k,{onClick:l}))}const J=a.memo(j);var K=n(5536),O=n(3471);const X=e=>{let{sidebar:t,path:n}=e;const l=(0,K.e)();return a.createElement("ul",{className:(0,c.Z)(s.k.docs.docSidebarMenu,"menu__list")},a.createElement(R,{items:t,activePath:n,onItemClick:e=>{"category"===e.type&&e.href&&l.toggle(),"link"===e.type&&l.toggle()},level:1}))};function $(e){return a.createElement(O.Zo,{component:X,props:e})}const ee=a.memo($);function te(e){const t=(0,b.i)(),n="desktop"===t||"ssr"===t,l="mobile"===t;return a.createElement(a.Fragment,null,n&&a.createElement(J,e),l&&a.createElement(ee,e))}var ne=n(5331);const ae="expandButton_liit",le="expandButtonIcon_Dd1w";function oe(e){let{toggleSidebar:t}=e;return a.createElement("div",{className:ae,title:(0,r.I)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,r.I)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:t,onClick:t},a.createElement(f,{className:le}))}const ce="docSidebarContainer_cJdQ",re="docSidebarContainerHidden_B5zG";var ie=n(2095);function se(e){var t;let{children:n}=e;const l=(0,ie.V)();return a.createElement(a.Fragment,{key:null!=(t=null==l?void 0:l.name)?t:"noSidebar"},n)}function de(e){let{sidebar:t,hiddenSidebarContainer:n,setHiddenSidebarContainer:l}=e;const{pathname:o}=(0,ne.TH)(),[r,i]=(0,a.useState)(!1),d=(0,a.useCallback)((()=>{r&&i(!1),l((e=>!e))}),[l,r]);return a.createElement("aside",{className:(0,c.Z)(s.k.docs.docSidebarContainer,ce,n&&re),onTransitionEnd:e=>{e.currentTarget.classList.contains(ce)&&n&&i(!0)}},a.createElement(se,null,a.createElement(te,{sidebar:t,path:o,onCollapse:d,isHidden:r})),r&&a.createElement(oe,{toggleSidebar:d}))}const me={docMainContainer:"docMainContainer_tUyt",docMainContainerEnhanced:"docMainContainerEnhanced_cVAL",docItemWrapperEnhanced:"docItemWrapperEnhanced_IQlw"};function ue(e){let{hiddenSidebarContainer:t,children:n}=e;const l=(0,ie.V)();return a.createElement("main",{className:(0,c.Z)(me.docMainContainer,(t||!l)&&me.docMainContainerEnhanced)},a.createElement("div",{className:(0,c.Z)("container padding-top--md padding-bottom--lg",me.docItemWrapper,t&&me.docItemWrapperEnhanced)},n))}const be="docPage_ECkl",pe="docsWrapper_i7DT";function he(e){let{children:t}=e;const n=(0,ie.V)(),[l,c]=(0,a.useState)(!1);return a.createElement(o.Z,{wrapperClassName:pe},a.createElement(u,null),a.createElement("div",{className:be},n&&a.createElement(de,{sidebar:n.items,hiddenSidebarContainer:l,setHiddenSidebarContainer:c}),a.createElement(ue,{hiddenSidebarContainer:l},t)))}var Ee=n(3149),fe=n(1123),ve=n(5611),ge=n(1867);function ke(e){const{versionMetadata:t}=e,n=(0,N.hI)(e);if(!n)return a.createElement(l.default,null);const{docElement:o,sidebarName:r,sidebarItems:i}=n;return a.createElement(a.Fragment,null,a.createElement(ge.Z,{version:t.version,tag:(0,Ee.os)(t.pluginId,t.version)}),a.createElement(fe.FG,{className:(0,c.Z)(s.k.wrapper.docsPages,s.k.page.docsDocPage,e.versionMetadata.className)},a.createElement(ve.q,{version:t},a.createElement(ie.b,{name:r,items:i},a.createElement(he,null,o)))))}},6119:(e,t,n)=>{n.r(t),n.d(t,{default:()=>r});var a=n(7378),l=n(6816),o=n(9213),c=n(1123);function r(){return a.createElement(a.Fragment,null,a.createElement(c.d,{title:(0,o.I)({id:"theme.NotFound.title",message:"Page Not Found"})}),a.createElement(l.Z,null,a.createElement("main",{className:"container margin-vert--xl"},a.createElement("div",{className:"row"},a.createElement("div",{className:"col col--6 col--offset-3"},a.createElement("h1",{className:"hero__title"},a.createElement(o.Z,{id:"theme.NotFound.title",description:"The title of the 404 page"},"Page Not Found")),a.createElement("p",null,a.createElement(o.Z,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page"},"We could not find what you were looking for.")),a.createElement("p",null,a.createElement(o.Z,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page"},"Please contact the owner of the site that linked you to the original URL and let them know their link is broken.")))))))}},6666:(e,t,n)=>{n.d(t,{D:()=>r,f:()=>i});var a=n(7378),l=n(1763);const o=Symbol("EmptyContext"),c=a.createContext(o);function r(e){let{children:t}=e;const[n,l]=(0,a.useState)(null),o=(0,a.useMemo)((()=>({expandedItem:n,setExpandedItem:l})),[n]);return a.createElement(c.Provider,{value:o},t)}function i(){const e=(0,a.useContext)(c);if(e===o)throw new l.i6("DocSidebarItemsExpandedStateProvider");return e}},9169:(e,t,n)=>{n.d(t,{a:()=>c});var a=n(7378),l=n(3457),o=n(4993);function c(e){let{threshold:t}=e;const[n,c]=(0,a.useState)(!1),r=(0,a.useRef)(!1),{startScroll:i,cancelScroll:s}=(0,l.Ct)();return(0,l.RF)(((e,n)=>{let{scrollY:a}=e;const l=null==n?void 0:n.scrollY;l&&(r.current?r.current=!1:a>=l?(s(),c(!1)):a<t?c(!1):a+window.innerHeight<document.documentElement.scrollHeight&&c(!0))})),(0,o.S)((e=>{e.location.hash&&(r.current=!0,c(!1))})),{shown:n,scrollToTop:()=>i(0)}}}}]);