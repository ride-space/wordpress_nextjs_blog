!function(){var e={184:function(e,t){var a;!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var s=typeof a;if("string"===s||"number"===s)e.push(a);else if(Array.isArray(a)){if(a.length){var r=o.apply(null,a);r&&e.push(r)}}else if("object"===s){if(a.toString!==Object.prototype.toString&&!a.toString.toString().includes("[native code]")){e.push(a.toString());continue}for(var l in a)n.call(a,l)&&a[l]&&e.push(l)}}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(a=function(){return o}.apply(t,[]))||(e.exports=a)}()}},t={};function a(n){var o=t[n];if(void 0!==o)return o.exports;var s=t[n]={exports:{}};return e[n](s,s.exports,a),s.exports}a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,{a:t}),t},a.d=function(e,t){for(var n in t)a.o(t,n)&&!a.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},function(){"use strict";var e={};a.r(e),a.d(e,{metadata:function(){return l},name:function(){return w},settings:function(){return f}});var t=window.wp.element,n=window.lodash,o=window.wp.blocks,s=(window.wp.richText,window.wp.i18n);const r=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;return e=Number(e),(isNaN(e)||e<t)&&(e=t),null!==a&&e>a&&(e=a),e};var l=JSON.parse('{"apiVersion":2,"name":"snow-monkey-blocks/testimonial","title":"Testimonials","description":"Let\'s arrange the voice of the customer.","category":"smb","attributes":{"md":{"type":"number","default":2},"lg":{"type":"number","default":2}},"supports":{"html":false},"example":{"innerBlocks":[{"name":"snow-monkey-blocks/testimonial-item","attributes":{"avatarID":1,"name":"Lorem","lede":"ipsum","content":"dolor sit amet"}},{"name":"snow-monkey-blocks/testimonial-item","attributes":{"avatarID":1,"name":"consectetur","lede":"adipiscing","content":"sed do eiusmod tempor"}}]},"style":"snow-monkey-blocks/testimonial","editorStyle":"snow-monkey-blocks/testimonial/editor","editorScript":"file:../../dist/block/testimonial/editor.js"}'),i=(0,t.createElement)("svg",{viewBox:"0 0 24 24"},(0,t.createElement)("path",{d:"M22,1.5H6a1,1,0,0,0-1,1v8a1,1,0,0,0,1,1H9l1.12,3,3.29-3H22a1,1,0,0,0,1-1v-8A1,1,0,0,0,22,1.5ZM22,10a.5.5,0,0,1-.5.5H13.31l-1.1,1h0l-1.12,1-.5.46-.11-.31L10,11.42h0l-.35-.92H6.5A.5.5,0,0,1,6,10V3a.5.5,0,0,1,.5-.5h15A.5.5,0,0,1,22,3Z"}),(0,t.createElement)("path",{d:"M10,7.45a1,1,0,1,1,1-1A1,1,0,0,1,10,7.45Z"}),(0,t.createElement)("path",{d:"M14,7.45a1,1,0,1,1,1-1A1,1,0,0,1,14,7.45Z"}),(0,t.createElement)("path",{d:"M18,7.45a1,1,0,1,1,1-1A1,1,0,0,1,18,7.45Z"}),(0,t.createElement)("path",{d:"M3.41,18.69a3.36,3.36,0,0,1,.83-.64,2.51,2.51,0,1,1,2.51,0,3.6,3.6,0,0,1,.84.64,3.5,3.5,0,1,0-4.18,0Z"}),(0,t.createElement)("path",{d:"M9,22.5h1a6.88,6.88,0,0,0-2.32-5.39,2.47,2.47,0,0,1-.93.94A5,5,0,0,1,9,22.5Z"}),(0,t.createElement)("path",{d:"M2,22.5a5,5,0,0,1,2.25-4.45,2.47,2.47,0,0,1-.93-.94A6.88,6.88,0,0,0,1,22.5Z"}));function m(){return m=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},m.apply(this,arguments)}var c=a(184),d=a.n(c),u=window.wp.blockEditor,_=window.wp.components,b=window.wp.data;function p(e){const{desktop:a,tablet:n,mobile:o}=e,s=[];return a&&s.push({name:"desktop",title:(0,t.createElement)(_.Dashicon,{icon:"desktop"})}),n&&s.push({name:"tablet",title:(0,t.createElement)(_.Dashicon,{icon:"tablet"})}),o&&s.push({name:"mobile",title:(0,t.createElement)(_.Dashicon,{icon:"smartphone"})}),(0,t.createElement)(_.TabPanel,{className:"smb-inspector-tabs",tabs:s},(e=>{if(e.name){if("desktop"===e.name)return a();if("tablet"===e.name)return n();if("mobile"===e.name)return o()}}))}const v=["snow-monkey-blocks/testimonial-item"],g=[["snow-monkey-blocks/testimonial-item"]];var k=[{attributes:{...l.attributes},save(e){let{className:a}=e;const n=d()("smb-testimonial",a);return(0,t.createElement)("div",{className:n},(0,t.createElement)("div",{className:"smb-testimonial__body"},(0,t.createElement)("div",{className:"c-row c-row--margin","data-columns":"1","data-md-columns":"2"},(0,t.createElement)(u.InnerBlocks.Content,null))))}},{save(){return(0,t.createElement)("div",{className:"smb-testimonial"},(0,t.createElement)("div",{className:"smb-testimonial__body"},(0,t.createElement)("div",{className:"c-row c-row--margin","data-columns":"1","data-md-columns":"2"},(0,t.createElement)(u.InnerBlocks.Content,null))))}},{attributes:{items:{type:"array",default:[],selector:".smb-testimonial__item",source:"query",query:{avatarID:{type:"number",source:"attribute",selector:".smb-testimonial__item__figure > img",attribute:"data-image-id",default:0},avatarURL:{type:"string",source:"attribute",selector:".smb-testimonial__item__figure > img",attribute:"src",default:"https://0.gravatar.com/avatar/00000000000000000000000000000000?s=128&d=mp&r=g"},name:{source:"html",selector:".smb-testimonial__item__name"},lede:{source:"html",selector:".smb-testimonial__item__lede"},content:{source:"html",selector:".smb-testimonial__item__content"}}},columns:{type:"number",default:1}},migrate(e){return[{},(()=>{const t=void 0===e.items?0:e.items.length;return(0,n.times)(t,(t=>{const a=(0,n.get)(e.items,[t,"avatarID"],0),s=(0,n.get)(e.items,[t,"avatarURL"],"https://0.gravatar.com/avatar/00000000000000000000000000000000?s=128&d=mp&r=g"),r=(0,n.get)(e.items,[t,"name"],""),l=(0,n.get)(e.items,[t,"lede"],""),i=(0,n.get)(e.items,[t,"content"],"");return(0,o.createBlock)("snow-monkey-blocks/testimonial-item",{avatarID:Number(a),avatarURL:s,name:r,lede:l,content:i})}))})()]},save(e){let{attributes:a}=e;const{items:o}=a,s=void 0===a.items?0:a.items.length;return(0,t.createElement)("div",{className:"smb-testimonial"},(0,t.createElement)("div",{className:"smb-testimonial__body"},(0,t.createElement)("div",{className:"c-row c-row--margin"},(0,n.times)(s,(e=>{const a=(0,n.get)(o,[e,"avatarID"],0),s=(0,n.get)(o,[e,"avatarURL"],"https://0.gravatar.com/avatar/00000000000000000000000000000000?s=128&d=mp&r=g"),r=(0,n.get)(o,[e,"name"],""),l=(0,n.get)(o,[e,"lede"],""),i=(0,n.get)(o,[e,"content"],"");return(0,t.createElement)("div",{className:"c-row__col c-row__col--1-1 c-row__col--md-1-2"},(0,t.createElement)("div",{className:"smb-testimonial__item"},(0,t.createElement)("div",{className:"smb-testimonial__item__figure"},(0,t.createElement)("img",{src:s,alt:"",className:`wp-image-${a}`,"data-image-id":a})),(0,t.createElement)("div",{className:"smb-testimonial__item__body"},(0,t.createElement)("div",{className:"smb-testimonial__item__content"},(0,t.createElement)(u.RichText.Content,{value:i})),(0,t.createElement)("div",{className:"smb-testimonial__item__name"},(0,t.createElement)(u.RichText.Content,{value:r})),!u.RichText.isEmpty(l)&&(0,t.createElement)("div",{className:"smb-testimonial__item__lede"},(0,t.createElement)(u.RichText.Content,{value:l})))))})))))}},{attributes:{items:{type:"array",default:[],selector:".smb-testimonial__item",source:"query",query:{avatarID:{type:"number",source:"attribute",selector:".smb-testimonial__item__figure > img",attribute:"data-image-id",default:0},avatarURL:{type:"string",source:"attribute",selector:".smb-testimonial__item__figure > img",attribute:"src",default:"https://0.gravatar.com/avatar/00000000000000000000000000000000?s=128&d=mp&r=g"},name:{source:"html",selector:".smb-testimonial__item__name"},lede:{source:"html",selector:".smb-testimonial__item__lede"},content:{source:"html",selector:".smb-testimonial__item__content"}}},columns:{type:"number",default:1}},save(e){let{attributes:a}=e;const{items:o,columns:s}=a;return(0,t.createElement)("div",{className:"smb-testimonial"},(0,t.createElement)("div",{className:"smb-testimonial__body"},(0,t.createElement)("div",{className:"c-row c-row--margin"},(0,n.times)(s,(e=>{const a=(0,n.get)(o,[e,"avatarID"],0),s=(0,n.get)(o,[e,"avatarURL"],"https://0.gravatar.com/avatar/00000000000000000000000000000000?s=128&d=mp&r=g"),r=(0,n.get)(o,[e,"name"],""),l=(0,n.get)(o,[e,"lede"],""),i=(0,n.get)(o,[e,"content"],"");return(0,t.createElement)("div",{className:"c-row__col c-row__col--1-1 c-row__col--md-1-2"},(0,t.createElement)("div",{className:"smb-testimonial__item"},(0,t.createElement)("div",{className:"smb-testimonial__item__figure"},(0,t.createElement)("img",{src:s,alt:"","data-image-id":a})),(0,t.createElement)("div",{className:"smb-testimonial__item__body"},(0,t.createElement)("div",{className:"smb-testimonial__item__content"},(0,t.createElement)(u.RichText.Content,{value:i})),(0,t.createElement)("div",{className:"smb-testimonial__item__name"},(0,t.createElement)(u.RichText.Content,{value:r})),!u.RichText.isEmpty(l)&&(0,t.createElement)("div",{className:"smb-testimonial__item__lede"},(0,t.createElement)(u.RichText.Content,{value:l})))))})))))}}];const{name:w}=l,f={icon:{foreground:"#cd162c",src:i},edit:function(e){let{attributes:a,setAttributes:n,className:l,clientId:i}=e;((e,a)=>{const{replaceBlock:n}=(0,b.useDispatch)("core/block-editor"),{getBlockOrder:s,getBlock:r}=(0,b.useSelect)((e=>({getBlockOrder:e("core/block-editor").getBlockOrder,getBlock:e("core/block-editor").getBlock})),[]),l=e=>`wp-block-${e.replace("/","-")}`;(0,t.useEffect)((()=>{s(e).forEach((e=>{const t=r(e);a.forEach((e=>{if("core/missing"===t.name||e.oldBlockName===t.name){const a=(0,o.parse)(t.originalContent.replace(e.oldBlockName,e.newBlockName).replace(l(e.oldBlockName),l(e.oldBlockName)+" "+l(e.newBlockName)))[0];n(t.clientId,a)}}))}))}),[])})(i,[{oldBlockName:"snow-monkey-blocks/testimonial--item",newBlockName:"snow-monkey-blocks/testimonial-item"}]);const{md:c,lg:k}=a,w=(0,b.useSelect)((e=>{var t,a;return!(null===(t=e("core/block-editor").getBlock(i))||void 0===t||null===(a=t.innerBlocks)||void 0===a||!a.length)}),[i]),f=d()("smb-testimonial",l),y=d()("c-row","c-row--margin"),E=(0,u.useBlockProps)({className:f}),h=(0,u.useInnerBlocksProps)({className:y},{allowedBlocks:v,template:g,templateLock:!1,renderAppender:w?u.InnerBlocks.DefaultBlockAppender:u.InnerBlocks.ButtonBlockAppender,orientation:"horizontal"}),N=e=>n({lg:r(e,1,4)}),B=e=>n({md:r(e,1,2)});return(0,t.createElement)(t.Fragment,null,(0,t.createElement)(u.InspectorControls,null,(0,t.createElement)(_.PanelBody,{title:(0,s.__)("Block settings","snow-monkey-blocks")},(0,t.createElement)(p,{desktop:()=>(0,t.createElement)(_.RangeControl,{label:(0,s.__)("Columns per row (Large window)","snow-monkey-blocks"),value:k,onChange:N,min:"1",max:"4"}),tablet:()=>(0,t.createElement)(_.RangeControl,{label:(0,s.__)("Columns per row (Medium window)","snow-monkey-blocks"),value:c,onChange:B,min:"1",max:"2"})}))),(0,t.createElement)("div",E,(0,t.createElement)("div",{className:"smb-testimonial__body"},(0,t.createElement)("div",m({},h,{"data-columns":"1","data-md-columns":c,"data-lg-columns":k})))))},save:function(e){let{attributes:a,className:n}=e;const{md:o,lg:s}=a,r=d()("smb-testimonial",n),l=d()("c-row","c-row--margin");return(0,t.createElement)("div",u.useBlockProps.save({className:r}),(0,t.createElement)("div",{className:"smb-testimonial__body"},(0,t.createElement)("div",m({},u.useInnerBlocksProps.save({className:l}),{"data-columns":"1","data-md-columns":o,"data-lg-columns":s}))))},deprecated:k};(e=>{if(!e)return;const{metadata:t,settings:a,name:n}=e;t&&(t.title&&(t.title=(0,s.__)(t.title,"snow-monkey-blocks"),a.title=t.title),t.description&&(t.description=(0,s.__)(t.description,"snow-monkey-blocks"),a.description=t.description),t.keywords&&(t.keywords=(0,s.__)(t.keywords,"snow-monkey-blocks"),a.keywords=t.keywords)),(0,o.registerBlockType)({name:n,...t},a)})(e)}()}();