!function(){"use strict";var e={n:function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return e.d(t,{a:t}),t},d:function(n,t){for(var o in t)e.o(t,o)&&!e.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:t[o]})},o:function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}},n=window.jQuery,t=e.n(n);function o(e){const n=e.getAttribute("data-smb-thumbnail-gallery"),o=n?JSON.parse(n):{};o.slidesToShow=1,o.slidesToScroll=1,o.fade=!0,o.dots=!0,o.customPaging=(e,n)=>t()(e.$slides[n]).find("img").clone()[0],o.arrows=o.arrows||!1,o.adaptiveHeight=!0,o.rows=0,o.autoplay=0<o.autoplaySpeed,t()(e).on("init",(()=>{const n=t()(e).find(".slick-list");n.prepend(t()(e).find(".slick-prev")),n.append(t()(e).find(".slick-next"))})),t()(e).slick(o)}document.addEventListener("DOMContentLoaded",(()=>{const e=document.querySelectorAll(".smb-thumbnail-gallery__canvas");var n,t;t=o,0<(n=e).length&&Array.prototype.slice.call(n,0).forEach((function(e,n){t(e,n)}))}),!1)}();