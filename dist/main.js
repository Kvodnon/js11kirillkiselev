!function(e){var t={};function n(i){if(t[i])return t[i].exports;var r=t[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(i,r,function(t){return e[t]}.bind(null,r));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/dist",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);var i=function(){var e=document.querySelector(".header-contacts__arrow img"),t=document.querySelector(".header-contacts__phone-number-accord"),n=t.querySelector(".header-contacts__phone-number");e.parentNode.addEventListener("click",(function(i){var r=+n.style.opacity,o="30px",s="rotate(180deg)";e.style.transition="transform .5s",r?(s="rotate(0deg)",o="0",function(e){e.style.opacity=0}(n)):n.style.opacity=1,t.style.top=o,e.style.transform=s}))},r=document.querySelector(".menu__icon"),o=document.querySelector(".popup-menu"),s=document.querySelector(".popup-dialog-menu"),l=document.querySelector(".button-footer");s.style.visibility="hidden";var a=function(){o.style.paddingRight="10px",s.style.transform=document.documentElement.clientWidth<576?"translate3d(0,-100%,0)":"translate3d(100%,0,0)",o.removeAttribute("style"),s.removeAttribute("style"),s.style.visibility="hidden",o.style.visibility="hidden"},c=function(e){var t=document.getElementById(e.href.split("#")[1]);requestAnimationFrame((function(e){var n=e||(new Date).getTime(),i=n,r=window.pageYOffset;!function e(t,n,i,r,o){var s=n-t,l=s/i;l=Math.min(l,1);var a,c=(a=l)*a*a;window.scroll(0,o+r*c),s<i&&requestAnimationFrame((function(n){var s=n||(new Date).getTime();e(t,s,i,r,o)}))}(i,n,1200,t.getBoundingClientRect().top,r)}))},d=function(e){e.preventDefault();var t=e.target;t.closest(".close-menu, .menu__icon, .menu-link")&&("visible"===o.style.visibility?a():(o.style.paddingRight=0,s.style.transform="translate3d(0,0,0)",s.style.visibility="visible",o.style.visibility="visible"),t.closest(".popup-menu-nav__item")&&c(t))},u=function(e){e.preventDefault(),c(e.target)},p=function(){s.addEventListener("click",d),r.addEventListener("click",d),l.addEventListener("click",u)};var h=document.querySelectorAll('[name="phone"]'),v=function(){h.forEach((function(e){!function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"+7 (___) ___-__-__";function i(e){var t=e.keyCode,i=n,r=i.replace(/\D/g,""),o=this.value.replace(/\D/g,""),s=0,l=i.replace(/[_\d]/g,(function(e){return s<o.length?o.charAt(s++)||r.charAt(s):e}));-1!=(s=l.indexOf("_"))&&(l=l.slice(0,s));var a=i.substr(0,this.value.length).replace(/_+/g,(function(e){return"\\d{1,"+e.length+"}"})).replace(/[+()]/g,"\\$&");(!(a=new RegExp("^"+a+"$")).test(this.value)||this.value.length<5||t>47&&t<58)&&(this.value=l),"blur"==e.type&&this.value.length<5&&(this.value="")}e||(e=document.querySelector(t)),e.addEventListener("input",i),e.addEventListener("focus",i),e.addEventListener("blur",i)}(e)}))},f=document.querySelectorAll(".popup"),m=function(e){e.classList.add("modal_open"),document.body.style.overflowY="hidden"},y=function(e){var t=e.target;t.matches(".close, .popup")&&function(e){e.closest(".popup").classList.remove("modal_open"),document.body.style.overflowY="auto"}(t)},b=function(){var e=!0,t=!1,n=void 0;try{for(var i,r=f[Symbol.iterator]();!(e=(i=r.next()).done);e=!0){i.value.addEventListener("click",y)}}catch(e){t=!0,n=e}finally{try{e||null==r.return||r.return()}finally{if(t)throw n}}},w=document.querySelector(".popup-thank"),S=m.bind(null,w),g=function(){},_=document.querySelectorAll(".feedback__form, .feedback-block__form"),x=function(e){e.preventDefault();var t=e.target;if(t.querySelector(".checkbox__input").checked){var n=new FormData(t),i={};n.forEach((function(e,t){i[t]=e})),function(e){return fetch("./server.php",{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify(e)})}(i).then((function(e){if(200!==e.status)throw new Error(e.statusText);S()}),(function(e){console.log(e)})),t.reset()}else alert("Отметьте галочку!")},E=function(){_.forEach((function(e){var t=e.querySelector(".checkbox__input"),n=e.querySelector('[name="phone"]');t.removeAttribute("required"),n.required=!0,e.addEventListener("submit",x)}))},L=document.querySelector(".formula .wrapper_small"),k=function(e){var t=e.target;if(t.matches(".formula-item__icon-inner-text")){var n=t.previousElementSibling.previousElementSibling;"mouseout"===e.type?function(e){var t=e.closest(".formula-item");e.classList.remove("tooltip_reverse"),t.classList.remove("formula-item_cover")}(n):function(e){if(e.getBoundingClientRect().y<0){var t=e.closest(".formula-item");e.classList.add("tooltip_reverse"),t.classList.add("formula-item_cover")}}(n)}},T=function(){L.addEventListener("mouseover",k),L.addEventListener("mouseout",k)},q=document.querySelector(".formula-slider-wrap"),A=document.querySelector(".formula-slider"),C=document.getElementsByClassName("formula-slider__slide"),O="formula-prev-slide",j=function(){return document.documentElement.clientWidth<768?1:3},B=j(),M=(j(),function(){return A.insertBefore(C[C.length-1],C[0])}),P=function(){B=j();var e=!0,t=!1,n=void 0;try{for(var i,r=C[Symbol.iterator]();!(e=(i=r.next()).done);e=!0){var o=i.value;3===B?o.classList.remove("formula-one-slide"):o.classList.add("formula-one-slide")}}catch(e){t=!0,n=e}finally{try{e||null==r.return||r.return()}finally{if(t)throw n}}},I=function(e){var t=e.target;t.closest("#formula-arrow_right")?function(){A.appendChild(C[0]).classList.remove(O),C[0].classList.add(O);var e=C[0],t=C[1];3===B&&(e=C[1],t=C[2]),e.classList.remove("formula-slider_active"),t.classList.add("formula-slider_active")}():t.closest("#formula-arrow_left")&&function(){C[0].classList.remove(O);var e=C[1],t=C[0];3===B&&(t=C[1],e=C[2]),t.classList.add("formula-slider_active"),e.classList.remove("formula-slider_active"),M().classList.add(O)}()},N=function(){!function(){M(),3===B&&M(),C[0].classList.add(O);var e=C[1],t=!0,n=!1,i=void 0;try{for(var r,o=C[Symbol.iterator]();!(t=(r=o.next()).done);t=!0){var s=r.value;1===B&&s.classList.add("formula-one-slide")}}catch(e){n=!0,i=e}finally{try{t||null==o.return||o.return()}finally{if(n)throw i}}3===B&&(e=C[2]),e.classList.add("formula-slider_active")}(),q.addEventListener("click",I),window.addEventListener("resize",P)},W=document.querySelectorAll(".button_wide"),D=document.querySelector(".popup-consultation"),z=function(){W.forEach((function(e){e.addEventListener("click",m.bind(null,D))}))},H=document.querySelectorAll(".link-privacy"),R=document.querySelector(".popup-privacy"),Y=function(){H.forEach((function(e){e.addEventListener("click",m.bind(null,R))}))};function F(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function G(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var $=function(){function e(t){var n=t.main,i=t.wrap,r=t.next,o=t.prev,s=t.tabs,l=t.hideArrow,a=void 0!==l&&l,c=t.tabClass,d=void 0===c?"glo-tab":c,u=t.slideBy,p=void 0===u?"X":u,h=t.infinity,v=void 0!==h&&h,f=t.position,m=void 0===f?0:f,y=t.slidesToShow,b=void 0===y?3:y,w=t.responsive,S=void 0===w?[]:w,g=t.numberSlider,_=void 0===g?1:g;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),n||i||console.warn('slider-carousel: Необходимо 2 свойства, "main" и "wrap"!'),this.main=document.querySelector(n),this.wrap=document.querySelector(i),this.slides=document.querySelector(i).children,this.first=this.slides[0],this.next=document.querySelector(r),this.prev=document.querySelector(o),this.slidesToShow=b,this.options={position:m,infinity:v,widthSlide:Math.floor(100/this.slidesToShow),maxPosition:this.slides.length-this.slidesToShow},this.responsive=S,this.numberSlider=_,this.event=new Event("sliderChange"),this.tabEvent=new Event("tabChange"),this.tabs=document.querySelector(s),this.tabClass=d,this.slideBy=p.toUpperCase(),this.hideArrow=a,this.callbacks={},this.callbacks.prev={},this.callbacks.next={}}var t,n,i;return t=e,(n=[{key:"init",value:function(){this.addGloClass(),this.addStyle(),this.prev||this.next||this.tabs||this.addArrow(),this.tabs?this.tabSlider():this.controlSlider(),this.responsiveInit()}},{key:"addGloClass",value:function(){this.wrap.classList.add("glo-slider".concat(this.numberSlider)),this.main.classList.add("glo-wrap");var e=!0,t=!1,n=void 0;try{for(var i,r=this.slides[Symbol.iterator]();!(e=(i=r.next()).done);e=!0)i.value.classList.add("glo-slider__item")}catch(e){t=!0,n=e}finally{try{e||null==r.return||r.return()}finally{if(t)throw n}}}},{key:"addStyle",value:function(){this.style=document.getElementById("sliderCarousel-style".concat(this.numberSlider)),this.style||(this.style=document.createElement("style"),this.style.id="sliderCarousel-style".concat(this.numberSlider)),this.style.textContent="\n      .glo-wrap .glo-slider".concat(this.numberSlider," {\n        display: flex;\n        ").concat("Y"===this.slideBy?"flex-wrap: wrap;":"flex-wrap: nowrap;","\n      }\n      .glo-slider").concat(this.numberSlider," > .glo-slider__item {\n        max-width: none;\n        flex: 0 0 ").concat(this.options.widthSlide,"%;\n        align-items: center;\n        margin: auto 0;\n        transition: margin-left .5s, top .5s; \n        will-change: margin-left, top;\n        position: relative;\n        top: 0;\n        height: 100%;\n      }\n    "),document.head.appendChild(this.style)}},{key:"removeStyle",value:function(){this.style.remove(),this.style=null}},{key:"controlSlider",value:function(){this.callbacks.prev=this.prevSlider.bind(this),this.callbacks.next=this.nextSlider.bind(this),this.prev.addEventListener("click",this.callbacks.prev),this.next.addEventListener("click",this.callbacks.next)}},{key:"removeControl",value:function(){this.prev.removeEventListener("click",this.callbacks.prev),this.next.removeEventListener("click",this.callbacks.next)}},{key:"tabSlider",value:function(){var e=this,t=F(this.tabs.children);this.tabs.addEventListener("click",(function(n){var i=n.target;if(i.matches(".".concat(e.tabClass))){var r=document.querySelector(".".concat(e.tabClass,".active"));r&&r.classList.remove("active"),i.classList.add("active"),e.toSlide(t.indexOf(i))}}))}},{key:"toSlide",value:function(e){if(this.options.position=e,"Y"===this.slideBy){var t=!0,n=!1,i=void 0;try{for(var r,o=this.slides[Symbol.iterator]();!(t=(r=o.next()).done);t=!0)r.value.style.top="-".concat(this.options.position*this.options.widthSlide,"%")}catch(e){n=!0,i=e}finally{try{t||null==o.return||o.return()}finally{if(n)throw i}}}else this.first.style.marginLeft="-".concat(this.options.position*this.options.widthSlide,"%");this.main.dispatchEvent(this.tabEvent),this.wrap.dispatchEvent(this.tabEvent)}},{key:"prevSlider",value:function(){(this.options.infinity||this.options.position>0)&&(--this.options.position,this.options.position<0&&(this.options.position=this.options.maxPosition),this.toSlide(this.options.position)),!this.options.infinity&&this.hideArrow&&(0===this.options.position&&this.options.position!==this.options.maxPosition?this.prev.style.display="none":(this.prev.style.display="flex",this.next.style.display="flex")),this.main.dispatchEvent(this.event),this.wrap.dispatchEvent(this.event)}},{key:"nextSlider",value:function(){(this.options.infinity||this.options.position<this.options.maxPosition)&&(++this.options.position,this.options.position>this.options.maxPosition&&(this.options.position=0),this.toSlide(this.options.position)),!this.options.infinity&&this.hideArrow&&(this.options.position===this.options.maxPosition&&0!==this.options.position?this.next.style.display="none":(this.next.style.display="flex",this.prev.style.display="flex")),this.main.dispatchEvent(this.event),this.wrap.dispatchEvent(this.event)}},{key:"addArrow",value:function(){this.prev=document.createElement("button"),this.next=document.createElement("button"),this.prev.className="glo-slider__prev",this.next.className="glo-slider__next",this.main.appendChild(this.prev),this.main.appendChild(this.next);var e=document.createElement("style");e.textContent="\n      .glo-slider__prev,\n      .glo-slider__next {\n        margin: 0 10px;\n        border: 20px solid transparent;\n        background: transparent;\n      }\n\n      .glo-slider__next {\n        border-left-color: #19b5fe;\n      }\n\n      .glo-slider__prev {\n        border-right-color: #19b5fe;\n      }\n\n      .glo-slider__prev:hover,\n      .glo-slider__prev:focus,\n      .glo-slider__next:hover,\n      .glo-slider__next:focus {\n        background: transparent;\n        outline: transparent;\n      }\n    ",document.head.appendChild(e)}},{key:"responsiveInit",value:function(){var e=this,t=this.slidesToShow,n=this.responsive.map((function(e){return e.breakpoint})),i=Math.max.apply(Math,F(n)),r=function(){var r=document.documentElement.clientWidth;if(r<i)for(var o=0;o<n.length;o++)r<n[o]&&(e.slidesToShow=e.responsive[o].slideToShow,e.options.widthSlide=Math.floor(100/e.slidesToShow),e.addStyle());else e.slidesToShow=t,e.options.widthSlide=Math.floor(100/e.slidesToShow),e.addStyle()};r(),window.addEventListener("resize",r)}}])&&G(t.prototype,n),i&&G(t,i),e}(),J={num:0,get count(){return this.num++,this.num}};function U(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var X,K,Q=document.querySelector(".link-list-menu .menu-link"),V=document.querySelector(".repair-types .repair-types-tab"),Z=document.querySelector(".popup-repair-types"),ee=document.querySelector(".repair-types-slider"),te=document.querySelector("#repair-counter .slider-counter-content__current"),ne=document.querySelector("#repair-counter .slider-counter-content__total"),ie=[],re=function(e){var t=e.target;if(t.matches(".link-list-repair a")&&m(Z),t.matches(".repair-types-nav__item ")){var n=!0,i=!1,r=void 0;try{for(var o,s=ie[Symbol.iterator]();!(n=(o=s.next()).done);n=!0){o.value.removeControl()}}catch(e){i=!0,r=e}finally{try{n||null==s.return||s.return()}finally{if(i)throw r}}var l=U(X.tabs.children),a=ie[l.indexOf(t)];a.controlSlider(),te.innerText=a.options.position+1,ne.innerText=a.slides.length}},oe=function(){Q.addEventListener("click",m.bind(null,Z)),V.addEventListener("click",re),function(){var e=ee.children,t=!0,n=!1,i=void 0;try{for(var r,o=function(){var e=r.value,t=new $({main:".repair-types-slider",wrap:".".concat(e.className),prev:"#repair-types-arrow_left",next:"#repair-types-arrow_right",numberSlider:J.count,slidesToShow:1});t.init(),t.removeControl(),ie.push(t),t.wrap.addEventListener("sliderChange",(function(){te.innerText=t.options.position+1}))},s=e[Symbol.iterator]();!(t=(r=s.next()).done);t=!0)o()}catch(e){n=!0,i=e}finally{try{t||null==s.return||s.return()}finally{if(n)throw i}}ie[0].controlSlider(),(X=new $({main:".repair-types-slider-wrap",wrap:".repair-types-slider",tabs:".nav-list-repair",tabClass:"repair-types-nav__item",slideBy:"y",numberSlider:J.count,slidesToShow:1})).init(),(K=new $({wrap:".nav-list-repair",main:".repair-types-nav",prev:"#nav-arrow-repair-left_base",next:"#nav-arrow-repair-right_base",numberSlider:J.count,slidesToShow:2,responsive:[{breakpoint:768,slideToShow:2},{breakpoint:576,slideToShow:1}]})).init();var l=function(){document.documentElement.clientWidth<1025?K.style||K.addStyle():document.documentElement.clientWidth>1024&&K.style&&K.removeStyle()};l(),window.addEventListener("resize",l)}()};function se(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var le,ae,ce=document.querySelector(".popup-transparency"),de=document.querySelector(".transparency-slider"),ue=ce.querySelector(".slider-counter-content__total"),pe=ce.querySelector(".slider-counter-content__current"),he=function(){var e=event.target;if(e.matches(".transparency-item__img")){var t=e.parentNode,n=se(de.children);le.toSlide(n.indexOf(t)),pe.innerText=le.options.position+1,m(ce)}},ve=function(){de.addEventListener("click",he),(le=new $({wrap:".popup-transparency-slider",main:".popup-transparency-slider-wrap",prev:"#transparency_left",next:"#transparency_right",numberSlider:J.count,slidesToShow:1})).init(),(ae=new $({wrap:".transparency-slider",main:".transparency-slider-wrap",prev:"#transparency-arrow_left",next:"#transparency-arrow_right",numberSlider:J.count,slidesToShow:1})).init();var e=function(){document.documentElement.clientWidth<1091?ae.style||ae.addStyle():document.documentElement.clientWidth>1090&&ae.style&&ae.removeStyle()};e(),ue.innerText=le.slides.length,le.main.addEventListener("sliderChange",(function(){pe.innerText=le.options.position+1})),window.addEventListener("resize",e)},fe=function(){var e=new $({wrap:".reviews-slider",main:".reviews-slider-wrap",prev:"#reviews-arrow_left",next:"#reviews-arrow_right",numberSlider:J.count,slidesToShow:1});e.init()},me=function(){new $({wrap:".partners-slider",main:"#partners .wrapper",prev:"#partners-arrow_left",next:"#partners-arrow_right",numberSlider:J.count,infinity:!0,slidesToShow:3,responsive:[{breakpoint:1024,slideToShow:3},{breakpoint:768,slideToShow:2},{breakpoint:576,slideToShow:1}]}).init()},ye=function(){var e=new $({main:".scheme-slider-wrap",wrap:".scheme-slider",tabs:"#scheme-list",tabClass:"scheme-nav__item",numberSlider:J.count,slidesToShow:1});e.init(),e.main.addEventListener("tabChange",(function(){var t=e.main.querySelectorAll(".scheme-description-block");e.main.querySelector(".scheme-description-block.visible-content-block").classList.remove("visible-content-block"),t.item(e.options.position).classList.add("visible-content-block")}))},be=document.querySelector(".accordion ul"),we=function(){var e=event.target;if(e.matches(".title_block")){var t=be.querySelector(".msg-active");e.classList.contains("msg-active")||e.classList.add("msg-active"),t&&t.classList.remove("msg-active")}},Se=function(){be.addEventListener("click",we)},ge=document.querySelector(".popup-repair-types-content__head-date"),_e=document.querySelector(".nav-list-popup-repair"),xe=document.getElementById("switch-inner"),Ee=document.querySelector(".popup-repair-types-content-table"),Le=function(e){var t="",n=!0,i=!1,r=void 0;try{for(var o,s=e.priceList[Symbol.iterator]();!(n=(o=s.next()).done);n=!0){var l=o.value;t+='\n      <tr class="mobile-row showHide">\n        <td class="repair-types-name">'.concat(l.typeService,'</td>\n        <td class="mobile-col-title tablet-hide desktop-hide">Ед.измерения</td>\n        <td class="mobile-col-title tablet-hide desktop-hide">Цена за ед.</td>\n        <td class="repair-types-value">').concat(l.units,'</td>\n        <td class="repair-types-value">').concat(l.cost," руб.</td>\n      </tr>\n    ")}}catch(e){i=!0,r=e}finally{try{n||null==s.return||s.return()}finally{if(i)throw r}}return t},ke=function(e){!function(e){ge.innerText=e}(e.shift().date),function(e){_e.innerHTML="";var t=!0,n=!1,i=void 0;try{for(var r,o=e[Symbol.iterator]();!(t=(r=o.next()).done);t=!0){var s=r.value;_e.insertAdjacentHTML("beforeend",'\n      <button class="button_o popup-repair-types-nav__item">'.concat(s,"</button>\n    "))}}catch(e){n=!0,i=e}finally{try{t||null==o.return||o.return()}finally{if(n)throw i}}}(function(e){var t=[];return e.forEach((function(e){t.push(e.title)})),t}(e)),function(e){Ee.innerHTML="";var t=!0,n=!1,i=void 0;try{for(var r,o=e[Symbol.iterator]();!(t=(r=o.next()).done);t=!0){var s=r.value;Ee.insertAdjacentHTML("beforeend",'\n      <table class="popup-repair-types-content-table__list">\n        '.concat(Le(s),"\n      </table>\n    "))}}catch(e){n=!0,i=e}finally{try{t||null==o.return||o.return()}finally{if(n)throw i}}}(e),new $({main:".popup-repair-types-content-table-wrap",wrap:".popup-repair-types-content-table",tabs:".nav-list-popup-repair",tabClass:"popup-repair-types-nav__item",numberSlider:J.count,slidesToShow:1}).init()},Te=function(){var e=event.target;e.matches("button")&&(xe.innerText=e.innerText)},qe=function(){fetch("./db/db.json").then((function(e){if(200!==e.status)throw new Error(e.statusText);return e.json()}),(function(e){messageStatus.src=messages.error,console.error(e)})).then(ke),_e.addEventListener("click",Te)};function Ae(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var Ce,Oe=document.querySelector(".popup-portfolio"),je=document.querySelector(".portfolio-slider"),Be=document.querySelector("#portfolio-counter .slider-counter-content__current"),Me=document.querySelector("#portfolio-counter .slider-counter-content__total"),Pe=document.querySelectorAll(".popup-portfolio .popup-portfolio-text"),Ie=function(e){var t=e.target,n=t.parentNode,i=Ae(n.children),r=Ae(n.parentNode.children),o=document.querySelector("#popup-portfolio-counter .slider-counter-content__current");if(t.matches(".portfolio-slider__slide-frame, .item-hover")){if(t.matches(".portfolio-slider__slide-frame")){var s=2*r.indexOf(n)+i.indexOf(t);o.innerText=s+1,Ce.toSlide(s)}if(t.matches(".item-hover")){var l=(i=Ae(n.parentNode.children)).indexOf(n);o.innerText=l+1,Ce.toSlide(l)}document.querySelector(".popup-portfolio-text.active").classList.remove("active"),Pe[Ce.options.position].classList.add("active"),m(Oe)}},Ne=function(){(Ce=new $({wrap:".popup-portfolio-slider",main:".popup-portfolio-slider-wrap",prev:"#popup_portfolio_left",next:"#popup_portfolio_right",numberSlider:J.count,slidesToShow:1})).init(),document.querySelector("#popup-portfolio-counter .slider-counter-content__total").innerText=Ce.slides.length,Pe[0].classList.add("active"),new $({wrap:".portfolio-slider",main:".portfolio-slider-wrap",prev:"#portfolio-arrow_left",next:"#portfolio-arrow_right",hideArrow:!0,numberSlider:J.count,slidesToShow:3,responsive:[{breakpoint:1030,slideToShow:3},{breakpoint:1024,slideToShow:2},{breakpoint:901,slideToShow:1}]}).init();var e=new $({wrap:".portfolio-slider-mobile",main:".portfolio-slider-wrap",prev:"#portfolio-arrow-mobile_left",next:"#portfolio-arrow-mobile_right",numberSlider:J.count,slidesToShow:1});e.init(),e.main.addEventListener("click",Ie),e.main.addEventListener("sliderChange",(function(){Be.innerText=e.options.position+e.slidesToShow})),Me.innerText=e.slides.length,je.addEventListener("click",Ie),Ce.main.addEventListener("sliderChange",(function(){var t=document.querySelector("#popup-portfolio-counter .slider-counter-content__current");t.innerText=Ce.options.position+Ce.slidesToShow,document.querySelector(".popup-portfolio-text.active").classList.remove("active"),Pe[Ce.options.position].classList.add("active"),e.toSlide(Ce.options.position),(t=document.querySelector("#portfolio-counter .slider-counter-content__current")).innerText=Ce.options.position+Ce.slidesToShow}))};function We(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var De,ze,He=document.querySelector(".designs-slider"),Re=document.querySelector("#designs-counter .slider-counter-content__current"),Ye=document.getElementById("designs-list"),Fe=document.querySelector("#designs-counter .slider-counter-content__total"),Ge=[],$e=function(e){var t=e.target;if(t.matches(".designs-nav__item")){var n=!0,i=!1,r=void 0;try{for(var o,s=Ge[Symbol.iterator]();!(n=(o=s.next()).done);n=!0){o.value.removeControl()}}catch(e){i=!0,r=e}finally{try{n||null==s.return||s.return()}finally{if(i)throw r}}var l=We(De.tabs.children),a=Ge[l.indexOf(t)];a.controlSlider(),Re.innerText=a.options.position+1,Fe.innerText=a.slides.length}},Je=function(){var e=He.children,t=!0,n=!1,i=void 0;try{for(var r,o=function(){var e=r.value,t=new $({main:".repair-types-slider",wrap:".".concat(e.className),prev:"#design_left",next:"#design_right",numberSlider:J.count,slidesToShow:1});t.init(),t.removeControl(),Ge.push(t),t.wrap.addEventListener("sliderChange",(function(){Re.innerText=t.options.position+1}))},s=e[Symbol.iterator]();!(t=(r=s.next()).done);t=!0)o()}catch(e){n=!0,i=e}finally{try{t||null==s.return||s.return()}finally{if(n)throw i}}Ge[0].controlSlider(),(De=new $({main:".designs-slider-wrap",wrap:".designs-slider",tabs:"#designs-list",tabClass:"designs-nav__item",slideBy:"y",numberSlider:J.count,slidesToShow:1})).init(),Ye.addEventListener("click",$e),(ze=new $({wrap:"#designs-list",main:".nav-designs",prev:"#nav-arrow-designs_left",next:"#nav-arrow-designs_right",numberSlider:J.count,slidesToShow:2,responsive:[{breakpoint:768,slideToShow:2},{breakpoint:576,slideToShow:1}]})).init();var l=function(){document.documentElement.clientWidth<1025?ze.style||ze.addStyle():document.documentElement.clientWidth>1024&&ze.style&&ze.removeStyle()};l(),window.addEventListener("resize",l)};i(),b(),p(),v(),Y(),g(),E(),T(),N(),fe(),me(),oe(),z(),ve(),ye(),Se(),qe(),Ne(),Je()}]);