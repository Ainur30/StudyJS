!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/dist",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);var o=function(){var e=document.querySelector(".free-visit"),t=e.querySelector("a"),n=document.getElementById("free_visit_form");n.querySelector(".form-wrapper").classList.add("popup-content"),e.addEventListener("click",(function(e){e.preventDefault(),t.href=t.dataset.popup,n.style.display="block",n.addEventListener("click",(function(e){var t=e.target;t.classList.contains("close_icon")?n.style.display="none":(t=t.closest(".popup-content"))||(n.style.display="none")}))}))},r=function(){var e=document.querySelector(".call"),t=document.getElementById("callback_form"),n=t.querySelector(".form-wrapper"),o=e.querySelector(".callback-btn");n.classList.add("popup-content1"),o.addEventListener("click",(function(){o.src=o.dataset.popup,t.style.display="block",t.addEventListener("click",(function(e){var n=e.target;n.classList.contains("close_icon")?t.style.display="none":(n=n.closest(".popup-content1"))||(t.style.display="none")}))}))},l=function(){var e=document.querySelector(".main-slider"),t=e.querySelectorAll(".slide"),n=0,o=function(){t[n].style.display="none",++n>=t.length&&(n=0),function(e,t){e[t].style.display="flex"}(t,n)};!function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:3e3;setInterval(o,e)}(2e3)},c=function(){try{var e=document.querySelector(".fixed-gift"),t=document.getElementById("gift");t.querySelector(".form-wrapper").classList.add("popup-content"),e.addEventListener("click",(function(){e.style.display="none",t.style.display="block",t.addEventListener("click",(function(e){var n=e.target;n.classList.contains("close_icon")?t.style.display="none":(n=n.closest(".popup-content"))||(t.style.display="none")}))}))}catch(e){}};function a(e){return function(e){if(Array.isArray(e))return i(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return i(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return i(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}var u=function(){try{var e=document.getElementById("card_order"),t=document.getElementById("card_leto_mozaika"),n=document.getElementById("price-total"),o=document.querySelector(".price").querySelector("input"),r=e.querySelectorAll("input");n.textContent="1999",o.addEventListener("input",(function(){if("ТЕЛО2019"===o.value){var e=Number(n.textContent);n.textContent=Math.floor(e-.3*e)}})),e.addEventListener("click",(function(e){var l=e.target;"mozaika"===l.value&&a(r).filter((function(e){return"card-type"===e.name})).forEach((function(e){if(!0===e.checked){if("1"===e.value)if("ТЕЛО2019"===o.value){var t=Math.floor(.3*1999);n.textContent="".concat(1999-t)}else n.textContent="1999";if("6"===e.value)if("ТЕЛО2019"===o.value){var r=Math.floor(2970);n.textContent="".concat(9900-r)}else n.textContent="9900";if("9"===e.value)if("ТЕЛО2019"===o.value){var l=Math.floor(4170);n.textContent="".concat(13900-l)}else n.textContent="13900";if("12"===e.value)if("ТЕЛО2019"===o.value){var c=Math.floor(5970);n.textContent="".concat(19900-c)}else n.textContent="19900"}}));"schelkovo"===l.value&&a(r).filter((function(e){return"card-type"===e.name})).forEach((function(e){if(!0===e.checked){if("1"===e.value)if("ТЕЛО2019"===o.value){var t=Math.floor(.3*2999);n.textContent="".concat(2999-t)}else n.textContent="2999";if("6"===e.value)if("ТЕЛО"===o.value){var r=Math.floor(4497);n.textContent="".concat(14990-r)}else n.textContent="14990";if("9"===e.value)if("ТЕЛО2019"===o.value){var l=Math.floor(6597);n.textContent="".concat(21990-l)}else n.textContent="21990";if("12"===e.value)if("ТЕЛО2019"===o.value){var c=Math.floor(7497);n.textContent="".concat(24990-c)}else n.textContent="24990"}}));if("INPUT"===l.tagName&&"1"===l.value)if(t.checked)if("ТЕЛО2019"===o.value){var c=Math.floor(.3*1999);n.textContent="".concat(1999-c)}else n.textContent="1999";else if("ТЕЛО2019"===o.value){var i=Math.floor(.3*2999);n.textContent="".concat(2999-i)}else n.textContent="2999";if("INPUT"===l.tagName&&"6"===l.value)if(t.checked)if("ТЕЛО2019"===o.value){var u=Math.floor(2970);n.textContent="".concat(9900-u)}else n.textContent="9900";else if("ТЕЛО"===o.value){var s=Math.floor(4497);n.textContent="".concat(14990-s)}else n.textContent="14990";if("INPUT"===l.tagName&&"9"===l.value)if(t.checked)if("ТЕЛО2019"===o.value){var d=Math.floor(4170);n.textContent="".concat(13900-d)}else n.textContent="13900";else if("ТЕЛО2019"===o.value){var f=Math.floor(6597);n.textContent="".concat(21990-f)}else n.textContent="21990";if("INPUT"===l.tagName&&"12"===l.value)if(t.checked)if("ТЕЛО2019"===o.value){var y=Math.floor(5970);n.textContent="".concat(19900-y)}else n.textContent="19900";else if("ТЕЛО2019"===o.value){var p=Math.floor(7497);n.textContent="".concat(24990-p)}else n.textContent="24990"}))}catch(e){}},s=function(){try{var e=document.querySelector("header"),t=e.querySelector("nav"),n=document.getElementById("mozaika"),o=t.querySelector(".menu-button").querySelector("img"),r=e.querySelector(".popup-menu"),l=document.getElementById("totop");l.style.display="none";n.parentNode.documentElement.clientWidth<769&&o.addEventListener("click",(function(){r.style.display="flex",r.addEventListener("click",(function(e){var t=e.target;if("A"===t.tagName&&"IMG"!==t.tagName){if(e.preventDefault(),null===e.target)return;!function(e){if(void 0!==e.href){var t=e.href.split("#")[1];document.querySelector("#"+t).scrollIntoView({behavior:"smooth",block:"start"})}}(t),r.style.display="none"}"IMG"===t.tagName&&(r.style.display="none")}))})),window.addEventListener("scroll",(function(){document.documentElement.scrollTop>700?l.style.display="block":l.style.display="none",document.documentElement.clientWidth<768&&document.documentElement.scrollTop>120?t.style.position="fixed":t.style.position=""}))}catch(e){try{var c=document.querySelector("header"),a=c.querySelector("nav"),i=document.getElementById("schelkovo"),u=a.querySelector(".menu-button").querySelector("img"),s=c.querySelector(".popup-menu"),d=document.getElementById("totop");d.style.display="none";i.parentNode.documentElement.clientWidth<769&&u.addEventListener("click",(function(){s.style.display="flex",s.addEventListener("click",(function(e){var t=e.target;if("A"===t.tagName&&"IMG"!==t.tagName){if(e.preventDefault(),null===t)return;!function(e){if(void 0!==e.href){var t=e.href.split("#")[1];document.querySelector("#"+t).scrollIntoView({behavior:"smooth",block:"start"})}}(t),s.style.display="none"}"IMG"===t.tagName&&(s.style.display="none")}))})),window.addEventListener("scroll",(function(){document.documentElement.scrollTop>700?d.style.display="block":d.style.display="none",document.documentElement.clientWidth<768&&document.documentElement.scrollTop>120?a.style.position="fixed":a.style.position=""}))}catch(e){try{var f=document.querySelector("header"),y=f.querySelector("nav"),p=y.querySelector(".menu-button").querySelector("img"),m=f.querySelector(".popup-menu"),v=document.getElementById("totop");v.style.display="none";document.documentElement.clientWidth<769&&p.addEventListener("click",(function(){m.style.display="flex",m.addEventListener("click",(function(e){var t=e.target;"A"===t.tagName&&"IMG"!==t.tagName&&(e.preventDefault(),function(e){if(void 0!==e.href){var t=e.href.split("#")[1];document.querySelector("#"+t).scrollIntoView({behavior:"smooth",block:"start"})}}(t),m.style.display="none"),"IMG"===t.tagName&&(m.style.display="none")}))})),window.addEventListener("scroll",(function(){document.documentElement.scrollTop>700?v.style.display="block":v.style.display="none",document.documentElement.clientWidth<768&&document.documentElement.scrollTop>120?y.style.position="fixed":y.style.position=""}))}catch(e){}}}};function d(e){return function(e){if(Array.isArray(e))return y(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||f(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function f(e,t){if(e){if("string"==typeof e)return y(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?y(e,t):void 0}}function y(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}var p=function(){var e=document.querySelectorAll("form"),t=(document.createElement("div"),document.querySelector(".load")),n=document.getElementById("thanks"),o=(document.getElementById("banner-form"),document.getElementById("price-total")),r=n.querySelector(".form-content"),l=function(e){var t=document.querySelector(".error");t&&t.remove();e.parentNode.insertAdjacentHTML("beforeend",'<p class="error" style="color: red;">Обязательное поле!</p>')};e.forEach((function(e){e.querySelector("button");e.addEventListener("input",(function(e){var t=e.target;"phone"===t.name&&(t.style&&(t.style.border="none"),t.value=t.value.replace(/[^\+\d]/g,""),/^\+?(\d){0,18}$/g.test(t.value)||(t.value=t.value.substring(0,t.value.length-1))),"name"===t.name&&(t.value=t.value.replace(/[^а-я ]/gi,""))})),e.addEventListener("submit",(function(c){if(c.preventDefault(),"card_order"!==c.target.id){var a=d(c.target.elements).filter((function(e){return"radio"===e.type}));if(a.length>1){if(!1===a[0].checked&&!1===a[1].checked)return l(a[0]),void l(a[1]);var i=document.querySelector(".error");i&&i.remove()}}var u=d(c.target.elements).filter((function(e){return"checkbox"===e.type}));if(u.length>=1){if(!1===u[0].checked)return void l(u[0]);var s=document.querySelector(".error");s&&s.remove()}var y=e.querySelectorAll("input"),p=d(c.target.elements).filter((function(e){return"phone"===e.name}));if(p[0].value.replace("+","").length<11)return p[0].setAttribute("style","border: 2px solid red"),void("banner-form"!==c.target.id&&function(e){var t=document.querySelector(".error1");t&&t.remove();e.parentNode.insertAdjacentHTML("afterend",'<p class="error1" style="color: red;">Введите минимум 11 цифр!</p>')}(p[0]));p[0].setAttribute("style","border: none");var m=document.querySelector(".error1");m&&(m.textContent=""),t.style.display="block";var v,h={},b=function(e){if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=f(e))){var t=0,n=function(){};return{s:n,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,r,l=!0,c=!1;return{s:function(){o=e[Symbol.iterator]()},n:function(){var e=o.next();return l=e.done,e},e:function(e){c=!0,r=e},f:function(){try{l||null==o.return||o.return()}finally{if(c)throw r}}}}(new FormData(e).entries());try{for(b.s();!(v=b.n()).done;){var g=v.value;h[g[0]]=g[1]}}catch(e){b.e(e)}finally{b.f()}(function(e){return fetch("./server.php",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e),credentials:"include"})})(h).then((function(e){if(200!==e.status)throw new Error("status network not 200");t.style.display="none",n.style.display="block",r.innerHTML='<h4>Спасибо!</h4>\n                <p>Ваша заявка отправлена. <br> Мы свяжемся с вами в ближайшее время.</p>\n                <button class="btn close-btn">OK</button>',y.forEach((function(e){e.textContent="","card_leto_mozaika"===e.id||"m3"===e.id?(e.checked=!0,o.textContent="1999"):e.checked&&(e.checked=!1)})),n.addEventListener("click",(function(e){var t=e.target;t.classList.contains("close_icon")||t.classList.contains("close-btn")?(n.style.display="none",document.querySelectorAll(".popup").forEach((function(e){e.style.display="none"}))):(t=t.closest(".popup-content"))||(n.style.display="none",document.querySelectorAll(".popup").forEach((function(e){e.style.display="none"})))}))})).catch((function(){t.style.display="none",n.style.display="block",r.innerHTML='<h4>Ошибка!</h4>\n                    <p>Ваша заявка не отправлена. <br> Попробуйте еще раз</p>\n                    <button class="btn close-btn">OK</button>',y.forEach((function(e){"card_leto_mozaika"===e.id||"m1"===e.id?(e.checked=!0,o.textContent="1999"):e.checked&&(e.checked=!1)})),n.addEventListener("click",(function(e){var t=e.target;t.classList.contains("close_icon")||t.classList.contains("close-btn")?(n.style.display="none",document.querySelectorAll(".popup").forEach((function(e){e.style.display="none"}))):(t=t.closest(".popup-content"))||(n.style.display="none",document.querySelectorAll(".popup").forEach((function(e){e.style.display="none"})))}))}))}))}))},m=function(){var e=document.querySelectorAll(".photo-item"),t=(document.querySelectorAll,document.querySelector(".contain")),n=document.querySelectorAll(".dot");n[0].classList.add("active");var o=function(e,t,n){e[t].classList.remove(n)},r=function(e,t,n){e[t].classList.add(n)},l=0;t.addEventListener("click",(function(t){t.preventDefault();var c=t.target;c.matches(".port, .dot")&&(o(e,l,"item-active"),o(n,l,"active"),c.matches("#arrow-right")?l++:c.matches("#arrow-left")?l--:c.matches(".dot")&&n.forEach((function(e,t){c===e&&(l=t)})),l>=e.length&&(l=0),l<0&&(l=e.length-1),r(e,l,"item-active"),r(n,l,"active"))}))};function v(e){if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=function(e,t){if(!e)return;if("string"==typeof e)return h(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return h(e,t)}(e))){var t=0,n=function(){};return{s:n,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,r,l=!0,c=!1;return{s:function(){o=e[Symbol.iterator]()},n:function(){var e=o.next();return l=e.done,e},e:function(e){c=!0,r=e},f:function(){try{l||null==o.return||o.return()}finally{if(c)throw r}}}}function h(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}var b=function(){var e,t=document.getElementById("services"),n=t.querySelector(".prev"),o=t.querySelector(".next"),r=t.querySelector(".services-slider"),l=t.querySelector(".services-slider").children,c=0,a=v(l);try{for(a.s();!(e=a.n()).done;){e.value.setAttribute("style","flex:0 0 20%; margin:0 auto !important;")}}catch(e){a.e(e)}finally{a.f()}o.addEventListener("click",(function(){c<5&&(++c,r.style.transform="translateX(-".concat(20*c,"%)"))})),n.addEventListener("click",(function(){c>0&&(--c,r.style.transform="translateX(-".concat(20*c,"%)"))}))};(function(){var e=document.querySelector(".club-select"),t=e.querySelector("ul");e.addEventListener("click",(function(){"block"!==t.style.display?t.style.display="block":t.style.display="none"}))})(),u(),o(),r(),l(),c(),p(),m(),s(),b()}]);