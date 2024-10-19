"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([["76076"],{97483:function(e,r,n){n.r(r),n.d(r,{metadata:()=>t,contentTitle:()=>u,default:()=>f,assets:()=>d,toc:()=>p,frontMatter:()=>s});var t=JSON.parse('{"id":"migration/index","title":"Upgrading Docusaurus","description":"Docusaurus versioning is based on the major.minor.patch scheme and respects Semantic Versioning.","source":"@site/docs/migration/index.mdx","sourceDirName":"migration","slug":"/migration","permalink":"/docs/migration","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/edit/main/website/docs/migration/index.mdx","tags":[],"version":"current","lastUpdatedBy":"Andrew Asche","lastUpdatedAt":1729270941000,"frontMatter":{"slug":"/migration"},"sidebar":"docs","previous":{"title":"Client architecture","permalink":"/docs/advanced/client"},"next":{"title":"To Docusaurus v3","permalink":"/docs/migration/v3"}}'),a=n("24246"),o=n("80980"),l=n("15398"),i=n("58636"),c=n("78042");let s={slug:"/migration"},u="Upgrading Docusaurus",d={},p=[{value:"Troubleshooting upgrades",id:"troubleshooting-upgrades",level:2},{value:"Run the <code>clear</code> command",id:"run-the-clear-command",level:3},{value:"Remove <code>node_modules</code> and your lock file(s)",id:"remove-node_modules-and-your-lock-files",level:3}];function h(e){let r={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",strong:"strong",...(0,o.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(r.header,{children:(0,a.jsx)(r.h1,{id:"upgrading-docusaurus",children:"Upgrading Docusaurus"})}),"\n",(0,a.jsxs)(r.p,{children:["Docusaurus versioning is based on the ",(0,a.jsx)(r.code,{children:"major.minor.patch"})," scheme and respects ",(0,a.jsx)(r.a,{href:"https://semver.org/",children:(0,a.jsx)(r.strong,{children:"Semantic Versioning"})}),"."]}),"\n",(0,a.jsxs)(r.p,{children:[(0,a.jsx)(r.strong,{children:"Breaking changes"})," are only released on major version upgrades, and thoroughly documented in the following upgrade guides."]}),"\n","\n",(0,a.jsx)(c.Z,{}),"\n",(0,a.jsx)(r.h2,{id:"troubleshooting-upgrades",children:"Troubleshooting upgrades"}),"\n",(0,a.jsx)(r.p,{children:"When upgrading Docusaurus you may experience issues caused by mismatching cached dependencies - there are a few troubleshooting steps you should perform to resolve these common issues before reporting a bug or seeking support."}),"\n",(0,a.jsxs)(r.h3,{id:"run-the-clear-command",children:["Run the ",(0,a.jsx)(r.code,{children:"clear"})," command"]}),"\n",(0,a.jsx)(r.p,{children:"This CLI command is used to clear a Docusaurus site's generated assets, caches and build artifacts."}),"\n",(0,a.jsxs)(l.Z,{groupId:"npm2yarn",children:[(0,a.jsx)(i.Z,{value:"npm",children:(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-bash",children:"npm run clear\n"})})}),(0,a.jsx)(i.Z,{value:"yarn",label:"Yarn",children:(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-bash",children:"yarn clear\n"})})}),(0,a.jsx)(i.Z,{value:"pnpm",label:"pnpm",children:(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-bash",children:"pnpm run clear\n"})})})]}),"\n",(0,a.jsxs)(r.h3,{id:"remove-node_modules-and-your-lock-files",children:["Remove ",(0,a.jsx)(r.code,{children:"node_modules"})," and your lock file(s)"]}),"\n",(0,a.jsxs)(r.p,{children:["Remove the ",(0,a.jsx)(r.code,{children:"node_modules"})," folder and your package manager's lock file using the following:"]}),"\n",(0,a.jsxs)(l.Z,{children:[(0,a.jsx)(i.Z,{label:"Bash",value:"bash",children:(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-bash",children:"rm -rf node_modules yarn.lock package-lock.json\n"})})}),(0,a.jsx)(i.Z,{label:"PowerShell",value:"powershell",children:(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-powershell",children:"@('node_modules','yarn.lock','package-lock.json') | Remove-Item -Force -Recurse -ErrorAction SilentlyContinue\n"})})})]}),"\n",(0,a.jsxs)(r.p,{children:["Then reinstall packages and regenerate the ",(0,a.jsx)(r.code,{children:"lock"})," file using:"]}),"\n",(0,a.jsxs)(l.Z,{groupId:"npm2yarn",children:[(0,a.jsx)(i.Z,{value:"npm",children:(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-bash",children:"npm install\n"})})}),(0,a.jsx)(i.Z,{value:"yarn",label:"Yarn",children:(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-bash",children:"yarn install\n"})})}),(0,a.jsx)(i.Z,{value:"pnpm",label:"pnpm",children:(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-bash",children:"pnpm install\n"})})})]})]})}function f(e={}){let{wrapper:r}={...(0,o.a)(),...e.components};return r?(0,a.jsx)(r,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},78042:function(e,r,n){n.d(r,{Z:()=>v});var t=n("24246");n("27378");var a=n("90496"),o=n("85921"),l=n("35363"),i=n("11660"),c=n("82095"),s=n("77827"),u=n("57922");let d={cardContainer:"cardContainer_Uewx",cardTitle:"cardTitle_dwRT",cardDescription:"cardDescription_mCBT"};function p(e){var r=e.href,n=e.children;return(0,t.jsx)(l.Z,{href:r,className:(0,a.Z)("card padding--lg",d.cardContainer),children:n})}function h(e){var r=e.href,n=e.icon,o=e.title,l=e.description;return(0,t.jsxs)(p,{href:r,children:[(0,t.jsxs)(u.Z,{as:"h2",className:(0,a.Z)("text--truncate",d.cardTitle),title:o,children:[n," ",o]}),l&&(0,t.jsx)("p",{className:(0,a.Z)("text--truncate",d.cardDescription),title:l,children:l})]})}function f(e){var r,n,a=e.item,l=(0,o.LM)(a);var c=(r=(0,i.c)().selectMessage,function(e){return r(e,(0,s.I)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:e}))});return l?(0,t.jsx)(h,{href:l,icon:"\uD83D\uDDC3\uFE0F",title:a.label,description:null!==(n=a.description)&&void 0!==n?n:c(a.items.length)}):null}function m(e){var r,n,a=e.item,l=(0,c.Z)(a.href)?"\uD83D\uDCC4\uFE0F":"\uD83D\uDD17",i=(0,o.xz)(null!==(r=a.docId)&&void 0!==r?r:void 0);return(0,t.jsx)(h,{href:a.href,icon:l,title:a.label,description:null!==(n=a.description)&&void 0!==n?n:null==i?void 0:i.description})}function g(e){var r=e.item;switch(r.type){case"link":return(0,t.jsx)(m,{item:r});case"category":return(0,t.jsx)(f,{item:r});default:throw Error("unknown item type ".concat(JSON.stringify(r)))}}function b(e){var r=e.className,n=(0,o.jA)();return(0,t.jsx)(v,{items:n.items,className:r})}function v(e){var r=e.items,n=e.className;if(!r)return(0,t.jsx)(b,function(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{},t=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.forEach(function(r){var t,a,o;t=e,a=r,o=n[r],a in t?Object.defineProperty(t,a,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[a]=o})}return e}({},e));var l=(0,o.MN)(r);return(0,t.jsx)("section",{className:(0,a.Z)("row",n),children:l.map(function(e,r){return(0,t.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,t.jsx)(g,{item:e})},r)})})}},58636:function(e,r,n){n.d(r,{Z:()=>l});var t=n("24246");n("27378");var a=n("90496");let o="tabItem_pnkT";function l(e){var r=e.children,n=e.hidden,l=e.className;return(0,t.jsx)("div",{role:"tabpanel",className:(0,a.Z)(o,l),hidden:n,children:r})}},15398:function(e,r,n){n.d(r,{Z:()=>k});var t=n("24246"),a=n("27378"),o=n("90496"),l=n("54947"),i=n("3620"),c=n("844"),s=n("97486"),u=n("32263"),d=n("16971");function p(e,r){(null==r||r>e.length)&&(r=e.length);for(var n=0,t=Array(r);n<r;n++)t[n]=e[n];return t}function h(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var n,t,a=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=a){var o=[],l=!0,i=!1;try{for(a=a.call(e);!(l=(n=a.next()).done)&&(o.push(n.value),!r||o.length!==r);l=!0);}catch(e){i=!0,t=e}finally{try{!l&&null!=a.return&&a.return()}finally{if(i)throw t}}return o}}(e,r)||function(e,r){if(e){if("string"==typeof e)return p(e,r);var n=Object.prototype.toString.call(e).slice(8,-1);if("Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return p(e,r)}}(e,r)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function f(e){var r,n;return null!==(n=null===(r=a.Children.toArray(e).filter(function(e){return"\n"!==e}).map(function(e){var r,n;if(!e||(0,a.isValidElement)(e)&&(r=e.props)&&(void 0===r?"undefined":(n=r)&&"undefined"!=typeof Symbol&&n.constructor===Symbol?"symbol":typeof n)=="object"&&"value"in r)return e;throw Error("Docusaurus error: Bad <Tabs> child <".concat("string"==typeof e.type?e.type:e.type.name,'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.'))}))||void 0===r?void 0:r.filter(Boolean))&&void 0!==n?n:[]}function m(e){var r=e.value;return e.tabValues.some(function(e){return e.value===r})}var g=n("71607");let b="tabList_Qoir",v="tabItem_AQgk";function y(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{},t=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.forEach(function(r){var t,a,o;t=e,a=r,o=n[r],a in t?Object.defineProperty(t,a,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[a]=o})}return e}function j(e,r){return r=null!=r?r:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):(function(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n.push.apply(n,t)}return n})(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}),e}function x(e){var r=e.className,n=e.block,a=e.selectedValue,i=e.selectValue,c=e.tabValues,s=[],u=(0,l.o5)().blockElementScrollPositionUntilNextRender,d=function(e){var r=e.currentTarget,n=c[s.indexOf(r)].value;n!==a&&(u(r),i(n))},p=function(e){var r=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":var n,t=s.indexOf(e.currentTarget)+1;r=null!==(n=s[t])&&void 0!==n?n:s[0];break;case"ArrowLeft":var a,o=s.indexOf(e.currentTarget)-1;r=null!==(a=s[o])&&void 0!==a?a:s[s.length-1]}null==r||r.focus()};return(0,t.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},r),children:c.map(function(e){var r=e.value,n=e.label,l=e.attributes;return(0,t.jsx)("li",j(y({role:"tab",tabIndex:a===r?0:-1,"aria-selected":a===r,ref:function(e){return s.push(e)},onKeyDown:p,onClick:d},l),{className:(0,o.Z)("tabs__item",v,null==l?void 0:l.className,{"tabs__item--active":a===r}),children:null!=n?n:r}),r)})})}function w(e){var r=e.lazy,n=e.children,l=e.selectedValue,i=(Array.isArray(n)?n:[n]).filter(Boolean);if(r){var c=i.find(function(e){return e.props.value===l});return c?(0,a.cloneElement)(c,{className:(0,o.Z)("margin-top--md",c.props.className)}):null}return(0,t.jsx)("div",{className:"margin-top--md",children:i.map(function(e,r){return(0,a.cloneElement)(e,{key:r,hidden:e.props.value!==l})})})}function O(e){var r=function(e){var r,n,t,o,l,p,g,b,v,y,j,x,w,O,k=e.defaultValue,D=e.queryString,S=e.groupId;var P=(n=(r=e).values,t=r.children,(0,a.useMemo)(function(){var e=null!=n?n:f(t).map(function(e){var r=e.props;return{value:r.value,label:r.label,attributes:r.attributes,default:r.default}});return!function(e){var r=(0,u.lx)(e,function(e,r){return e.value===r.value});if(r.length>0)throw Error('Docusaurus error: Duplicate values "'.concat(r.map(function(e){return e.value}).join(", "),'" found in <Tabs>. Every value needs to be unique.'))}(e),e},[n,t])),N=h((0,a.useState)(function(){return function(e){var r,n=e.defaultValue,t=e.tabValues;if(0===t.length)throw Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:t}))throw Error('Docusaurus error: The <Tabs> has a defaultValue "'.concat(n,'" but none of its children has the corresponding value. Available values are: ').concat(t.map(function(e){return e.value}).join(", "),". If you intend to show no default tab, use defaultValue={null} instead."));return n}var a=null!==(r=t.find(function(e){return e.default}))&&void 0!==r?r:t[0];if(!a)throw Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:k,tabValues:P})}),2),Z=N[0],T=N[1];var I=h((l=(o={queryString:void 0!==D&&D,groupId:S}).queryString,p=o.groupId,g=(0,i.k6)(),b=function(e){var r=e.queryString,n=void 0!==r&&r,t=e.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=t?t:null}({queryString:void 0!==l&&l,groupId:p}),[(0,s._X)(b),(0,a.useCallback)(function(e){if(!!b){var r,n,t=new URLSearchParams(g.location.search);t.set(b,e),g.replace((r=function(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{},t=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.forEach(function(r){var t,a,o;t=e,a=r,o=n[r],a in t?Object.defineProperty(t,a,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[a]=o})}return e}({},g.location),n=(n={search:t.toString()},n),Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(n)):(function(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n.push.apply(n,t)}return n})(Object(n)).forEach(function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(n,e))}),r))}},[b,g])]),2),E=I[0],C=I[1];var V=h((y=(v=({groupId:S}).groupId)?"docusaurus.tab.".concat(v):null,x=(j=h((0,d.Nk)(y),2))[0],w=j[1],[x,(0,a.useCallback)(function(e){if(!!y)w.set(e)},[y,w])]),2),A=V[0],_=V[1];var R=m({value:O=null!=E?E:A,tabValues:P})?O:null;return(0,c.Z)(function(){R&&T(R)},[R]),{selectedValue:Z,selectValue:(0,a.useCallback)(function(e){if(!m({value:e,tabValues:P}))throw Error("Can't select invalid tab value=".concat(e));T(e),C(e),_(e)},[C,_,P]),tabValues:P}}(e);return(0,t.jsxs)("div",{className:(0,o.Z)("tabs-container",b),children:[(0,t.jsx)(x,y({},r,e)),(0,t.jsx)(w,y({},r,e))]})}function k(e){var r=(0,g.Z)();return(0,t.jsx)(O,j(y({},e),{children:f(e.children)}),String(r))}},11660:function(e,r,n){n.d(r,{c:function(){return c}});var t=n(27378),a=n(8156),o=["zero","one","two","few","many","other"];function l(e){return o.filter(function(r){return e.includes(r)})}var i={locale:"en",pluralForms:l(["one","other"]),select:function(e){return 1===e?"one":"other"}};function c(){var e,r=(e=(0,a.Z)().i18n.currentLocale,(0,t.useMemo)(function(){try{var r,n;return r=e,n=new Intl.PluralRules(r),{locale:r,pluralForms:l(n.resolvedOptions().pluralCategories),select:function(e){return n.select(e)}}}catch(r){return console.error('Failed to use Intl.PluralRules for locale "'.concat(e,'".\nDocusaurus will fallback to the default (English) implementation.\nError: ').concat(r.message,"\n")),i}},[e]));return{selectMessage:function(e,n){return function(e,r,n){var t=e.split("|");if(1===t.length)return t[0];t.length>n.pluralForms.length&&console.error("For locale=".concat(n.locale,", a maximum of ").concat(n.pluralForms.length," plural forms are expected (").concat(n.pluralForms.join(","),"), but the message contains ").concat(t.length,": ").concat(e));var a=n.select(r);return t[Math.min(n.pluralForms.indexOf(a),t.length-1)]}(n,e,r)}}}},80980:function(e,r,n){n.d(r,{Z:function(){return i},a:function(){return l}});var t=n(27378);let a={},o=t.createContext(a);function l(e){let r=t.useContext(o);return t.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),t.createElement(o.Provider,{value:r},e.children)}}}]);