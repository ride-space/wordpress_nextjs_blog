!function(){var e={184:function(e,t){var o;!function(){"use strict";var n={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var o=arguments[t];if(o){var a=typeof o;if("string"===a||"number"===a)e.push(o);else if(Array.isArray(o)){if(o.length){var s=r.apply(null,o);s&&e.push(s)}}else if("object"===a){if(o.toString!==Object.prototype.toString&&!o.toString.toString().includes("[native code]")){e.push(o.toString());continue}for(var i in o)n.call(o,i)&&o[i]&&e.push(i)}}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(o=function(){return r}.apply(t,[]))||(e.exports=o)}()}},t={};function o(n){var r=t[n];if(void 0!==r)return r.exports;var a=t[n]={exports:{}};return e[n](a,a.exports,o),a.exports}o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,{a:t}),t},o.d=function(e,t){for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},function(){"use strict";var e={};o.r(e),o.d(e,{metadata:function(){return s},name:function(){return b},settings:function(){return _}});var t=window.wp.element,n=window.lodash,r=window.wp.blocks,a=(window.wp.richText,window.wp.i18n),s=JSON.parse('{"apiVersion":2,"name":"snow-monkey-blocks/faq","title":"FAQs","description":"You can list the FAQs.","category":"smb","supports":{"html":false},"example":{"innerBlocks":[{"name":"snow-monkey-blocks/faq-item","attributes":{"question":"Lorem ipsum dolor sit amet"},"innerBlocks":[{"name":"core/paragraph","attributes":{"content":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillu"}}]},{"name":"snow-monkey-blocks/faq-item","attributes":{"question":"consectetur adipiscing elit"},"innerBlocks":[{"name":"core/paragraph","attributes":{"content":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillu"}}]}]},"style":"snow-monkey-blocks/faq","editorScript":"file:../../dist/block/faq/editor.js"}'),i=(0,t.createElement)("svg",{viewBox:"0 0 24 24"},(0,t.createElement)("path",{d:"M12,3a9,9,0,1,0,9,9A9,9,0,0,0,12,3Zm0,17a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z"}),(0,t.createElement)("path",{d:"M11.72,14.22a.36.36,0,0,1-.35-.36v.19a3.27,3.27,0,0,1,.2-1.2,2.62,2.62,0,0,1,.46-.77,8.76,8.76,0,0,1,.85-.82,4.33,4.33,0,0,0,.8-.86,1.43,1.43,0,0,0,.18-.7,1.64,1.64,0,0,0-.54-1.21A1.79,1.79,0,0,0,12,8a1.77,1.77,0,0,0-1.26.47,2.17,2.17,0,0,0-.6,1.17.36.36,0,0,1-.39.27l-.52-.07a.35.35,0,0,1-.3-.42,2.94,2.94,0,0,1,.91-1.68A3.14,3.14,0,0,1,12,7a3.21,3.21,0,0,1,2.24.77,2.46,2.46,0,0,1,.55,3,5.6,5.6,0,0,1-1.16,1.29,6.32,6.32,0,0,0-.75.75,1.52,1.52,0,0,0-.26.56,1.87,1.87,0,0,0-.09.5.35.35,0,0,1-.35.34Z"}),(0,t.createElement)("circle",{cx:"11.98",cy:"16.08",r:"0.92"})),l=o(184),c=o.n(l),m=window.wp.blockEditor,u=window.wp.data;const d=["snow-monkey-blocks/faq-item"],p=[["snow-monkey-blocks/faq-item"]];var f=[{save(){return(0,t.createElement)("div",{className:"smb-faq"},(0,t.createElement)("div",{className:"smb-faq__body"},(0,t.createElement)(m.InnerBlocks.Content,null)))}},{attributes:{content:{type:"array",source:"query",selector:".smb-faq__item",default:[],query:{question:{type:"string",source:"html",selector:".smb-faq__item__question__body",default:""},answer:{type:"string",source:"html",selector:".smb-faq__item__answer__body",multiline:"p",default:""},questionColor:{type:"string",source:"attribute",selector:".smb-faq__item__question__label",attribute:"data-color"},answerColor:{type:"string",source:"attribute",selector:".smb-faq__item__answer__label",attribute:"data-color"}}},rows:{type:"number",default:1}},migrate(e){return[{},(()=>{const t=void 0===e.content?0:e.content.length;return(0,n.times)(t,(t=>{const o=(0,n.get)(e.content,[t,"question"],""),a=(0,n.get)(e.content,[t,"answer"],""),s=(0,n.get)(e.content,[t,"questionColor"],""),i=(0,n.get)(e.content,[t,"answerColor"],"");return(0,r.createBlock)("snow-monkey-blocks/faq-item",{question:o,answer:a,questionColor:s,answerColor:i})}))})()]},save(e){let{attributes:o}=e;const{content:r}=o,a=void 0===o.content?0:o.content.length;return(0,t.createElement)("div",{className:"smb-faq"},(0,t.createElement)("div",{className:"smb-faq__body"},(0,n.times)(a,(e=>{const o=(0,n.get)(r,[e,"question"],""),a=(0,n.get)(r,[e,"answer"],""),s=(0,n.get)(r,[e,"questionColor"],""),i=(0,n.get)(r,[e,"answerColor"],"");return(0,t.createElement)("div",{className:"smb-faq__item"},(0,t.createElement)("div",{className:"smb-faq__item__question"},(0,t.createElement)("div",{className:"smb-faq__item__question__label",style:{color:s},"data-color":s},"Q"),(0,t.createElement)("div",{className:"smb-faq__item__question__body"},(0,t.createElement)(m.RichText.Content,{value:o}))),(0,t.createElement)("div",{className:"smb-faq__item__answer"},(0,t.createElement)("div",{className:"smb-faq__item__answer__label",style:{color:i},"data-color":i},"A"),(0,t.createElement)("div",{className:"smb-faq__item__answer__body"},(0,t.createElement)(m.RichText.Content,{value:a}))))}))))}}];const{name:b}=s,_={icon:{foreground:"#cd162c",src:i},edit:function(e){let{className:o,clientId:n}=e;((e,o)=>{const{replaceBlock:n}=(0,u.useDispatch)("core/block-editor"),{getBlockOrder:a,getBlock:s}=(0,u.useSelect)((e=>({getBlockOrder:e("core/block-editor").getBlockOrder,getBlock:e("core/block-editor").getBlock})),[]),i=e=>`wp-block-${e.replace("/","-")}`;(0,t.useEffect)((()=>{a(e).forEach((e=>{const t=s(e);o.forEach((e=>{if("core/missing"===t.name||e.oldBlockName===t.name){const o=(0,r.parse)(t.originalContent.replace(e.oldBlockName,e.newBlockName).replace(i(e.oldBlockName),i(e.oldBlockName)+" "+i(e.newBlockName)))[0];n(t.clientId,o)}}))}))}),[])})(n,[{oldBlockName:"snow-monkey-blocks/faq--item",newBlockName:"snow-monkey-blocks/faq-item"}]);const a=(0,u.useSelect)((e=>{var t,o;return!(null===(t=e("core/block-editor").getBlock(n))||void 0===t||null===(o=t.innerBlocks)||void 0===o||!o.length)}),[n]),s=c()("smb-faq",o),i=(0,m.useBlockProps)({className:s}),l=(0,m.useInnerBlocksProps)({className:"smb-faq__body"},{allowedBlocks:d,template:p,templateLock:!1,renderAppender:a?m.InnerBlocks.DefaultBlockAppender:m.InnerBlocks.ButtonBlockAppender});return(0,t.createElement)("div",i,(0,t.createElement)("div",l))},save:function(e){let{className:o}=e;const n=c()("smb-faq",o);return(0,t.createElement)("div",m.useBlockProps.save({className:n}),(0,t.createElement)("div",m.useInnerBlocksProps.save({className:"smb-faq__body"})))},deprecated:f};(e=>{if(!e)return;const{metadata:t,settings:o,name:n}=e;t&&(t.title&&(t.title=(0,a.__)(t.title,"snow-monkey-blocks"),o.title=t.title),t.description&&(t.description=(0,a.__)(t.description,"snow-monkey-blocks"),o.description=t.description),t.keywords&&(t.keywords=(0,a.__)(t.keywords,"snow-monkey-blocks"),o.keywords=t.keywords)),(0,r.registerBlockType)({name:n,...t},o)})(e)}()}();