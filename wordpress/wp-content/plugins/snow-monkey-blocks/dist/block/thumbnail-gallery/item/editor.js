!function(){var e={184:function(e,t){var i;!function(){"use strict";var a={}.hasOwnProperty;function l(){for(var e=[],t=0;t<arguments.length;t++){var i=arguments[t];if(i){var n=typeof i;if("string"===n||"number"===n)e.push(i);else if(Array.isArray(i)){if(i.length){var r=l.apply(null,i);r&&e.push(r)}}else if("object"===n){if(i.toString!==Object.prototype.toString&&!i.toString.toString().includes("[native code]")){e.push(i.toString());continue}for(var s in i)a.call(i,s)&&i[s]&&e.push(s)}}}return e.join(" ")}e.exports?(l.default=l,e.exports=l):void 0===(i=function(){return l}.apply(t,[]))||(e.exports=i)}()}},t={};function i(a){var l=t[a];if(void 0!==l)return l.exports;var n=t[a]={exports:{}};return e[a](n,n.exports,i),n.exports}i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,{a:t}),t},i.d=function(e,t){for(var a in t)i.o(t,a)&&!i.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},function(){"use strict";var e={};i.r(e),i.d(e,{metadata:function(){return s},name:function(){return k},settings:function(){return S}});var t=window.wp.element,a=window.lodash,l=window.wp.blocks,n=(window.wp.richText,window.wp.i18n);const r=(e,t)=>t?(0,a.reduce)(e,((e,i)=>{const l=(0,a.get)(t,["sizes",i.slug,"url"]),n=(0,a.get)(t,["media_details","sizes",i.slug,"source_url"]),r=(0,a.get)(t,["sizes",i.slug,"width"]),s=(0,a.get)(t,["media_details","sizes",i.slug,"width"]),o=(0,a.get)(t,["sizes",i.slug,"height"]),c=(0,a.get)(t,["media_details","sizes",i.slug,"height"]);return{...e,[i.slug]:{url:l||n,width:r||s,height:o||c}}}),{}):{};var s=JSON.parse('{"apiVersion":2,"name":"snow-monkey-blocks/thumbnail-gallery-item","title":"Slide (Deprecated)","description":"It is a child block of the thumbnail gallery block.","category":"smb-deprecated","parent":["snow-monkey-blocks/thumbnail-gallery"],"attributes":{"imageID":{"type":"number","default":0},"imageURL":{"type":"string","source":"attribute","selector":".smb-thumbnail-gallery__item__figure > img","attribute":"src","default":""},"imageAlt":{"type":"string","source":"attribute","selector":".smb-thumbnail-gallery__item__figure > img","attribute":"alt","default":""},"imageWidth":{"type":"string","source":"attribute","selector":".smb-thumbnail-gallery__item__figure > img","attribute":"width","default":""},"imageHeight":{"type":"string","source":"attribute","selector":".smb-thumbnail-gallery__item__figure > img","attribute":"height","default":""},"imageSizeSlug":{"type":"string","default":"large"},"caption":{"type":"string","source":"html","selector":".smb-thumbnail-gallery__item__caption","default":""}},"supports":{"html":false},"editorScript":"file:../../../dist/block/thumbnail-gallery/item/editor.js"}'),o=(0,t.createElement)("svg",{viewBox:"0 0 24 24"},(0,t.createElement)("path",{d:"M5,5.78V18.22a.78.78,0,0,0,.78.78H18.22a.78.78,0,0,0,.78-.78V5.78A.78.78,0,0,0,18.22,5H5.78A.78.78,0,0,0,5,5.78m12.44,12H6.56a.38.38,0,0,1-.39-.39V6.56a.38.38,0,0,1,.39-.39H17.44a.38.38,0,0,1,.39.39V17.44a.38.38,0,0,1-.39.39"}),(0,t.createElement)("path",{d:"M6.17,14.16l3.06-2.23a.22.22,0,0,1,.22,0l2.34,1.5a.21.21,0,0,0,.24,0l3-2.83a.19.19,0,0,1,.27,0l3.09,3v1.16l-3.09-3a.18.18,0,0,0-.27,0l-3,2.82a.19.19,0,0,1-.24,0L9.45,13.11a.18.18,0,0,0-.22,0L6.17,15.33Z"}),(0,t.createElement)("path",{d:"M2.22,5H0V6.17H1.44a.38.38,0,0,1,.39.39V17.44a.38.38,0,0,1-.39.39H0V19H2.22A.78.78,0,0,0,3,18.22V5.78A.78.78,0,0,0,2.22,5Z"}),(0,t.createElement)("path",{d:"M24,17.83H22.56a.38.38,0,0,1-.39-.39V6.56a.38.38,0,0,1,.39-.39H24V5H21.78a.78.78,0,0,0-.78.78V18.22a.78.78,0,0,0,.78.78H24Z"})),c=i(184),m=i.n(c),u=window.wp.blockEditor,g=window.wp.components,d=window.wp.data;function p(){return p=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a])}return e},p.apply(this,arguments)}const h=e=>{let{id:i,src:a,allowedTypes:l,accept:r,onSelect:s,onSelectURL:o,onRemove:c}=e;return(0,t.createElement)(u.BlockControls,{group:"inline"},(0,t.createElement)(u.MediaReplaceFlow,{mediaId:i,mediaURL:a,allowedTypes:l,accept:r,onSelect:s,onSelectURL:o}),!!a&&!!c&&(0,t.createElement)(g.ToolbarItem,{as:g.Button,onClick:c},(0,n.__)("Release","snow-monkey-blocks")))},b=e=>{let{src:i,alt:a,id:l,style:n}=e;return(0,t.createElement)("img",{src:i,alt:a,className:`wp-image-${l}`,style:n})},y=e=>{let{src:i,style:a}=e;return(0,t.createElement)("video",{controls:!0,src:i,style:a})},f=(0,t.memo)((e=>{let i,{id:l,src:n,alt:r,url:s,target:o,allowedTypes:c,accept:m,onSelect:u,onSelectURL:g,onRemove:d,mediaType:p,style:f,rel:_,linkClass:w}=e;if("image"===p){let e;i=(0,t.createElement)(b,{src:n,alt:r,id:l,style:f}),e=_?(0,a.isEmpty)(_)?void 0:_:"_self"!==o&&o?"noopener noreferrer":void 0,s&&(i=(0,t.createElement)("span",{href:s,target:"_self"===o?void 0:o,rel:e,className:w},i))}else"video"===p&&(i=(0,t.createElement)(y,{src:n,style:f}));return(0,t.createElement)(t.Fragment,null,(0,t.createElement)(h,{id:l,src:n,allowedTypes:c,accept:m,onSelect:u,onSelectURL:g,onRemove:d}),i)}),((e,t)=>{const i=Object.keys(e);for(const a of i)if(e[a]!==t[a])return!1;return!0}));function _(e){const{src:i,onSelect:a,onSelectURL:l,mediaType:r,allowedTypes:s=["image"]}=e,o=!r&&i?"image":r;let c=(0,n.__)("Media","snow-monkey-blocks");1===s.length&&("image"===s[0]?c=(0,n.__)("Image","snow-monkey-blocks"):"video"===s[0]&&(c=(0,n.__)("Video","snow-monkey-blocks")));const m=(0,t.useMemo)((()=>s.map((e=>`${e}/*`)).join(",")),[s]);return i?(0,t.createElement)(f,p({},e,{accept:m,allowedTypes:s,mediaType:o})):(0,t.createElement)(u.MediaPlaceholder,{icon:"format-image",labels:{title:c},onSelect:a,onSelectURL:l,accept:m,allowedTypes:s})}function w(e){const{label:i,id:a,slug:l,onChange:n}=e;if(!a)return null;const{options:s}=(0,d.useSelect)((e=>{const{getMedia:t}=e("core"),i=t(a);if(!i)return{options:[]};const{getSettings:l}=e("core/block-editor"),{imageSizes:n}=l(),s=r(n,i);return{options:n.map((e=>!!s[e.slug]&&{value:e.slug,label:e.name})).filter((e=>e))}}));return 1>s.length?null:(0,t.createElement)(g.SelectControl,{label:i,value:l,options:s,onChange:n})}var v=[{attributes:{...s.attributes},supports:{align:["wide","full"]},save(e){let{attributes:i,className:a}=e;const{imageID:l,imageURL:n,imageAlt:r}=i,s=m()("smb-thumbnail-gallery__item",a);return(0,t.createElement)(t.Fragment,null,!!l&&(0,t.createElement)("div",{className:s},(0,t.createElement)("div",{className:"smb-thumbnail-gallery__item__figure"},(0,t.createElement)("img",{src:n,alt:r,className:`wp-image-${l}`}))))}}];const{name:k}=s,S={icon:{foreground:"#cd162c",src:o},edit:function(e){let{attributes:i,setAttributes:a,isSelected:l,className:s}=e;const{imageID:o,imageURL:c,imageAlt:p,imageWidth:h,imageHeight:b,imageSizeSlug:y,caption:f}=i,{resizedImages:v}=(0,d.useSelect)((e=>{if(!o)return{resizedImages:{}};const{getMedia:t}=e("core"),i=t(o);if(!i)return{resizedImages:{}};const{getSettings:a}=e("core/block-editor"),{imageSizes:l}=a();return{resizedImages:r(l,i)}}),[o]),k=m()("c-row__col",s),S=(0,u.useBlockProps)({className:k});return(0,t.createElement)(t.Fragment,null,(0,t.createElement)(u.InspectorControls,null,(0,t.createElement)(g.PanelBody,{title:(0,n.__)("Block settings","snow-monkey-blocks")},(0,t.createElement)(w,{label:(0,n.__)("Images size","snow-monkey-blocks"),id:o,slug:y,onChange:e=>{let t=c;v[e]&&v[e].url&&(t=v[e].url);let i=h;v[e]&&v[e].width&&(i=v[e].width);let l=b;v[e]&&v[e].height&&(l=v[e].height),a({imageURL:t,imageWidth:i,imageHeight:l,imageSizeSlug:e})}}))),(0,t.createElement)("div",S,(0,t.createElement)(_,{src:c,id:o,alt:p,onSelect:e=>{const t=e.sizes&&e.sizes[y]?e.sizes[y].url:e.url,i=e.sizes&&e.sizes[y]?e.sizes[y].width:e.width,l=e.sizes&&e.sizes[y]?e.sizes[y].height:e.height;a({imageURL:t,imageID:e.id,imageAlt:e.alt,imageWidth:i,imageHeight:l})},onSelectURL:e=>{e!==c&&a({imageURL:e,imageID:0,imageSizeSlug:"large"})},onRemove:()=>a({imageURL:"",imageAlt:"",imageWidth:"",imageHeight:"",imageID:0}),isSelected:l}),(!u.RichText.isEmpty(f)||l)&&(0,t.createElement)(u.RichText,{placeholder:(0,n.__)("Write caption…","snow-monkey-blocks"),value:f,onChange:e=>a({caption:e})})))},save:function(e){let{attributes:i,className:a}=e;const{imageID:l,imageURL:n,imageAlt:r,imageWidth:s,imageHeight:o,caption:c}=i,g=m()("smb-thumbnail-gallery__item",a);return(0,t.createElement)("div",u.useBlockProps.save({className:g}),(0,t.createElement)("div",{className:"smb-thumbnail-gallery__item__figure"},(0,t.createElement)("img",{src:n,alt:r,width:!!s&&s,height:!!o&&o,className:`wp-image-${l}`})),!u.RichText.isEmpty(c)&&(0,t.createElement)("div",{className:"smb-thumbnail-gallery__item__caption"},(0,t.createElement)(u.RichText.Content,{value:c})))},deprecated:v};(e=>{if(!e)return;const{metadata:t,settings:i,name:a}=e;t&&(t.title&&(t.title=(0,n.__)(t.title,"snow-monkey-blocks"),i.title=t.title),t.description&&(t.description=(0,n.__)(t.description,"snow-monkey-blocks"),i.description=t.description),t.keywords&&(t.keywords=(0,n.__)(t.keywords,"snow-monkey-blocks"),i.keywords=t.keywords)),(0,l.registerBlockType)({name:a,...t},i)})(e)}()}();