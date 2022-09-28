!function(){var e={184:function(e,t){var a;!function(){"use strict";var l={}.hasOwnProperty;function n(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var s=typeof a;if("string"===s||"number"===s)e.push(a);else if(Array.isArray(a)){if(a.length){var i=n.apply(null,a);i&&e.push(i)}}else if("object"===s){if(a.toString!==Object.prototype.toString&&!a.toString.toString().includes("[native code]")){e.push(a.toString());continue}for(var r in a)l.call(a,r)&&a[r]&&e.push(r)}}}return e.join(" ")}e.exports?(n.default=n,e.exports=n):void 0===(a=function(){return n}.apply(t,[]))||(e.exports=a)}()}},t={};function a(l){var n=t[l];if(void 0!==n)return n.exports;var s=t[l]={exports:{}};return e[l](s,s.exports,a),s.exports}a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,{a:t}),t},a.d=function(e,t){for(var l in t)a.o(t,l)&&!a.o(e,l)&&Object.defineProperty(e,l,{enumerable:!0,get:t[l]})},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},function(){"use strict";var e={};a.r(e),a.d(e,{metadata:function(){return m},name:function(){return C},settings:function(){return z}});var t=window.wp.element,l=window.lodash,n=window.wp.blocks,s=(window.wp.richText,window.wp.i18n);const i=(e,t)=>t?(0,l.reduce)(e,((e,a)=>{const n=(0,l.get)(t,["sizes",a.slug,"url"]),s=(0,l.get)(t,["media_details","sizes",a.slug,"source_url"]),i=(0,l.get)(t,["sizes",a.slug,"width"]),r=(0,l.get)(t,["media_details","sizes",a.slug,"width"]),m=(0,l.get)(t,["sizes",a.slug,"height"]),c=(0,l.get)(t,["media_details","sizes",a.slug,"height"]);return{...e,[a.slug]:{url:n||s,width:i||r,height:m||c}}}),{}):{},r=e=>{const t=document.createElement("div");return t.style.display="none",t.innerHTML=e,t.innerText};var m=JSON.parse('{"apiVersion":2,"name":"snow-monkey-blocks/panels-item","title":"Panel (Vertical layout)","description":"It is a child block of the panels block.","category":"smb","parent":["snow-monkey-blocks/panels"],"attributes":{"titleTagName":{"type":"string","default":"div"},"title":{"type":"string","source":"html","selector":".smb-panels__item__title","default":""},"summary":{"type":"string","source":"html","selector":".smb-panels__item__content","default":""},"linkLabel":{"type":"string","source":"text","selector":".smb-panels__item__link","default":""},"linkURL":{"type":"string","source":"attribute","selector":".smb-panels__item__action > a","attribute":"href","default":""},"linkTarget":{"type":"string","source":"attribute","selector":".smb-panels__item__action > a","attribute":"target","default":"_self"},"imageID":{"type":"number","default":0},"imageURL":{"type":"string","source":"attribute","selector":".smb-panels__item__figure > img","attribute":"src","default":""},"imageAlt":{"type":"string","source":"attribute","selector":".smb-panels__item__figure > img","attribute":"alt","default":""},"imageWidth":{"type":"string","source":"attribute","selector":".smb-panels__item__figure > img","attribute":"width","default":""},"imageHeight":{"type":"string","source":"attribute","selector":".smb-panels__item__figure > img","attribute":"height","default":""},"imageSizeSlug":{"type":"string","default":"large"}},"supports":{"html":false},"editorScript":"file:../../../../dist/block/panels/item/vertical/editor.js"}'),c=(0,t.createElement)("svg",{viewBox:"0 0 24 24"},(0,t.createElement)("path",{d:"M3,3v8h8V3Zm7,7H4V4h6Z"}),(0,t.createElement)("path",{d:"M13,3v8h8V3Zm7,7H14V4h6Z"}),(0,t.createElement)("path",{d:"M3,13v8h8V13Zm7,7H4V14h6Z"}),(0,t.createElement)("path",{d:"M13,13v8h8V13Zm7,7H14V14h6Z"})),o=a(184),_=a.n(o),u=window.wp.blockEditor,g=window.wp.components,p=window.wp.data,d=window.wp.primitives,b=(0,t.createElement)(d.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,t.createElement)(d.Path,{d:"M15.6 7.2H14v1.5h1.6c2 0 3.7 1.7 3.7 3.7s-1.7 3.7-3.7 3.7H14v1.5h1.6c2.8 0 5.2-2.3 5.2-5.2 0-2.9-2.3-5.2-5.2-5.2zM4.7 12.4c0-2 1.7-3.7 3.7-3.7H10V7.2H8.4c-2.9 0-5.2 2.3-5.2 5.2 0 2.9 2.3 5.2 5.2 5.2H10v-1.5H8.4c-2 0-3.7-1.7-3.7-3.7zm4.6.9h5.3v-1.5H9.3v1.5z"})),h=(0,t.createElement)(d.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,t.createElement)(d.Path,{d:"M15.6 7.3h-.7l1.6-3.5-.9-.4-3.9 8.5H9v1.5h2l-1.3 2.8H8.4c-2 0-3.7-1.7-3.7-3.7s1.7-3.7 3.7-3.7H10V7.3H8.4c-2.9 0-5.2 2.3-5.2 5.2 0 2.9 2.3 5.2 5.2 5.2H9l-1.4 3.2.9.4 5.7-12.5h1.4c2 0 3.7 1.7 3.7 3.7s-1.7 3.7-3.7 3.7H14v1.5h1.6c2.9 0 5.2-2.3 5.2-5.2 0-2.9-2.4-5.2-5.2-5.2z"}));function k(){return k=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&(e[l]=a[l])}return e},k.apply(this,arguments)}const y=e=>{let{id:a,src:l,allowedTypes:n,accept:i,onSelect:r,onSelectURL:m,onRemove:c}=e;return(0,t.createElement)(u.BlockControls,{group:"inline"},(0,t.createElement)(u.MediaReplaceFlow,{mediaId:a,mediaURL:l,allowedTypes:n,accept:i,onSelect:r,onSelectURL:m}),!!l&&!!c&&(0,t.createElement)(g.ToolbarItem,{as:g.Button,onClick:c},(0,s.__)("Release","snow-monkey-blocks")))},v=e=>{let{src:a,alt:l,id:n,style:s}=e;return(0,t.createElement)("img",{src:a,alt:l,className:`wp-image-${n}`,style:s})},f=e=>{let{src:a,style:l}=e;return(0,t.createElement)("video",{controls:!0,src:a,style:l})},E=(0,t.memo)((e=>{let a,{id:n,src:s,alt:i,url:r,target:m,allowedTypes:c,accept:o,onSelect:_,onSelectURL:u,onRemove:g,mediaType:p,style:d,rel:b,linkClass:h}=e;if("image"===p){let e;a=(0,t.createElement)(v,{src:s,alt:i,id:n,style:d}),e=b?(0,l.isEmpty)(b)?void 0:b:"_self"!==m&&m?"noopener noreferrer":void 0,r&&(a=(0,t.createElement)("span",{href:r,target:"_self"===m?void 0:m,rel:e,className:h},a))}else"video"===p&&(a=(0,t.createElement)(f,{src:s,style:d}));return(0,t.createElement)(t.Fragment,null,(0,t.createElement)(y,{id:n,src:s,allowedTypes:c,accept:o,onSelect:_,onSelectURL:u,onRemove:g}),a)}),((e,t)=>{const a=Object.keys(e);for(const l of a)if(e[l]!==t[l])return!1;return!0}));function w(e){const{src:a,onSelect:l,onSelectURL:n,mediaType:i,allowedTypes:r=["image"]}=e,m=!i&&a?"image":i;let c=(0,s.__)("Media","snow-monkey-blocks");1===r.length&&("image"===r[0]?c=(0,s.__)("Image","snow-monkey-blocks"):"video"===r[0]&&(c=(0,s.__)("Video","snow-monkey-blocks")));const o=(0,t.useMemo)((()=>r.map((e=>`${e}/*`)).join(",")),[r]);return a?(0,t.createElement)(E,k({},e,{accept:o,allowedTypes:r,mediaType:m})):(0,t.createElement)(u.MediaPlaceholder,{icon:"format-image",labels:{title:c},onSelect:l,onSelectURL:n,accept:o,allowedTypes:r})}const T=e=>"_self"!==e&&("_blank"===e||void 0);function R(e){const{url:a,target:l,onChange:n}=e;return(0,t.createElement)(u.__experimentalLinkControl,{className:"wp-block-navigation-link__inline-link-input",value:{url:a,opensInNewTab:T(l)},onChange:n})}function N(e){const{label:a,id:l,slug:n,onChange:s}=e;if(!l)return null;const{options:r}=(0,p.useSelect)((e=>{const{getMedia:t}=e("core"),a=t(l);if(!a)return{options:[]};const{getSettings:n}=e("core/block-editor"),{imageSizes:s}=n(),r=i(s,a);return{options:s.map((e=>!!r[e.slug]&&{value:e.slug,label:e.name})).filter((e=>e))}}));return 1>r.length?null:(0,t.createElement)(g.SelectControl,{label:a,value:n,options:r,onChange:s})}const x=m.attributes;var S=[{attributes:{...x,linkURL:{type:"string",source:"attribute",selector:".smb-panels__item",attribute:"href",default:""},linkTarget:{type:"string",source:"attribute",selector:".smb-panels__item",attribute:"target",default:"_self"}},save(e){let{attributes:a,className:l}=e;const{titleTagName:n,title:s,summary:i,linkLabel:r,linkURL:m,linkTarget:c,imageID:o,imageURL:g,imageAlt:p}=a,d=(0,t.createElement)(t.Fragment,null,!!g&&(0,t.createElement)("div",{className:"smb-panels__item__figure"},(0,t.createElement)("img",{src:g,alt:p,className:`wp-image-${o}`})),(0,t.createElement)("div",{className:"smb-panels__item__body"},!u.RichText.isEmpty(s)&&"none"!==n&&(0,t.createElement)(u.RichText.Content,{tagName:n,className:"smb-panels__item__title",value:s}),!u.RichText.isEmpty(i)&&(0,t.createElement)("div",{className:"smb-panels__item__content"},(0,t.createElement)(u.RichText.Content,{value:i})),!u.RichText.isEmpty(r)&&(0,t.createElement)("div",{className:"smb-panels__item__action"},(0,t.createElement)("div",{className:"smb-panels__item__link"},(0,t.createElement)(u.RichText.Content,{value:r}))))),b=_()("c-row__col",l);return(0,t.createElement)("div",{className:b},m?(0,t.createElement)("a",{className:"smb-panels__item",href:m,target:"_self"===c?void 0:c,rel:"_self"===c?void 0:"noopener noreferrer"},d):(0,t.createElement)("div",{className:"smb-panels__item"},d))}},{attributes:{...x,linkURL:{type:"string",source:"attribute",selector:".smb-panels__item",attribute:"href",default:""},linkTarget:{type:"string",source:"attribute",selector:".smb-panels__item",attribute:"target",default:"_self"}},save(e){let{attributes:a}=e;const{titleTagName:l,title:n,summary:s,linkLabel:i,linkURL:r,linkTarget:m,imageID:c,imageURL:o}=a,_=()=>(0,t.createElement)(t.Fragment,null,!!c&&(0,t.createElement)("div",{className:"smb-panels__item__figure"},(0,t.createElement)("img",{src:o,alt:"",className:`wp-image-${c}`})),(0,t.createElement)("div",{className:"smb-panels__item__body"},!u.RichText.isEmpty(n)&&(0,t.createElement)(u.RichText.Content,{tagName:l,className:"smb-panels__item__title",value:n}),!u.RichText.isEmpty(s)&&(0,t.createElement)("div",{className:"smb-panels__item__content"},(0,t.createElement)(u.RichText.Content,{value:s})),!u.RichText.isEmpty(i)&&(0,t.createElement)("div",{className:"smb-panels__item__action"},(0,t.createElement)("div",{className:"smb-panels__item__link"},(0,t.createElement)(u.RichText.Content,{value:i})))));return(0,t.createElement)("div",{className:"c-row__col"},(0,t.createElement)((()=>(r?()=>(0,t.createElement)("a",{className:"smb-panels__item",href:r,target:"_self"===m?void 0:m,rel:"_self"===m?void 0:"noopener noreferrer"},(0,t.createElement)(_,null)):()=>(0,t.createElement)("div",{className:"smb-panels__item"},(0,t.createElement)(_,null))).call(this)),null))}},{attributes:{...x,linkURL:{type:"string",source:"attribute",selector:".smb-panels__item",attribute:"href",default:""},linkTarget:{type:"string",source:"attribute",selector:".smb-panels__item",attribute:"target",default:"_self"}},save(e){let{attributes:a}=e;const{titleTagName:l,title:n,summary:s,linkLabel:i,linkURL:r,linkTarget:m,imageID:c,imageURL:o}=a;return(0,t.createElement)("div",{className:"c-row__col"},(_=(0,t.createElement)(t.Fragment,null,!!c&&(0,t.createElement)("div",{className:"smb-panels__item__figure"},(0,t.createElement)("img",{src:o,alt:"",className:`wp-image-${c}`})),(0,t.createElement)("div",{className:"smb-panels__item__body"},!u.RichText.isEmpty(n)&&(0,t.createElement)(u.RichText.Content,{tagName:l,className:"smb-panels__item__title",value:n}),!u.RichText.isEmpty(s)&&(0,t.createElement)("div",{className:"smb-panels__item__content"},(0,t.createElement)(u.RichText.Content,{value:s})),!u.RichText.isEmpty(i)&&(0,t.createElement)("div",{className:"smb-panels__item__action"},(0,t.createElement)("div",{className:"smb-panels__item__link"},(0,t.createElement)(u.RichText.Content,{value:i}))))),r?(0,t.createElement)("a",{className:"smb-panels__item",href:r,target:m},_):(0,t.createElement)("div",{className:"smb-panels__item",href:r,target:m},_)));var _}}],L={to:[{type:"block",blocks:["snow-monkey-blocks/panels-item-horizontal"],transform:e=>(0,n.createBlock)("snow-monkey-blocks/panels-item-horizontal",e)},{type:"block",blocks:["snow-monkey-blocks/panels-item-free"],transform:e=>(0,n.createBlock)("snow-monkey-blocks/panels-item-free",{},[(0,n.createBlock)("core/paragraph",{content:e.summary})])},{type:"block",blocks:["snow-monkey-blocks/panels-item-block-link"],transform:e=>(0,n.createBlock)("snow-monkey-blocks/panels-item-block-link",{linkURL:e.linkURL,linkTarget:e.linkTarget},[(0,n.createBlock)("core/paragraph",{content:e.summary})])}]};const{name:C}=m,z={icon:{foreground:"#cd162c",src:c},edit:function(e){let{attributes:a,setAttributes:n,isSelected:m,className:c}=e;const{titleTagName:o,title:d,summary:k,linkLabel:y,linkURL:v,linkTarget:f,imageID:E,imageURL:T,imageAlt:x,imageWidth:S,imageHeight:L,imageSizeSlug:C}=a,[z,U]=(0,t.useState)(!1),H=!!v,I=H&&m,{resizedImages:B}=(0,p.useSelect)((e=>{if(!E)return{resizedImages:{}};const{getMedia:t}=e("core"),a=t(E);if(!a)return{resizedImages:{}};const{getSettings:l}=e("core/block-editor"),{imageSizes:n}=l();return{resizedImages:i(n,a)}}),[E]),M=["div","h2","h3","none"],P=_()("c-row__col",c),V=_()("smb-panels__item__action",{"smb-panels__item__action--nolabel":!y&&!m}),j=(0,t.useRef)(),O=(0,u.useBlockProps)({className:P,ref:j}),A=e=>{let{url:t,opensInNewTab:a}=e;return n({linkURL:t,linkTarget:a?"_blank":"_self"})};return(0,t.createElement)(t.Fragment,null,(0,t.createElement)(u.InspectorControls,null,(0,t.createElement)(g.PanelBody,{title:(0,s.__)("Block settings","snow-monkey-blocks")},(0,t.createElement)(g.BaseControl,{label:(0,s.__)("Title tag","snow-monkey-blocks"),id:"snow-monkey-blocks/panels-item/title-tag-name"},(0,t.createElement)("div",{className:"smb-list-icon-selector"},(0,l.times)(M.length,(e=>{const a=o===M[e];return(0,t.createElement)(g.Button,{isPrimary:a,isSecondary:!a,onClick:()=>n({titleTagName:M[e]}),key:e},M[e])})))),(0,t.createElement)(N,{label:(0,s.__)("Images size","snow-monkey-blocks"),id:E,slug:C,onChange:e=>{let t=T;B[e]&&B[e].url&&(t=B[e].url);let a=S;B[e]&&B[e].width&&(a=B[e].width);let l=L;B[e]&&B[e].height&&(l=B[e].height),n({imageURL:t,imageWidth:a,imageHeight:l,imageSizeSlug:e})}}))),(0,t.createElement)("div",O,(0,t.createElement)("div",{className:"smb-panels__item"},(!!T||m)&&(0,t.createElement)("div",{className:"smb-panels__item__figure"},(0,t.createElement)(w,{src:T,id:E,alt:x,onSelect:e=>{const t=e.sizes&&e.sizes[C]?e.sizes[C].url:e.url,a=e.sizes&&e.sizes[C]?e.sizes[C].width:e.width,l=e.sizes&&e.sizes[C]?e.sizes[C].height:e.height;n({imageURL:t,imageID:e.id,imageAlt:e.alt,imageWidth:a,imageHeight:l})},onSelectURL:e=>{e!==T&&n({imageURL:e,imageID:0,imageSizeSlug:"large"})},onRemove:()=>n({imageURL:"",imageAlt:"",imageWidth:"",imageHeight:"",imageID:0}),isSelected:m})),(0,t.createElement)("div",{className:"smb-panels__item__body"},(!u.RichText.isEmpty(d)||m)&&"none"!==o&&(0,t.createElement)(u.RichText,{tagName:o,className:"smb-panels__item__title",placeholder:(0,s.__)("Write title…","snow-monkey-blocks"),value:d,onChange:e=>n({title:e})}),(!u.RichText.isEmpty(k)||m)&&(0,t.createElement)(u.RichText,{className:"smb-panels__item__content",placeholder:(0,s.__)("Write content…","snow-monkey-blocks"),value:k,onChange:e=>n({summary:e})}),(!u.RichText.isEmpty(y)||!!v||m)&&(0,t.createElement)("div",{className:V},(!u.RichText.isEmpty(y)||m)&&(0,t.createElement)(u.RichText,{className:"smb-panels__item__link",value:y,placeholder:(0,s.__)("Link","snow-monkey-blocks"),onChange:e=>n({linkLabel:r(e)})})),(z||I)&&(0,t.createElement)(g.Popover,{position:"bottom center",anchorRef:j.current,onClose:()=>U(!1)},(0,t.createElement)(R,{url:v,target:f,onChange:A}))))),(0,t.createElement)(u.BlockControls,null,!H&&(0,t.createElement)(g.ToolbarButton,{icon:b,label:(0,s.__)("Link","snow-monkey-blocks"),"aria-expanded":z,onClick:()=>U(!z)}),I&&(0,t.createElement)(g.ToolbarButton,{isPressed:!0,icon:h,label:(0,s.__)("Unlink","snow-monkey-blocks"),onClick:()=>A("")})))},save:function(e){let{attributes:a,className:l}=e;const{titleTagName:n,title:s,summary:i,linkLabel:r,linkURL:m,linkTarget:c,imageID:o,imageURL:g,imageAlt:p,imageWidth:d,imageHeight:b}=a,h=_()("c-row__col",l),k=_()("smb-panels__item__action",{"smb-panels__item__action--nolabel":!r}),y=!u.RichText.isEmpty(r)&&(0,t.createElement)("div",{className:"smb-panels__item__link"},(0,t.createElement)(u.RichText.Content,{value:r}));return(0,t.createElement)("div",u.useBlockProps.save({className:h}),(0,t.createElement)("div",{className:"smb-panels__item"},!!g&&(0,t.createElement)("div",{className:"smb-panels__item__figure"},(0,t.createElement)("img",{src:g,alt:p,width:!!d&&d,height:!!b&&b,className:`wp-image-${o}`})),(0,t.createElement)("div",{className:"smb-panels__item__body"},!u.RichText.isEmpty(s)&&"none"!==n&&(0,t.createElement)(u.RichText.Content,{tagName:n,className:"smb-panels__item__title",value:s}),!u.RichText.isEmpty(i)&&(0,t.createElement)("div",{className:"smb-panels__item__content"},(0,t.createElement)(u.RichText.Content,{value:i})),(!u.RichText.isEmpty(r)||!!m)&&(0,t.createElement)("div",{className:k},m?(0,t.createElement)("a",{href:m,target:"_self"===c?void 0:c,rel:"_self"===c?void 0:"noopener noreferrer"},y):(0,t.createElement)(t.Fragment,null,y)))))},deprecated:S,transforms:L};(e=>{if(!e)return;const{metadata:t,settings:a,name:l}=e;t&&(t.title&&(t.title=(0,s.__)(t.title,"snow-monkey-blocks"),a.title=t.title),t.description&&(t.description=(0,s.__)(t.description,"snow-monkey-blocks"),a.description=t.description),t.keywords&&(t.keywords=(0,s.__)(t.keywords,"snow-monkey-blocks"),a.keywords=t.keywords)),(0,n.registerBlockType)({name:l,...t},a)})(e)}()}();