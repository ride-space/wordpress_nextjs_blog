!function(){var e={184:function(e,t){var l;!function(){"use strict";var a={}.hasOwnProperty;function s(){for(var e=[],t=0;t<arguments.length;t++){var l=arguments[t];if(l){var i=typeof l;if("string"===i||"number"===i)e.push(l);else if(Array.isArray(l)){if(l.length){var n=s.apply(null,l);n&&e.push(n)}}else if("object"===i){if(l.toString!==Object.prototype.toString&&!l.toString.toString().includes("[native code]")){e.push(l.toString());continue}for(var r in l)a.call(l,r)&&l[r]&&e.push(r)}}}return e.join(" ")}e.exports?(s.default=s,e.exports=s):void 0===(l=function(){return s}.apply(t,[]))||(e.exports=l)}()}},t={};function l(a){var s=t[a];if(void 0!==s)return s.exports;var i=t[a]={exports:{}};return e[a](i,i.exports,l),i.exports}l.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(t,{a:t}),t},l.d=function(e,t){for(var a in t)l.o(t,a)&&!l.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},function(){"use strict";var e={};l.r(e),l.d(e,{metadata:function(){return r},name:function(){return x},settings:function(){return L}});var t=window.wp.element,a=window.lodash,s=window.wp.blocks,i=(window.wp.richText,window.wp.i18n);const n=(e,t)=>t?(0,a.reduce)(e,((e,l)=>{const s=(0,a.get)(t,["sizes",l.slug,"url"]),i=(0,a.get)(t,["media_details","sizes",l.slug,"source_url"]),n=(0,a.get)(t,["sizes",l.slug,"width"]),r=(0,a.get)(t,["media_details","sizes",l.slug,"width"]),o=(0,a.get)(t,["sizes",l.slug,"height"]),m=(0,a.get)(t,["media_details","sizes",l.slug,"height"]);return{...e,[l.slug]:{url:s||i,width:n||r,height:o||m}}}),{}):{};var r=JSON.parse('{"apiVersion":2,"name":"snow-monkey-blocks/step--item","title":"Step (Standard)","description":"It is a child block of the step block.","category":"smb","parent":["snow-monkey-blocks/step"],"attributes":{"title":{"type":"string","source":"html","selector":".smb-step__item__title > span","default":""},"numberColor":{"type":"string"},"imagePosition":{"type":"string","default":"center"},"imageID":{"type":"number","default":0},"imageURL":{"type":"string","source":"attribute","selector":".smb-step__item__figure > img","attribute":"src","default":""},"imageAlt":{"type":"string","source":"attribute","selector":".smb-step__item__figure > img","attribute":"alt","default":""},"imageWidth":{"type":"string","source":"attribute","selector":".smb-step__item__figure > img","attribute":"width","default":""},"imageHeight":{"type":"string","source":"attribute","selector":".smb-step__item__figure > img","attribute":"height","default":""},"imageSizeSlug":{"type":"string","default":"large"},"linkLabel":{"type":"string","source":"html","selector":".smb-step__item__link__label","default":""},"linkURL":{"type":"string","source":"attribute","selector":".smb-step__item__link","attribute":"href","default":""},"linkTarget":{"type":"string","source":"attribute","selector":".smb-step__item__link","attribute":"target","default":"_self"},"linkColor":{"type":"string"}},"supports":{"anchor":true,"inserter":false},"editorScript":"file:../../../../dist/block/step/item/standard/editor.js"}'),o=(0,t.createElement)("svg",{viewBox:"0 0 24 24"},(0,t.createElement)("rect",{x:"7.68",y:"6.14",width:"13",height:"1"}),(0,t.createElement)("rect",{x:"7.68",y:"11.14",width:"13",height:"1"}),(0,t.createElement)("rect",{x:"7.68",y:"16.14",width:"13",height:"1"}),(0,t.createElement)("path",{d:"M5.29,8.44H4.6V5.86a2.55,2.55,0,0,1-.89.52V5.75a1.87,1.87,0,0,0,.59-.33,1.24,1.24,0,0,0,.43-.57h.56Z"}),(0,t.createElement)("path",{d:"M5.85,12.8v.64H3.44a1.68,1.68,0,0,1,.24-.68,4.3,4.3,0,0,1,.77-.86A4.38,4.38,0,0,0,5,11.31a.78.78,0,0,0,.14-.42A.48.48,0,0,0,5,10.54a.49.49,0,0,0-.34-.12.46.46,0,0,0-.35.13.66.66,0,0,0-.14.43l-.69-.07a1.13,1.13,0,0,1,.39-.82,1.29,1.29,0,0,1,.8-.24,1.14,1.14,0,0,1,.83.28.92.92,0,0,1,.31.71,1.14,1.14,0,0,1-.09.46,2,2,0,0,1-.27.46,5.87,5.87,0,0,1-.45.46c-.22.2-.36.33-.41.39a1,1,0,0,0-.14.19Z"}),(0,t.createElement)("path",{d:"M3.51,17.46l.66-.08a.64.64,0,0,0,.17.39.5.5,0,0,0,.7,0,.65.65,0,0,0,.14-.43A.6.6,0,0,0,5,16.9a.43.43,0,0,0-.34-.15,1,1,0,0,0-.31.05l.07-.56a.67.67,0,0,0,.43-.12A.42.42,0,0,0,5,15.78a.39.39,0,0,0-.1-.29.4.4,0,0,0-.29-.11.41.41,0,0,0-.3.12.6.6,0,0,0-.15.36l-.63-.11a1.38,1.38,0,0,1,.2-.52.85.85,0,0,1,.37-.3,1.14,1.14,0,0,1,.53-.11,1,1,0,0,1,.81.32.83.83,0,0,1,.25.6.85.85,0,0,1-.51.75.82.82,0,0,1,.49.29.89.89,0,0,1,.18.56,1.07,1.07,0,0,1-.34.8,1.2,1.2,0,0,1-.86.33,1.15,1.15,0,0,1-.8-.28A1,1,0,0,1,3.51,17.46Z"})),m=l(184),c=l.n(m),_=window.wp.blockEditor,u=window.wp.components,g=window.wp.data,p=window.wp.primitives,d=(0,t.createElement)(p.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,t.createElement)(p.Path,{d:"M15.6 7.2H14v1.5h1.6c2 0 3.7 1.7 3.7 3.7s-1.7 3.7-3.7 3.7H14v1.5h1.6c2.8 0 5.2-2.3 5.2-5.2 0-2.9-2.3-5.2-5.2-5.2zM4.7 12.4c0-2 1.7-3.7 3.7-3.7H10V7.2H8.4c-2.9 0-5.2 2.3-5.2 5.2 0 2.9 2.3 5.2 5.2 5.2H10v-1.5H8.4c-2 0-3.7-1.7-3.7-3.7zm4.6.9h5.3v-1.5H9.3v1.5z"})),b=(0,t.createElement)(p.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,t.createElement)(p.Path,{d:"M15.6 7.3h-.7l1.6-3.5-.9-.4-3.9 8.5H9v1.5h2l-1.3 2.8H8.4c-2 0-3.7-1.7-3.7-3.7s1.7-3.7 3.7-3.7H10V7.3H8.4c-2.9 0-5.2 2.3-5.2 5.2 0 2.9 2.3 5.2 5.2 5.2H9l-1.4 3.2.9.4 5.7-12.5h1.4c2 0 3.7 1.7 3.7 3.7s-1.7 3.7-3.7 3.7H14v1.5h1.6c2.9 0 5.2-2.3 5.2-5.2 0-2.9-2.4-5.2-5.2-5.2z"}));function k(){return k=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a])}return e},k.apply(this,arguments)}const h=e=>{let{id:l,src:a,allowedTypes:s,accept:n,onSelect:r,onSelectURL:o,onRemove:m}=e;return(0,t.createElement)(_.BlockControls,{group:"inline"},(0,t.createElement)(_.MediaReplaceFlow,{mediaId:l,mediaURL:a,allowedTypes:s,accept:n,onSelect:r,onSelectURL:o}),!!a&&!!m&&(0,t.createElement)(u.ToolbarItem,{as:u.Button,onClick:m},(0,i.__)("Release","snow-monkey-blocks")))},v=e=>{let{src:l,alt:a,id:s,style:i}=e;return(0,t.createElement)("img",{src:l,alt:a,className:`wp-image-${s}`,style:i})},f=e=>{let{src:l,style:a}=e;return(0,t.createElement)("video",{controls:!0,src:l,style:a})},y=(0,t.memo)((e=>{let l,{id:s,src:i,alt:n,url:r,target:o,allowedTypes:m,accept:c,onSelect:_,onSelectURL:u,onRemove:g,mediaType:p,style:d,rel:b,linkClass:k}=e;if("image"===p){let e;l=(0,t.createElement)(v,{src:i,alt:n,id:s,style:d}),e=b?(0,a.isEmpty)(b)?void 0:b:"_self"!==o&&o?"noopener noreferrer":void 0,r&&(l=(0,t.createElement)("span",{href:r,target:"_self"===o?void 0:o,rel:e,className:k},l))}else"video"===p&&(l=(0,t.createElement)(f,{src:i,style:d}));return(0,t.createElement)(t.Fragment,null,(0,t.createElement)(h,{id:s,src:i,allowedTypes:m,accept:c,onSelect:_,onSelectURL:u,onRemove:g}),l)}),((e,t)=>{const l=Object.keys(e);for(const a of l)if(e[a]!==t[a])return!1;return!0}));function E(e){const{src:l,onSelect:a,onSelectURL:s,mediaType:n,allowedTypes:r=["image"]}=e,o=!n&&l?"image":n;let m=(0,i.__)("Media","snow-monkey-blocks");1===r.length&&("image"===r[0]?m=(0,i.__)("Image","snow-monkey-blocks"):"video"===r[0]&&(m=(0,i.__)("Video","snow-monkey-blocks")));const c=(0,t.useMemo)((()=>r.map((e=>`${e}/*`)).join(",")),[r]);return l?(0,t.createElement)(y,k({},e,{accept:c,allowedTypes:r,mediaType:o})):(0,t.createElement)(_.MediaPlaceholder,{icon:"format-image",labels:{title:m},onSelect:a,onSelectURL:s,accept:c,allowedTypes:r})}const w=e=>"_self"!==e&&("_blank"===e||void 0);function N(e){const{url:l,target:a,onChange:s}=e;return(0,t.createElement)(_.__experimentalLinkControl,{className:"wp-block-navigation-link__inline-link-input",value:{url:l,opensInNewTab:w(a)},onChange:s})}function C(e){const{label:l,id:a,slug:s,onChange:i}=e;if(!a)return null;const{options:r}=(0,g.useSelect)((e=>{const{getMedia:t}=e("core"),l=t(a);if(!l)return{options:[]};const{getSettings:s}=e("core/block-editor"),{imageSizes:i}=s(),r=n(i,l);return{options:i.map((e=>!!r[e.slug]&&{value:e.slug,label:e.name})).filter((e=>e))}}));return 1>r.length?null:(0,t.createElement)(u.SelectControl,{label:l,value:s,options:r,onChange:i})}const R=r.attributes;var S=[{attributes:{...R},save(e){let{attributes:l,className:a}=e;const{title:s,numberColor:i,imagePosition:n,imageID:r,imageURL:o,imageAlt:m,imageWidth:u,imageHeight:g,linkLabel:p,linkURL:d,linkTarget:b,linkColor:k}=l,h=c()("smb-step__item",`smb-step__item--image-${n}`,a),v={backgroundColor:i||void 0},f={color:k||void 0};return(0,t.createElement)("div",_.useBlockProps.save({className:h}),(0,t.createElement)("div",{className:"smb-step__item__title"},(0,t.createElement)("div",{className:"smb-step__item__number",style:v}),(0,t.createElement)(_.RichText.Content,{tagName:"span",value:s})),(0,t.createElement)("div",{className:"smb-step__item__body"},!!o&&(0,t.createElement)("div",{className:"smb-step__item__figure"},(0,t.createElement)("img",{src:o,alt:m,width:!!u&&u,height:!!g&&g,className:`wp-image-${r}`})),(0,t.createElement)("div",_.useInnerBlocksProps.save({className:"smb-step__item__summary"})),!_.RichText.isEmpty(p)&&(0,t.createElement)("a",{className:"smb-step__item__link",href:d,style:f,target:"_self"===b?void 0:b,rel:"_self"===b?void 0:"noopener noreferrer"},(0,t.createElement)("i",{className:"fas fa-arrow-circle-right"}),(0,t.createElement)(_.RichText.Content,{tagName:"span",className:"smb-step__item__link__label",value:p}))))}},{attributes:{...R},save(e){let{attributes:l}=e;const{title:a,numberColor:s,imagePosition:i,imageID:n,imageURL:r,linkLabel:o,linkURL:m,linkTarget:c,linkColor:u}=l;return(0,t.createElement)("div",{className:`smb-step__item smb-step__item--image-${i}`},(0,t.createElement)("div",{className:"smb-step__item__title"},(0,t.createElement)("div",{className:"smb-step__item__number",style:{backgroundColor:s}}),(0,t.createElement)("span",null,(0,t.createElement)(_.RichText.Content,{value:a}))),(0,t.createElement)("div",{className:"smb-step__item__body"},!!n&&(0,t.createElement)("div",{className:"smb-step__item__figure"},(0,t.createElement)("img",{src:r,alt:"",className:`wp-image-${n}`})),(0,t.createElement)("div",{className:"smb-step__item__summary"},(0,t.createElement)(_.InnerBlocks.Content,null),!_.RichText.isEmpty(o)&&(0,t.createElement)("a",{className:"smb-step__item__link",href:m,style:{color:u},target:"_self"===c?void 0:c,rel:"_self"===c?void 0:"noopener noreferrer"},(0,t.createElement)("i",{className:"fas fa-arrow-circle-right"}),(0,t.createElement)("span",{className:"smb-step__item__link__label"},(0,t.createElement)(_.RichText.Content,{value:o}))))))}},{attributes:{...R,linkTarget:{type:"string",source:"attribute",selector:".smb-step__item__link",attribute:"target",default:"_self"}},save(e){let{attributes:l}=e;const{title:a,numberColor:s,imagePosition:i,imageID:n,imageURL:r,linkLabel:o,linkURL:m,linkTarget:c,linkColor:u}=l;return(0,t.createElement)("div",{className:`smb-step__item smb-step__item--image-${i}`},(0,t.createElement)("div",{className:"smb-step__item__title"},(0,t.createElement)("div",{className:"smb-step__item__number",style:{backgroundColor:s}}),(0,t.createElement)("span",null,(0,t.createElement)(_.RichText.Content,{value:a}))),(0,t.createElement)("div",{className:"smb-step__item__body"},!!n&&(0,t.createElement)("div",{className:"smb-step__item__figure"},(0,t.createElement)("img",{src:r,alt:"",className:`wp-image-${n}`})),(0,t.createElement)("div",{className:"smb-step__item__summary"},(0,t.createElement)(_.InnerBlocks.Content,null),!_.RichText.isEmpty(o)&&(0,t.createElement)("a",{className:"smb-step__item__link",href:m,target:c,style:{color:u}},(0,t.createElement)("i",{className:"fas fa-arrow-circle-right"}),(0,t.createElement)("span",{className:"smb-step__item__link__label"},(0,t.createElement)(_.RichText.Content,{value:o}))))))}},{attributes:{...R},migrate(e){return[e,(()=>{let t=e.summary;return t=t.match("</p><p>")?e.summary.split("</p><p>"):e.summary.split(),(0,a.times)(t.length,(e=>{const l=t[e].replace("<p>","").replace("</p>","");return(0,s.createBlock)("core/paragraph",{content:l})}))})()]},save(e){let{attributes:l}=e;const{title:a,summary:s,numberColor:i,imagePosition:n,imageID:r,imageURL:o,linkLabel:m,linkURL:c,linkTarget:u,linkColor:g}=l;return(0,t.createElement)("div",{className:`smb-step__item smb-step__item--image-${n}`},(0,t.createElement)("div",{className:"smb-step__item__title"},(0,t.createElement)("div",{className:"smb-step__item__number",style:{backgroundColor:i}}),(0,t.createElement)("span",null,(0,t.createElement)(_.RichText.Content,{value:a}))),!!r&&(0,t.createElement)("div",{className:"smb-step__item__figure"},(0,t.createElement)("img",{src:o,alt:"",className:`wp-image-${r}`})),(0,t.createElement)("div",{className:"smb-step__item__body"},(0,t.createElement)("div",{className:"smb-step__item__summary"},(0,t.createElement)(_.RichText.Content,{value:s})),!_.RichText.isEmpty(m)&&(0,t.createElement)("a",{className:"smb-step__item__link",href:c,target:u,style:{color:g}},(0,t.createElement)("i",{className:"fas fa-arrow-circle-right"}),(0,t.createElement)("span",{className:"smb-step__item__link__label"},(0,t.createElement)(_.RichText.Content,{value:m})))))}}],T={to:[{type:"block",blocks:["snow-monkey-blocks/step-item-free"],transform:e=>(0,s.createBlock)("snow-monkey-blocks/step-item-free",e)}]};const{name:x}=r,L={icon:{foreground:"#cd162c",src:o},edit:function(e){let{attributes:l,setAttributes:a,isSelected:s,className:r,clientId:o}=e;const{title:m,numberColor:p,imagePosition:k,imageID:h,imageURL:v,imageAlt:f,imageWidth:y,imageHeight:w,imageSizeSlug:R,linkLabel:S,linkURL:T,linkTarget:x,linkColor:L}=l,I=(0,g.useSelect)((e=>{var t,l;return!(null===(t=e("core/block-editor").getBlock(o))||void 0===t||null===(l=t.innerBlocks)||void 0===l||!l.length)}),[o]),[z,B]=(0,t.useState)(!1),U=!!T,P=U&&s,{resizedImages:H}=(0,g.useSelect)((e=>{if(!h)return{resizedImages:{}};const{getMedia:t}=e("core"),l=t(h);if(!l)return{resizedImages:{}};const{getSettings:a}=e("core/block-editor"),{imageSizes:s}=a();return{resizedImages:n(s,l)}}),[h]),A=c()("smb-step__item",`smb-step__item--image-${k}`,r),M={backgroundColor:p||void 0},O={color:L||void 0},j=(0,t.useRef)(),$=(0,_.useBlockProps)({className:A,ref:j}),D=(0,_.useInnerBlocksProps)({className:"smb-step__item__summary"},{renderAppender:I?_.InnerBlocks.DefaultBlockAppender:_.InnerBlocks.ButtonBlockAppender}),V=e=>{let{url:t,opensInNewTab:l}=e;return a({linkURL:t,linkTarget:l?"_blank":"_self"})};return(0,t.createElement)(t.Fragment,null,(0,t.createElement)(_.InspectorControls,null,(0,t.createElement)(_.__experimentalPanelColorGradientSettings,{title:(0,i.__)("Color","snow-monkey-blocks"),initialOpen:!1,settings:[{colorValue:p,onColorChange:e=>a({numberColor:e}),label:(0,i.__)("Number color","snow-monkey-blocks")},{colorValue:L,onColorChange:e=>a({linkColor:e}),label:(0,i.__)("Link color","snow-monkey-blocks")}],__experimentalHasMultipleOrigins:!0,__experimentalIsRenderedInSidebar:!0}),(0,t.createElement)(u.PanelBody,{title:(0,i.__)("Block settings","snow-monkey-blocks")},(0,t.createElement)(u.SelectControl,{label:(0,i.__)("Image position","snow-monkey-blocks"),value:k,onChange:e=>a({imagePosition:e}),options:[{value:"left",label:(0,i.__)("Left side","snow-monkey-blocks")},{value:"center",label:(0,i.__)("Center","snow-monkey-blocks")},{value:"right",label:(0,i.__)("Right side","snow-monkey-blocks")}]}),(0,t.createElement)(C,{label:(0,i.__)("Images size","snow-monkey-blocks"),id:h,slug:R,onChange:e=>{let t=v;H[e]&&H[e].url&&(t=H[e].url);let l=y;H[e]&&H[e].width&&(l=H[e].width);let s=w;H[e]&&H[e].height&&(s=H[e].height),a({imageURL:t,imageWidth:l,imageHeight:s,imageSizeSlug:e})}}))),(0,t.createElement)("div",$,(0,t.createElement)("div",{className:"smb-step__item__title"},(0,t.createElement)("div",{className:"smb-step__item__number",style:M}),(0,t.createElement)(_.RichText,{tagName:"span",placeholder:(0,i.__)("Write title…","snow-monkey-blocks"),value:m,multiline:!1,onChange:e=>a({title:e})})),(0,t.createElement)("div",{className:"smb-step__item__body"},(!!v||s)&&(0,t.createElement)("div",{className:"smb-step__item__figure"},(0,t.createElement)(E,{src:v,id:h,alt:f,onSelect:e=>{const t=e.sizes&&e.sizes[R]?e.sizes[R].url:e.url,l=e.sizes&&e.sizes[R]?e.sizes[R].width:e.width,s=e.sizes&&e.sizes[R]?e.sizes[R].height:e.height;a({imageURL:t,imageID:e.id,imageAlt:e.alt,imageWidth:l,imageHeight:s})},onSelectURL:e=>{e!==v&&a({imageURL:e,imageID:0,imageSizeSlug:"large"})},onRemove:()=>a({imageURL:"",imageAlt:"",imageWidth:"",imageHeight:"",imageID:0}),isSelected:s})),(0,t.createElement)("div",D),(!_.RichText.isEmpty(S)||s)&&(0,t.createElement)("span",{className:"smb-step__item__link",href:T,style:O,target:"_self"===x?void 0:x,rel:"_self"===x?void 0:"noopener noreferrer"},(0,t.createElement)("i",{className:"fas fa-circle-arrow-right"}),(0,t.createElement)(_.RichText,{className:"smb-step__item__link__label",placeholder:(0,i.__)("Link text","snow-monkey-blocks"),value:S,multiline:!1,onChange:e=>a({linkLabel:e}),withoutInteractiveFormatting:!0}),(z||P)&&(0,t.createElement)(u.Popover,{position:"bottom left",anchorRef:j.current,onClose:()=>B(!1)},(0,t.createElement)(N,{url:T,target:x,onChange:V}))))),(0,t.createElement)(_.BlockControls,{group:"block"},!U&&(0,t.createElement)(u.ToolbarButton,{icon:d,label:(0,i.__)("Link","snow-monkey-blocks"),"aria-expanded":z,onClick:()=>B(!z)}),P&&(0,t.createElement)(u.ToolbarButton,{isPressed:!0,icon:b,label:(0,i.__)("Unlink","snow-monkey-blocks"),onClick:()=>V("")})))},save:function(e){let{attributes:l,className:a}=e;const{title:s,numberColor:i,imagePosition:n,imageID:r,imageURL:o,imageAlt:m,imageWidth:u,imageHeight:g,linkLabel:p,linkURL:d,linkTarget:b,linkColor:k}=l,h=c()("smb-step__item",`smb-step__item--image-${n}`,a),v={backgroundColor:i||void 0},f={color:k||void 0};return(0,t.createElement)("div",_.useBlockProps.save({className:h}),(0,t.createElement)("div",{className:"smb-step__item__title"},(0,t.createElement)("div",{className:"smb-step__item__number",style:v}),(0,t.createElement)(_.RichText.Content,{tagName:"span",value:s})),(0,t.createElement)("div",{className:"smb-step__item__body"},!!o&&(0,t.createElement)("div",{className:"smb-step__item__figure"},(0,t.createElement)("img",{src:o,alt:m,width:!!u&&u,height:!!g&&g,className:`wp-image-${r}`})),(0,t.createElement)("div",_.useInnerBlocksProps.save({className:"smb-step__item__summary"})),!_.RichText.isEmpty(p)&&(0,t.createElement)("a",{className:"smb-step__item__link",href:d,style:f,target:"_self"===b?void 0:b,rel:"_self"===b?void 0:"noopener noreferrer"},(0,t.createElement)("i",{className:"fa-solid fa-circle-arrow-right"}),(0,t.createElement)(_.RichText.Content,{tagName:"span",className:"smb-step__item__link__label",value:p}))))},transforms:T,deprecated:S};(e=>{if(!e)return;const{metadata:t,settings:l,name:a}=e;t&&(t.title&&(t.title=(0,i.__)(t.title,"snow-monkey-blocks"),l.title=t.title),t.description&&(t.description=(0,i.__)(t.description,"snow-monkey-blocks"),l.description=t.description),t.keywords&&(t.keywords=(0,i.__)(t.keywords,"snow-monkey-blocks"),l.keywords=t.keywords)),(0,s.registerBlockType)({name:a,...t},l)})(e)}()}();