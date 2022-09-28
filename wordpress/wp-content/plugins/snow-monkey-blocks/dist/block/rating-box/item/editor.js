!function(){var e={184:function(e,t){var n;!function(){"use strict";var i={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var o=typeof n;if("string"===o||"number"===o)e.push(n);else if(Array.isArray(n)){if(n.length){var a=r.apply(null,n);a&&e.push(a)}}else if("object"===o){if(n.toString!==Object.prototype.toString&&!n.toString.toString().includes("[native code]")){e.push(n.toString());continue}for(var l in n)i.call(n,l)&&n[l]&&e.push(l)}}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(n=function(){return r}.apply(t,[]))||(e.exports=n)}()}},t={};function n(i){var r=t[i];if(void 0!==r)return r.exports;var o=t[i]={exports:{}};return e[i](o,o.exports,n),o.exports}n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,{a:t}),t},n.d=function(e,t){for(var i in t)n.o(t,i)&&!n.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},function(){"use strict";var e={};n.r(e),n.d(e,{metadata:function(){return a},name:function(){return b},settings:function(){return d}});var t=window.wp.element,i=(window.lodash,window.wp.blocks),r=(window.wp.richText,window.wp.i18n);const o=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;return e=Number(e),(isNaN(e)||e<t)&&(e=t),null!==n&&e>n&&(e=n),e};var a=JSON.parse('{"apiVersion":2,"name":"snow-monkey-blocks/rating-box-item","title":"Rating","description":"It is a child block of the rating box block.","category":"smb","parent":["snow-monkey-blocks/rating-box"],"attributes":{"title":{"type":"string","source":"html","selector":".smb-rating-box__item__title","default":""},"rating":{"type":"number","default":0},"color":{"type":"string"}},"supports":{"html":false},"editorScript":"file:../../../dist/block/rating-box/item/editor.js"}'),l=(0,t.createElement)("svg",{viewBox:"0 0 24 24"},(0,t.createElement)("rect",{x:"5",y:"6.75",width:"8",height:"1.5"}),(0,t.createElement)("rect",{x:"5",y:"9.75",width:"14",height:"1.5"}),(0,t.createElement)("rect",{x:"5",y:"12.75",width:"8",height:"1.5"}),(0,t.createElement)("rect",{x:"5",y:"15.75",width:"14",height:"1.5"})),s=n(184),c=n.n(s),m=window.wp.components,_=window.wp.blockEditor,u=[{attributes:{...a.attributes},save(e){let{attributes:n}=e;const{title:i,rating:r,color:o}=n;return(0,t.createElement)("div",{className:"smb-rating-box__item"},(0,t.createElement)("div",{className:"smb-rating-box__item__title"},(0,t.createElement)(_.RichText.Content,{value:i})),(0,t.createElement)("div",{className:"smb-rating-box__item__evaluation"},(0,t.createElement)("div",{className:"smb-rating-box__item__evaluation__bar"},(0,t.createElement)("div",{className:"smb-rating-box__item__evaluation__numeric"},r),(0,t.createElement)("div",{className:"smb-rating-box__item__evaluation__rating",style:{width:10*r+"%",backgroundColor:o}}))))}}];const{name:b}=a,d={icon:{foreground:"#cd162c",src:l},edit:function(e){let{attributes:n,setAttributes:i,className:a}=e;const{title:l,rating:s,color:u}=n,b=c()("smb-rating-box__item",a),d={width:10*s+"%",backgroundColor:u||void 0},g=(0,_.useBlockProps)({className:b});return(0,t.createElement)(t.Fragment,null,(0,t.createElement)(_.InspectorControls,null,(0,t.createElement)(_.__experimentalPanelColorGradientSettings,{title:(0,r.__)("Color","snow-monkey-blocks"),initialOpen:!1,settings:[{colorValue:u,onColorChange:e=>i({color:e}),label:(0,r.__)("Bar color","snow-monkey-blocks")}],__experimentalHasMultipleOrigins:!0,__experimentalIsRenderedInSidebar:!0}),(0,t.createElement)(m.PanelBody,{title:(0,r.__)("Block settings","snow-monkey-blocks")},(0,t.createElement)(m.RangeControl,{label:(0,r.__)("Rating","snow-monkey-blocks"),value:s,onChange:e=>i({rating:o(e,0,10)}),min:"1",max:"10"}))),(0,t.createElement)("div",g,(0,t.createElement)(_.RichText,{className:"smb-rating-box__item__title",placeholder:(0,r.__)("Write title…","snow-monkey-blocks"),value:l,multiline:!1,onChange:e=>i({title:e})}),(0,t.createElement)("div",{className:"smb-rating-box__item__evaluation"},(0,t.createElement)("div",{className:"smb-rating-box__item__evaluation__bar"},(0,t.createElement)("div",{className:"smb-rating-box__item__evaluation__numeric"},s),(0,t.createElement)("div",{className:"smb-rating-box__item__evaluation__rating",style:d})))))},save:function(e){let{attributes:n,className:i}=e;const{title:r,rating:o,color:a}=n,l=c()("smb-rating-box__item",i),s={width:10*o+"%",backgroundColor:a||void 0};return(0,t.createElement)("div",_.useBlockProps.save({className:l}),(0,t.createElement)("div",{className:"smb-rating-box__item__title"},(0,t.createElement)(_.RichText.Content,{value:r})),(0,t.createElement)("div",{className:"smb-rating-box__item__evaluation"},(0,t.createElement)("div",{className:"smb-rating-box__item__evaluation__bar"},(0,t.createElement)("div",{className:"smb-rating-box__item__evaluation__numeric"},o),(0,t.createElement)("div",{className:"smb-rating-box__item__evaluation__rating",style:s}))))},deprecated:u};(e=>{if(!e)return;const{metadata:t,settings:n,name:o}=e;t&&(t.title&&(t.title=(0,r.__)(t.title,"snow-monkey-blocks"),n.title=t.title),t.description&&(t.description=(0,r.__)(t.description,"snow-monkey-blocks"),n.description=t.description),t.keywords&&(t.keywords=(0,r.__)(t.keywords,"snow-monkey-blocks"),n.keywords=t.keywords)),(0,i.registerBlockType)({name:o,...t},n)})(e)}()}();