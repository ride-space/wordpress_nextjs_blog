!function(){var e={184:function(e,t){var r;!function(){"use strict";var o={}.hasOwnProperty;function n(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var c=typeof r;if("string"===c||"number"===c)e.push(r);else if(Array.isArray(r)){if(r.length){var i=n.apply(null,r);i&&e.push(i)}}else if("object"===c){if(r.toString!==Object.prototype.toString&&!r.toString.toString().includes("[native code]")){e.push(r.toString());continue}for(var s in r)o.call(r,s)&&r[s]&&e.push(s)}}}return e.join(" ")}e.exports?(n.default=n,e.exports=n):void 0===(r=function(){return n}.apply(t,[]))||(e.exports=r)}()}},t={};function r(o){var n=t[o];if(void 0!==n)return n.exports;var c=t[o]={exports:{}};return e[o](c,c.exports,r),c.exports}r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,{a:t}),t},r.d=function(e,t){for(var o in t)r.o(t,o)&&!r.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},function(){"use strict";var e={};r.r(e),r.d(e,{metadata:function(){return c},name:function(){return m},settings:function(){return k}});var t=window.wp.element,o=(window.lodash,window.wp.blocks),n=(window.wp.richText,window.wp.i18n),c=JSON.parse('{"apiVersion":2,"name":"snow-monkey-blocks/directory-structure","title":"Directory structure","description":"Display a list of directories and files","category":"smb","supports":{"html":false},"example":{"innerBlocks":[{"name":"snow-monkey-blocks/directory-structure-item-directory","attributes":{"name":"Lorem ipsum dolor sit amet"},"innerBlocks":[{"name":"snow-monkey-blocks/directory-structure-item-file","attributes":{"name":"Lorem ipsum dolor sit amet"}},{"name":"snow-monkey-blocks/directory-structure-item-file","attributes":{"name":"Lorem ipsum dolor sit amet"}}]},{"name":"snow-monkey-blocks/directory-structure-item-directory","attributes":{"name":"Lorem ipsum dolor sit amet"},"innerBlocks":[{"name":"snow-monkey-blocks/directory-structure-item-file","attributes":{"name":"Lorem ipsum dolor sit amet"}},{"name":"snow-monkey-blocks/directory-structure-item-file","attributes":{"name":"Lorem ipsum dolor sit amet"}}]}]},"style":"snow-monkey-blocks/directory-structure","editorScript":"file:../../dist/block/directory-structure/editor.js"}'),i=(0,t.createElement)("svg",{viewBox:"0 0 24 24"},(0,t.createElement)("path",{d:"M23.28,2.57H18.76a.19.19,0,0,1-.18-.19V.73A.73.73,0,0,0,17.86,0H11.72A.73.73,0,0,0,11,.73v9.54a.73.73,0,0,0,.72.73H23.28a.73.73,0,0,0,.72-.73v-7A.72.72,0,0,0,23.28,2.57Zm-.28,7a.37.37,0,0,1-.37.38H12.37A.37.37,0,0,1,12,9.62V1.37A.37.37,0,0,1,12.37,1h4.76a.37.37,0,0,1,.37.37V3.25a.36.36,0,0,0,.37.37h4.76A.37.37,0,0,1,23,4Z"}),(0,t.createElement)("path",{d:"M23.28,15.57H18.76a.19.19,0,0,1-.18-.19V13.73a.73.73,0,0,0-.72-.73H11.72a.73.73,0,0,0-.72.73v9.54a.73.73,0,0,0,.72.73H23.28a.73.73,0,0,0,.72-.73v-7A.72.72,0,0,0,23.28,15.57ZM23,22.62a.37.37,0,0,1-.37.38H12.37a.37.37,0,0,1-.37-.38V14.37a.37.37,0,0,1,.37-.37h4.76a.37.37,0,0,1,.37.37v1.88a.36.36,0,0,0,.37.37h4.76A.37.37,0,0,1,23,17Z"}),(0,t.createElement)("path",{d:"M3,0H4A0,0,0,0,1,4,0V19a0,0,0,0,1,0,0H3.32A.32.32,0,0,1,3,18.68V0A0,0,0,0,1,3,0Z"}),(0,t.createElement)("rect",{x:"3",y:"5",width:"6",height:"1"}),(0,t.createElement)("rect",{x:"4",y:"18",width:"5",height:"1"})),s=r(184),l=r.n(s),a=window.wp.blockEditor,u=window.wp.data;const d=["snow-monkey-blocks/directory-structure-item-directory","snow-monkey-blocks/directory-structure-item-file"],{name:m}=c,k={icon:{foreground:"#cd162c",src:i},edit:function(e){let{className:r,clientId:n}=e;((e,r)=>{const{replaceBlock:n}=(0,u.useDispatch)("core/block-editor"),{getBlockOrder:c,getBlock:i}=(0,u.useSelect)((e=>({getBlockOrder:e("core/block-editor").getBlockOrder,getBlock:e("core/block-editor").getBlock})),[]),s=e=>`wp-block-${e.replace("/","-")}`;(0,t.useEffect)((()=>{c(e).forEach((e=>{const t=i(e);r.forEach((e=>{if("core/missing"===t.name||e.oldBlockName===t.name){const r=(0,o.parse)(t.originalContent.replace(e.oldBlockName,e.newBlockName).replace(s(e.oldBlockName),s(e.oldBlockName)+" "+s(e.newBlockName)))[0];n(t.clientId,r)}}))}))}),[])})(n,[{oldBlockName:"snow-monkey-blocks/directory-structure--item--directory",newBlockName:"snow-monkey-blocks/directory-structure-item-directory"},{oldBlockName:"snow-monkey-blocks/directory-structure--item--file",newBlockName:"snow-monkey-blocks/directory-structure-item-file"}]);const c=(0,u.useSelect)((e=>{var t,r;return!(null===(t=e("core/block-editor").getBlock(n))||void 0===t||null===(r=t.innerBlocks)||void 0===r||!r.length)}),[n]),i=l()("smb-directory-structure",r),s=(0,a.useBlockProps)({className:i}),m=(0,a.useInnerBlocksProps)(s,{allowedBlocks:d,templateLock:!1,renderAppender:c?a.InnerBlocks.DefaultBlockAppender:a.InnerBlocks.ButtonBlockAppender});return(0,t.createElement)("div",m)},save:function(e){let{className:r}=e;const o=l()("smb-directory-structure",r);return(0,t.createElement)("div",a.useInnerBlocksProps.save(a.useBlockProps.save({className:o})))}};(e=>{if(!e)return;const{metadata:t,settings:r,name:c}=e;t&&(t.title&&(t.title=(0,n.__)(t.title,"snow-monkey-blocks"),r.title=t.title),t.description&&(t.description=(0,n.__)(t.description,"snow-monkey-blocks"),r.description=t.description),t.keywords&&(t.keywords=(0,n.__)(t.keywords,"snow-monkey-blocks"),r.keywords=t.keywords)),(0,o.registerBlockType)({name:c,...t},r)})(e)}()}();