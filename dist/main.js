!function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);var r=()=>{const e=document.querySelector(".header-contacts__arrow img"),t=document.querySelector(".header-contacts__phone-number-accord"),n=t.querySelector(".header-contacts__phone-number");e.parentNode.addEventListener("click",r=>{const i=+n.style.opacity;let l="30px",o="rotate(180deg)";e.style.transition="transform .5s",i?(o="rotate(0deg)",l="0",(e=>{e.style.opacity=0})(n)):n.style.opacity=1,t.style.top=l,e.style.transform=o})};const i=document.querySelector(".menu__icon"),l=document.querySelector(".popup-menu"),o=document.querySelector(".popup-dialog-menu"),c=document.querySelector(".button-footer");o.style.visibility="hidden";const s=(e,t,n,r,i)=>{const l=t-e;let o=l/n;o=Math.min(o,1);const c=(a=o)*a*a;var a;window.scroll(0,i+r*c),l<n&&requestAnimationFrame(t=>{const l=t||(new Date).getTime();s(e,l,n,r,i)})},a=()=>{l.style.paddingRight="10px",o.style.transform=document.documentElement.clientWidth<576?"translate3d(0,-100%,0)":"translate3d(100%,0,0)",l.removeAttribute("style"),o.removeAttribute("style"),o.style.visibility="hidden",l.style.visibility="hidden"},u=e=>{const t=document.getElementById(e.href.split("#")[1]);requestAnimationFrame(e=>{const n=e||(new Date).getTime(),r=n,i=window.pageYOffset,l=t.getBoundingClientRect().top;s(r,n,1200,l,i)})},d=e=>{e.preventDefault();const t=e.target;t.closest(".close-menu, .menu__icon, .menu-link")&&("visible"===l.style.visibility?a():(l.style.paddingRight=0,o.style.transform="translate3d(0,0,0)",o.style.visibility="visible",l.style.visibility="visible"),t.closest(".popup-menu-nav__item")&&u(t))},y=e=>{e.preventDefault(),u(e.target)};var p=()=>{o.addEventListener("click",d),i.addEventListener("click",d),c.addEventListener("click",y)};const v=document.querySelector(".link-list-menu .menu-link"),m=document.querySelector(".repair-types .repair-types-tab"),f=document.querySelector(".popup-repair-types"),b=()=>{f.style.visibility="visible"},g=e=>{e.target.matches(".close")&&(f.style.visibility="hidden")},h=e=>{e.target.matches(".link-list-repair a")&&b()};var _=()=>{v.addEventListener("click",b),m.addEventListener("click",h),f.addEventListener("click",g)};const S=document.querySelectorAll('[name="phone"]');var E=()=>{S.forEach(e=>{!function(e,t,n="+7 (___) ___-__-__"){function r(e){const t=e.keyCode,r=n,i=r.replace(/\D/g,""),l=this.value.replace(/\D/g,"");let o=0,c=r.replace(/[_\d]/g,(function(e){return o<l.length?l.charAt(o++)||i.charAt(o):e}));o=c.indexOf("_"),-1!=o&&(c=c.slice(0,o));let s=r.substr(0,this.value.length).replace(/_+/g,(function(e){return"\\d{1,"+e.length+"}"})).replace(/[+()]/g,"\\$&");s=new RegExp("^"+s+"$"),(!s.test(this.value)||this.value.length<5||t>47&&t<58)&&(this.value=c),"blur"==e.type&&this.value.length<5&&(this.value="")}e||(e=document.querySelector(t)),e.addEventListener("input",r),e.addEventListener("focus",r),e.addEventListener("blur",r)}(e)})};const q=document.querySelectorAll(".link-privacy"),k=document.querySelector(".popup-privacy"),L=()=>{k.style.visibility="visible"},w=e=>{e.target.matches(".close")&&(k.style.visibility="hidden")};var x=()=>{q.forEach(e=>{e.addEventListener("click",L),k.addEventListener("click",w)})};r(),p(),_(),E(),x()}]);