import { open } from "../modalHandler";
import { SliderCarousel, sliderCounter } from "../carousel";

const modal = document.querySelector('.popup-transparency'),
  slider = document.querySelector('.transparency-slider'),
  total = modal.querySelector('.slider-counter-content__total'),
  current = modal.querySelector('.slider-counter-content__current');

let documents,
  documentsMobile;

const handler = () => {
  const target = event.target;

  if (!target.matches('.transparency-item__img')) return;

  const item = target.parentNode;
  const children = [...slider.children]

  documents.toSlide(children.indexOf(item));
  current.innerText = documents.options.position + 1;

  open(modal);
};


const transparency = () => {
  slider.addEventListener('click', handler);
  
  documents = new SliderCarousel({
    wrap: '.popup-transparency-slider',
    main: '.popup-transparency-slider-wrap',
    
    prev: '#transparency_left',
    next: '#transparency_right',
    
    numberSlider: sliderCounter.count,
    slidesToShow: 1,
  });
  
  documents.init();

  documentsMobile = new SliderCarousel({
    wrap: '.transparency-slider',
    main: '.transparency-slider-wrap',
    
    prev: '#transparency-arrow_left',
    next: '#transparency-arrow_right',
    
    numberSlider: sliderCounter.count,
    slidesToShow: 1,
  });
  
  documentsMobile.init();
  
  const responseHandler = () => {
    if (document.documentElement.clientWidth < 1091) {
      if (!documentsMobile.style) {
        documentsMobile.addStyle();
      }
    } else if (document.documentElement.clientWidth > 1090) {
      if (documentsMobile.style) {
        documentsMobile.removeStyle();
      }
    }
  };

  responseHandler();

  total.innerText = documents.slides.length;
  
  documents.main.addEventListener('sliderChange', () => {
    current.innerText = documents.options.position + 1;
  });

  window.addEventListener('resize', responseHandler);
};

export default transparency;