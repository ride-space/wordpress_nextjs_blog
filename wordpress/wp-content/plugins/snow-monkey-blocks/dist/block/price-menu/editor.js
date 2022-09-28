!function(){var e={184:function(e,o){var t;!function(){"use strict";var n={}.hasOwnProperty;function r(){for(var e=[],o=0;o<arguments.length;o++){var t=arguments[o];if(t){var c=typeof t;if("string"===c||"number"===c)e.push(t);else if(Array.isArray(t)){if(t.length){var i=r.apply(null,t);i&&e.push(i)}}else if("object"===c){if(t.toString!==Object.prototype.toString&&!t.toString.toString().includes("[native code]")){e.push(t.toString());continue}for(var l in t)n.call(t,l)&&t[l]&&e.push(l)}}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(t=function(){return r}.apply(o,[]))||(e.exports=t)}()}},o={};function t(n){var r=o[n];if(void 0!==r)return r.exports;var c=o[n]={exports:{}};return e[n](c,c.exports,t),c.exports}t.n=function(e){var o=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(o,{a:o}),o},t.d=function(e,o){for(var n in o)t.o(o,n)&&!t.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:o[n]})},t.o=function(e,o){return Object.prototype.hasOwnProperty.call(e,o)},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},function(){"use strict";var e={};t.r(e),t.d(e,{metadata:function(){return c},name:function(){return d},settings:function(){return k}});var o=window.wp.element,n=(window.lodash,window.wp.blocks),r=(window.wp.richText,window.wp.i18n),c=JSON.parse('{"apiVersion":2,"name":"snow-monkey-blocks/price-menu","title":"Price menu","description":"Display the menu name and the price.","category":"smb","supports":{"html":false},"example":{"innerBlocks":[{"name":"snow-monkey-blocks/price-menu-item","attributes":{"title":"Lorem ipsum","price":"$100"}},{"name":"snow-monkey-blocks/price-menu-item","attributes":{"title":"dolor sit amet","price":"$200"}}]},"style":"snow-monkey-blocks/price-menu","editorStyle":"snow-monkey-blocks/price-menu/editor","editorScript":"file:../../dist/block/price-menu/editor.js"}'),i=(0,o.createElement)("svg",{viewBox:"0 0 24 24"},(0,o.createElement)("path",{d:"M12,3a9,9,0,1,0,9,9A9,9,0,0,0,12,3Zm0,17a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z"}),(0,o.createElement)("path",{d:"M12.33,11.34c-.76-.29-1.42-.54-1.42-1s.45-.85,1.17-.85a2.31,2.31,0,0,1,1.63.63l.06.06.61-.69-.06,0a2.82,2.82,0,0,0-1.79-.89V7h-.86V8.52A1.89,1.89,0,0,0,9.8,10.33c0,1.14,1.12,1.58,2.1,2,.79.31,1.54.61,1.54,1.2s-.49.9-1.29.9a3.45,3.45,0,0,1-2.08-.76L10,13.57l-.54.81.06,0a4.17,4.17,0,0,0,2.16.9V17h.86V15.32c1.23-.16,2-.9,2-1.9C14.55,12.18,13.37,11.73,12.33,11.34Z"})),l=t(184),s=t.n(l),a=window.wp.blockEditor,p=window.wp.data;const u=["snow-monkey-blocks/price-menu-item"],m=[["snow-monkey-blocks/price-menu-item"]],{name:d}=c,k={icon:{foreground:"#cd162c",src:i},edit:function(e){let{className:t,clientId:r}=e;((e,t)=>{const{replaceBlock:r}=(0,p.useDispatch)("core/block-editor"),{getBlockOrder:c,getBlock:i}=(0,p.useSelect)((e=>({getBlockOrder:e("core/block-editor").getBlockOrder,getBlock:e("core/block-editor").getBlock})),[]),l=e=>`wp-block-${e.replace("/","-")}`;(0,o.useEffect)((()=>{c(e).forEach((e=>{const o=i(e);t.forEach((e=>{if("core/missing"===o.name||e.oldBlockName===o.name){const t=(0,n.parse)(o.originalContent.replace(e.oldBlockName,e.newBlockName).replace(l(e.oldBlockName),l(e.oldBlockName)+" "+l(e.newBlockName)))[0];r(o.clientId,t)}}))}))}),[])})(r,[{oldBlockName:"snow-monkey-blocks/price-menu--item",newBlockName:"snow-monkey-blocks/price-menu-item"}]);const c=(0,p.useSelect)((e=>{var o,t;return!(null===(o=e("core/block-editor").getBlock(r))||void 0===o||null===(t=o.innerBlocks)||void 0===t||!t.length)}),[r]),i=s()("smb-price-menu",t),l=(0,a.useBlockProps)({className:i}),d=(0,a.useInnerBlocksProps)(l,{allowedBlocks:u,template:m,templateLock:!1,renderAppender:c?a.InnerBlocks.DefaultBlockAppender:a.InnerBlocks.ButtonBlockAppender});return(0,o.createElement)("div",d)},save:function(e){let{className:t}=e;const n=s()("smb-price-menu",t);return(0,o.createElement)("div",a.useInnerBlocksProps.save(a.useBlockProps.save({className:n})))}};(e=>{if(!e)return;const{metadata:o,settings:t,name:c}=e;o&&(o.title&&(o.title=(0,r.__)(o.title,"snow-monkey-blocks"),t.title=o.title),o.description&&(o.description=(0,r.__)(o.description,"snow-monkey-blocks"),t.description=o.description),o.keywords&&(o.keywords=(0,r.__)(o.keywords,"snow-monkey-blocks"),t.keywords=o.keywords)),(0,n.registerBlockType)({name:c,...o},t)})(e)}()}();