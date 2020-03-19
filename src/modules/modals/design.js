import { open } from "../modalHandler";
import { sliderCounter, SliderCarousel } from "../carousel";

const modal = document.querySelector('.popup-design'),
  sliders = document.querySelector('.popup-design-slider'),
  current = document.querySelector('#popup-designs-counter .slider-counter-content__current'),
  tab = document.getElementById('nav-list-popup-designs'),
  total = document.querySelector('#popup-designs-counter .slider-counter-content__total'),
  designs = document.getElementById('designs'),
  information = document.querySelectorAll('.popup-design-text');

let designSlider,
  designSliders = [],
  tabsSlider;

const designHandler = (event) => {
  const {target} = event;

  if (!target.matches('.link-list-designs a')) return;
  

  open(modal);
};

const initSliders = () => {
  const children = sliders.children;
  
  for (const child of children) {
    const slider = new SliderCarousel({
      main: `.popup-design-slider`,
      wrap: `.${child.className}`,
      
      prev: '#popup_design_left',
      next: '#popup_design_right',
      
      numberSlider: sliderCounter.count,
      slidesToShow: 1,
    });
    
    slider.init();
    slider.removeControl();
    
    designSliders.push(slider);

    slider.wrap.addEventListener('sliderChange', () => {
      current.innerText = slider.options.position + 1;
    });
  }
  
  designSliders[0].controlSlider();
  
  designSlider = new SliderCarousel({
    main: `.popup-design-slider-wrap`,
    wrap: `.popup-design-slider`,
    
    tabs: '#nav-list-popup-designs',
    tabClass: 'designs-nav__item_popup',
    slideBy: 'y',
    
    numberSlider: sliderCounter.count,
    slidesToShow: 1,
  });
  
  designSlider.init();
  // tabsSlider = new SliderCarousel({
    //   wrap: '#designs-list',
  //   main: '.nav-designs',
    
  //   prev: '#nav-arrow-designs_left',
  //   next: '#nav-arrow-designs_right',
    
  //   numberSlider: sliderCounter.count,
  //   slidesToShow: 2,
    
  //   responsive: [
  //     {
  //       breakpoint: 768,
  //       slideToShow: 2
  //     },
  //     {
  //       breakpoint: 576,
  //       slideToShow: 1
  //     }
  //   ]
  // });
  
  // tabsSlider.init();
};

const tabHandler = (event) => {
  const {target} = event;

  if (!target.matches('.designs-nav__item')) return;

  const children = [...designSlider.tabs.children],
    slider = designSliders[children.indexOf(target)],
    tabChildren = [...tab.children];

  for (const slider of designSliders) {
    slider.removeControl();
  }

  slider.controlSlider();

  current.innerText = slider.options.position + 1;
  total.innerText = slider.slides.length;

  const active = document.querySelector('.popup-design-text.visible-content-block');
  active.classList.remove('visible-content-block');
  information[designSlider.options.position].classList.add('visible-content-block');
};

const designModal = () => {
  initSliders();
  designs.addEventListener('click', designHandler);
  tab.addEventListener('click', tabHandler);
};

export default designModal;