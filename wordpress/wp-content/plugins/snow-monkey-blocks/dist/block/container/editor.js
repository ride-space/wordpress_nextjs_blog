!function(){var e={184:function(e,t){var n;!function(){"use strict";var o={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var i=typeof n;if("string"===i||"number"===i)e.push(n);else if(Array.isArray(n)){if(n.length){var s=r.apply(null,n);s&&e.push(s)}}else if("object"===i){if(n.toString!==Object.prototype.toString&&!n.toString.toString().includes("[native code]")){e.push(n.toString());continue}for(var a in n)o.call(n,a)&&n[a]&&e.push(a)}}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(n=function(){return r}.apply(t,[]))||(e.exports=n)}()}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var i=t[o]={exports:{}};return e[o](i,i.exports,n),i.exports}n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,{a:t}),t},n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},function(){"use strict";var e={};n.r(e),n.d(e,{metadata:function(){return i},name:function(){return w},settings:function(){return b}});var t=window.wp.element,o=(window.lodash,window.wp.blocks),r=(window.wp.richText,window.wp.i18n),i=JSON.parse('{"apiVersion":2,"name":"snow-monkey-blocks/container","title":"Container","description":"Container blocks keep content within a certain width.","category":"smb","attributes":{"contentsMaxWidth":{"type":"string"},"isSlim":{"type":"boolean","default":false}},"supports":{"html":false},"example":{"innerBlocks":[{"name":"core/paragraph","attributes":{"content":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"}}]},"style":"snow-monkey-blocks/container","editorScript":"file:../../dist/block/container/editor.js"}'),s=(0,t.createElement)("svg",{viewBox:"0 0 24 24"},(0,t.createElement)("path",{d:"M3.86,2.5H1a1,1,0,0,0-1,1v16a1,1,0,0,0,1,1H3.86v-1H1.5A.5.5,0,0,1,1,19V4a.5.5,0,0,1,.5-.5H3.86v-1"}),(0,t.createElement)("path",{d:"M20.14,2.5H23a1,1,0,0,1,1,1v16a1,1,0,0,1-1,1H20.14v-1H22.5A.5.5,0,0,0,23,19V4a.5.5,0,0,0-.5-.5H20.14v-1"})),a=n(184),l=n.n(a),c=window.wp.blockEditor,d=window.wp.components,m=window.wp.data;function u(){return u=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},u.apply(this,arguments)}function p(e,n){let{label:o,onChange:i,value:s,withReset:a=!0}=e;const l=(0,d.__experimentalUseCustomUnits)({availableUnits:["px","em","rem","%","vw"]});return(0,t.createElement)("fieldset",u({className:"smb-width-picker"},n?{}:{ref:n}),(0,t.createElement)("div",{className:"smb-width-picker__controls"},(0,t.createElement)(d.Flex,{justify:"space-between",className:"smb-width-picker__custom-size-control"},(0,t.createElement)(d.FlexItem,{isBlock:!0},(0,t.createElement)(d.__experimentalUnitControl,{label:o,labelPosition:"edge",value:s,onChange:e=>{e=0>parseFloat(e)||0===parseFloat(e)?void 0:e,i(e)},units:l})),a&&(0,t.createElement)(d.FlexItem,{isBlock:!0},(0,t.createElement)(d.Button,{className:"components-color-palette__clear",disabled:void 0===s,onClick:()=>i(void 0),isSmall:!0,isSecondary:!0},(0,r.__)("Reset"))))))}const{name:w}=i,b={icon:{foreground:"#cd162c",src:s},edit:function(e){let{attributes:n,setAttributes:o,className:i,clientId:s}=e;const{contentsMaxWidth:a,isSlim:u}=n,w=(0,m.useSelect)((e=>{const{getBlock:t}=e("core/block-editor"),n=t(s);return!(!n||!n.innerBlocks.length)}),[s]),b=l()("smb-container","c-container",i),f=l()("smb-container__body",{"u-slim-width":u&&!a}),k={width:a&&!u?a:void 0},v=(0,c.useBlockProps)({className:b}),y=(0,c.useInnerBlocksProps)({className:f,style:k},{renderAppender:w?c.InnerBlocks.DefaultBlockAppender:c.InnerBlocks.ButtonBlockAppender}),h=!!a,g=u;return(0,t.createElement)(t.Fragment,null,(0,t.createElement)(c.InspectorControls,null,(0,t.createElement)(d.PanelBody,{title:(0,r.__)("Block settings","snow-monkey-blocks")},!g&&(0,t.createElement)(d.BaseControl,{label:(0,r.__)("Max width of the contents","snow-monkey-blocks"),id:"snow-monkey-blocks/container/contents-max-width"},(0,t.createElement)(p,{value:a,onChange:e=>o({contentsMaxWidth:e})})),!h&&(0,t.createElement)(d.ToggleControl,{label:(0,r.__)("Make the contents width slim","snow-monkey-blocks"),checked:u,onChange:e=>o({isSlim:e})}))),(0,t.createElement)("div",v,(0,t.createElement)("div",y)))},save:function(e){let{attributes:n,className:o}=e;const{contentsMaxWidth:r,isSlim:i}=n,s=l()("smb-container","c-container",o),a=l()("smb-container__body",{"u-slim-width":i&&!r}),d={width:r&&!i?r:void 0};return(0,t.createElement)("div",c.useBlockProps.save({className:s}),(0,t.createElement)("div",c.useInnerBlocksProps.save({className:a,style:d})))}};(e=>{if(!e)return;const{metadata:t,settings:n,name:i}=e;t&&(t.title&&(t.title=(0,r.__)(t.title,"snow-monkey-blocks"),n.title=t.title),t.description&&(t.description=(0,r.__)(t.description,"snow-monkey-blocks"),n.description=t.description),t.keywords&&(t.keywords=(0,r.__)(t.keywords,"snow-monkey-blocks"),n.keywords=t.keywords)),(0,o.registerBlockType)({name:i,...t},n)})(e)}()}();