!function(e){var t={};function n(i){if(t[i])return t[i].exports;var r=t[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(i,r,function(t){return e[t]}.bind(null,r));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/dist",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);var i=function(){var e=document.querySelector(".header-contacts__arrow img"),t=document.querySelector(".header-contacts__phone-number-accord"),n=t.querySelector(".header-contacts__phone-number");e.parentNode.addEventListener("click",(function(i){var r=+n.style.opacity,o="30px",s="rotate(180deg)";e.style.transition="transform .5s",r?(s="rotate(0deg)",o="0",function(e){e.style.opacity=0}(n)):n.style.opacity=1,t.style.top=o,e.style.transform=s}))},r=document.querySelector(".menu__icon"),o=document.querySelector(".popup-menu"),s=document.querySelector(".popup-dialog-menu"),a=document.querySelector(".button-footer");s.style.visibility="hidden";var l=function(){o.style.paddingRight="10px",s.style.transform=document.documentElement.clientWidth<576?"translate3d(0,-100%,0)":"translate3d(100%,0,0)",o.removeAttribute("style"),s.removeAttribute("style"),s.style.visibility="hidden",o.style.visibility="hidden"},c=function(e){var t=document.getElementById(e.href.split("#")[1]);requestAnimationFrame((function(e){var n=e||(new Date).getTime(),i=n,r=window.pageYOffset;!function e(t,n,i,r,o){var s=n-t,a=s/i;a=Math.min(a,1);var l,c=(l=a)*l*l;window.scroll(0,o+r*c),s<i&&requestAnimationFrame((function(n){var s=n||(new Date).getTime();e(t,s,i,r,o)}))}(i,n,1200,t.getBoundingClientRect().top,r)}))},d=function(e){e.preventDefault();var t=e.target;t.closest(".close-menu, .menu__icon, .menu-link")&&("visible"===o.style.visibility?l():(o.style.paddingRight=0,s.style.transform="translate3d(0,0,0)",s.style.visibility="visible",o.style.visibility="visible"),t.closest(".popup-menu-nav__item")&&c(t))},u=function(e){e.preventDefault(),c(e.target)},p=function(){s.addEventListener("click",d),r.addEventListener("click",d),a.addEventListener("click",u)};var h=document.querySelectorAll('[name="phone"]'),m=function(){h.forEach((function(e){!function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"+7 (___) ___-__-__";function i(e){var t=e.keyCode,i=n,r=i.replace(/\D/g,""),o=this.value.replace(/\D/g,""),s=0,a=i.replace(/[_\d]/g,(function(e){return s<o.length?o.charAt(s++)||r.charAt(s):e}));-1!=(s=a.indexOf("_"))&&(a=a.slice(0,s));var l=i.substr(0,this.value.length).replace(/_+/g,(function(e){return"\\d{1,"+e.length+"}"})).replace(/[+()]/g,"\\$&");(!(l=new RegExp("^"+l+"$")).test(this.value)||this.value.length<5||t>47&&t<58)&&(this.value=a),"blur"==e.type&&this.value.length<5&&(this.value="")}e||(e=document.querySelector(t)),e.addEventListener("input",i),e.addEventListener("focus",i),e.addEventListener("blur",i)}(e)}))},v=document.querySelectorAll(".popup"),f=function(e){e.classList.add("modal_open")},y=function(e){var t=e.target;t.matches(".close")&&function(e){e.closest(".popup").classList.remove("modal_open")}(t)},b=function(){var e=!0,t=!1,n=void 0;try{for(var i,r=v[Symbol.iterator]();!(e=(i=r.next()).done);e=!0){i.value.addEventListener("click",y)}}catch(e){t=!0,n=e}finally{try{e||null==r.return||r.return()}finally{if(t)throw n}}},S=document.querySelector(".popup-thank"),g=f.bind(null,S),w=function(){},_=document.querySelectorAll(".feedback__form, .feedback-block__form"),E=function(e){e.preventDefault();var t=e.target;if(t.querySelector(".checkbox__input").checked){var n=new FormData(t),i={};n.forEach((function(e,t){i[t]=e})),function(e){return fetch("./server.php",{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify(e)})}(i).then((function(e){if(200!==e.status)throw new Error(e.statusText);g()}),(function(e){console.log(e)})),t.reset()}else alert("Отметьте галочку!")},x=function(){_.forEach((function(e){var t=e.querySelector(".checkbox__input"),n=e.querySelector('[name="phone"]');t.removeAttribute("required"),n.required=!0,e.addEventListener("submit",E)}))},L=document.querySelector(".formula .wrapper_small"),k=function(e){var t=e.target;if(t.matches(".formula-item__icon-inner-text")){var n=t.previousElementSibling.previousElementSibling;"mouseout"===e.type?function(e){var t=e.closest(".formula-item");e.classList.remove("tooltip_reverse"),t.classList.remove("formula-item_cover")}(n):function(e){if(e.getBoundingClientRect().y<0){var t=e.closest(".formula-item");e.classList.add("tooltip_reverse"),t.classList.add("formula-item_cover")}}(n)}},q=function(){L.addEventListener("mouseover",k),L.addEventListener("mouseout",k)},T=document.querySelector(".formula-slider-wrap"),C=document.querySelector(".formula-slider"),A=document.getElementsByClassName("formula-slider__slide"),O="formula-prev-slide",j=function(){return document.documentElement.clientWidth<768?1:3},B=j(),P=(j(),function(){return C.insertBefore(A[A.length-1],A[0])}),M=function(){B=j();var e=!0,t=!1,n=void 0;try{for(var i,r=A[Symbol.iterator]();!(e=(i=r.next()).done);e=!0){var o=i.value;3===B?o.classList.remove("formula-one-slide"):o.classList.add("formula-one-slide")}}catch(e){t=!0,n=e}finally{try{e||null==r.return||r.return()}finally{if(t)throw n}}},D=function(e){var t=e.target;t.closest("#formula-arrow_right")?function(){C.appendChild(A[0]).classList.remove(O),A[0].classList.add(O);var e=A[0],t=A[1];3===B&&(e=A[1],t=A[2]),e.classList.remove("formula-slider_active"),t.classList.add("formula-slider_active")}():t.closest("#formula-arrow_left")&&function(){A[0].classList.remove(O);var e=A[1],t=A[0];3===B&&(t=A[1],e=A[2]),t.classList.add("formula-slider_active"),e.classList.remove("formula-slider_active"),P().classList.add(O)}()},N=function(){!function(){P(),3===B&&P(),A[0].classList.add(O);var e=A[1],t=!0,n=!1,i=void 0;try{for(var r,o=A[Symbol.iterator]();!(t=(r=o.next()).done);t=!0){var s=r.value;1===B&&s.classList.add("formula-one-slide")}}catch(e){n=!0,i=e}finally{try{t||null==o.return||o.return()}finally{if(n)throw i}}3===B&&(e=A[2]),e.classList.add("formula-slider_active")}(),T.addEventListener("click",D),window.addEventListener("resize",M)},I=document.querySelectorAll(".button_wide"),R=document.querySelector(".popup-consultation"),F=function(){I.forEach((function(e){e.addEventListener("click",f.bind(null,R))}))},W=document.querySelectorAll(".link-privacy"),z=document.querySelector(".popup-privacy"),G=function(){W.forEach((function(e){e.addEventListener("click",f.bind(null,z))}))};function Y(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function $(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var J=function(){function e(t){var n=t.main,i=t.wrap,r=t.next,o=t.prev,s=t.tabs,a=t.tabClass,l=void 0===a?"glo-tab":a,c=t.slideBy,d=void 0===c?"X":c,u=t.infinity,p=void 0!==u&&u,h=t.position,m=void 0===h?0:h,v=t.slidesToShow,f=void 0===v?3:v,y=t.responsive,b=void 0===y?[]:y,S=t.numberSlider,g=void 0===S?1:S;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),n||i||console.warn('slider-carousel: Необходимо 2 свойства, "main" и "wrap"!'),this.main=document.querySelector(n),this.wrap=document.querySelector(i),this.slides=document.querySelector(i).children,this.next=document.querySelector(r),this.prev=document.querySelector(o),this.slidesToShow=f,this.options={position:m,infinity:p,widthSlide:Math.floor(100/this.slidesToShow),maxPosition:this.slides.length-this.slidesToShow},this.responsive=b,this.numberSlider=g,this.event=new Event("sliderChange"),this.tabEvent=new Event("tabChange"),this.tabs=document.querySelector(s),this.tabClass=l,this.slideBy=d.toUpperCase()}var t,n,i;return t=e,(n=[{key:"init",value:function(){this.addGloClass(),this.addStyle(),this.prev||this.next||this.tabs||this.addArrow(),this.tabs?this.tabSlider():this.controlSlider(),this.responsiveInit()}},{key:"addGloClass",value:function(){this.wrap.classList.add("glo-slider".concat(this.numberSlider)),this.main.classList.add("glo-wrap");var e=!0,t=!1,n=void 0;try{for(var i,r=this.slides[Symbol.iterator]();!(e=(i=r.next()).done);e=!0)i.value.classList.add("glo-slider__item")}catch(e){t=!0,n=e}finally{try{e||null==r.return||r.return()}finally{if(t)throw n}}}},{key:"addStyle",value:function(){var e=document.getElementById("sliderCarousel-style".concat(this.numberSlider));e||((e=document.createElement("style")).id="sliderCarousel-style".concat(this.numberSlider)),e.textContent="\n      .glo-wrap {\n        overflow: hidden;\n      }\n      .glo-slider".concat(this.numberSlider," {\n        display: flex;\n        ").concat("Y"===this.slideBy?"flex-wrap: wrap;":"","\n        transition: transform .5s;\n        will-change: transform;\n      }\n      .glo-slider").concat(this.numberSlider," .glo-slider__item {\n        max-width: none;\n        flex: 0 0 ").concat(this.options.widthSlide,"%;\n        align-items: center;\n        justify-content: center;\n        margin: auto 0;\n      }\n    "),document.head.appendChild(e)}},{key:"controlSlider",value:function(){this.prev.addEventListener("click",this.prevSlider.bind(this)),this.next.addEventListener("click",this.nextSlider.bind(this))}},{key:"tabSlider",value:function(){var e=this,t=Y(this.tabs.children);this.tabs.addEventListener("click",(function(n){var i=n.target;i.matches(".".concat(e.tabClass))&&(console.log("target: ",i),document.querySelector(".".concat(e.tabClass,".active")).classList.remove("active"),i.classList.add("active"),e.toSlide(t.indexOf(i)))}))}},{key:"toSlide",value:function(e){this.options.position=e,this.wrap.style.transform="translate".concat(this.slideBy,"(-").concat(this.options.position*this.options.widthSlide,"%)"),this.main.dispatchEvent(this.tabEvent)}},{key:"prevSlider",value:function(){(this.options.infinity||this.options.position>0)&&(--this.options.position,this.options.position<0&&(this.options.position=this.options.maxPosition),this.wrap.style.transform="translate".concat(this.slideBy,"(-").concat(this.options.position*this.options.widthSlide,"%)")),this.main.dispatchEvent(this.event)}},{key:"nextSlider",value:function(){(this.options.infinity||this.options.position<this.options.maxPosition)&&(++this.options.position,this.options.position>this.options.maxPosition&&(this.options.position=0),this.wrap.style.transform="translate".concat(this.slideBy,"(-").concat(this.options.position*this.options.widthSlide,"%)")),this.main.dispatchEvent(this.event)}},{key:"addArrow",value:function(){this.prev=document.createElement("button"),this.next=document.createElement("button"),this.prev.className="glo-slider__prev",this.next.className="glo-slider__next",this.main.appendChild(this.prev),this.main.appendChild(this.next);var e=document.createElement("style");e.textContent="\n      .glo-slider__prev,\n      .glo-slider__next {\n        margin: 0 10px;\n        border: 20px solid transparent;\n        background: transparent;\n      }\n\n      .glo-slider__next {\n        border-left-color: #19b5fe;\n      }\n\n      .glo-slider__prev {\n        border-right-color: #19b5fe;\n      }\n\n      .glo-slider__prev:hover,\n      .glo-slider__prev:focus,\n      .glo-slider__next:hover,\n      .glo-slider__next:focus {\n        background: transparent;\n        outline: transparent;\n      }\n    ",document.head.appendChild(e)}},{key:"responsiveInit",value:function(){var e=this,t=this.slidesToShow,n=this.responsive.map((function(e){return e.breakpoint})),i=Math.max.apply(Math,Y(n)),r=function(){var r=document.documentElement.clientWidth;if(r<i)for(var o=0;o<n.length;o++)r<n[o]&&(e.slidesToShow=e.responsive[o].slideToShow,e.options.widthSlide=Math.floor(100/e.slidesToShow),e.addStyle());else e.slidesToShow=t,e.options.widthSlide=Math.floor(100/e.slidesToShow),e.addStyle()};r(),window.addEventListener("resize",r)}}])&&$(t.prototype,n),i&&$(t,i),e}(),U={num:0,get count(){return this.num++,this.num}},X=document.querySelector(".link-list-menu .menu-link"),H=document.querySelector(".repair-types .repair-types-tab"),K=document.querySelector(".popup-repair-types"),Q=document.querySelector(".repair-types-slider"),V=function(e){e.target.matches(".link-list-repair a")&&f(K)},Z=function(){var e;X.addEventListener("click",f.bind(null,K)),H.addEventListener("click",V),e=Q.children[0],new J({main:".repair-types-slider",wrap:".".concat(e.className),tabs:".nav-list-repair",tabClass:"repair-types-nav__item",slideBy:"y",numberSlider:U.count,slidesToShow:1}).init()};function ee(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var te,ne=document.querySelector(".popup-transparency"),ie=document.querySelector(".transparency-slider"),re=ne.querySelector(".slider-counter-content__total"),oe=ne.querySelector(".slider-counter-content__current"),se=function(){var e=event.target;if(e.matches(".transparency-item__img")){var t=e.parentNode,n=ee(ie.children);te.toSlide(n.indexOf(t)),oe.innerText=te.options.position+1,f(ne)}},ae=function(){ie.addEventListener("click",se),(te=new J({wrap:".popup-transparency-slider",main:".popup-transparency-slider-wrap",prev:"#transparency_left",next:"#transparency_right",numberSlider:U.count,slidesToShow:1})).init(),re.innerText=te.slides.length,te.main.addEventListener("sliderChange",(function(){oe.innerText=te.options.position+1}))},le=function(){var e=new J({wrap:".reviews-slider",main:".reviews-slider-wrap",prev:"#reviews-arrow_left",next:"#reviews-arrow_right",numberSlider:U.count,slidesToShow:1});e.init()},ce=function(){new J({wrap:".partners-slider",main:"#partners .wrapper",prev:"#partners-arrow_left",next:"#partners-arrow_right",numberSlider:U.count,infinity:!0,slidesToShow:3,responsive:[{breakpoint:1024,slideToShow:3},{breakpoint:768,slideToShow:2},{breakpoint:576,slideToShow:1}]}).init()},de=function(){var e=new J({main:".scheme-slider-wrap",wrap:".scheme-slider",tabs:"#scheme-list",tabClass:"scheme-nav__item",numberSlider:U.count,slidesToShow:1});e.init(),e.main.addEventListener("tabChange",(function(){var t=e.main.querySelectorAll(".scheme-description-block");e.main.querySelector(".scheme-description-block.visible-content-block").classList.remove("visible-content-block"),t.item(e.options.position).classList.add("visible-content-block")}))};i(),b(),p(),m(),G(),w(),x(),q(),N(),le(),ce(),Z(),F(),ae(),de()}]);