import { open } from "../modalHandler";
import { SliderCarousel, sliderCounter } from "../carousel";

const link = document.querySelector('.link-list-menu .menu-link'),
  tab = document.querySelector('.repair-types .repair-types-tab'),
  modal = document.querySelector('.popup-repair-types'),
  sliders = document.querySelector('.repair-types-slider'),
  current = document.querySelector('#repair-counter .slider-counter-content__current'),
  total = document.querySelector('#repair-counter .slider-counter-content__total');

let typeSliders = [],
  typesSlider,
  tabsSlider;


const initSliders = () => {
  
  const children = sliders.children;
  
  for (const child of children) {
    const slider = new SliderCarousel({
      main: `.repair-types-slider`,
      wrap: `.${child.className}`,
      
      prev: '#repair-types-arrow_left',
      next: '#repair-types-arrow_right',
      
      numberSlider: sliderCounter.count,
      slidesToShow: 1,
    });
    
    slider.init();
    slider.removeControl();
    
    typeSliders.push(slider);
  
    slider.wrap.addEventListener('sliderChange', () => {
      current.innerText = slider.options.position + 1;
    });
  }

  typeSliders[0].controlSlider();
  
  typesSlider = new SliderCarousel({
    main: `.repair-types-slider-wrap`,
    wrap: `.repair-types-slider`,
    
    tabs: '.nav-list-repair',
    tabClass: 'repair-types-nav__item',
    slideBy: 'y',
    
    numberSlider: sliderCounter.count,
    slidesToShow: 1,
  });
  
  typesSlider.init();

  tabsSlider = new SliderCarousel({
    wrap: '.nav-list-repair',
    main: '.repair-types-nav',
    
    prev: '#nav-arrow-repair-left_base',
    next: '#nav-arrow-repair-right_base',
    
    numberSlider: sliderCounter.count,
    slidesToShow: 2,
    
    responsive: [
      {
        breakpoint: 768,
        slideToShow: 2
      },
      {
        breakpoint: 576,
        slideToShow: 1
      }
    ]
  });
  
  tabsSlider.init();
  
  const responseHandler = () => {
    if (document.documentElement.clientWidth < 1025) {
      if (!tabsSlider.style) {
        tabsSlider.addStyle();
      }
    } else if (document.documentElement.clientWidth > 1024) {
      if (tabsSlider.style) {
        tabsSlider.removeStyle();
      }
      typesSlider.tabs.children[0].style.marginLeft = 0;
    }
  };

  responseHandler();
  
  window.addEventListener('resize', responseHandler);
}

const tabHandler = (event) => {
  const {target} = event;

  if (target.matches('.link-list-repair a')) {
    open(modal);
  };

  if (!target.matches('.repair-types-nav__item ')) return;

  for (const slider of typeSliders) {
    slider.removeControl();
  }

  const children = [...typesSlider.tabs.children];

  const slider = typeSliders[children.indexOf(target)];
  slider.controlSlider();

  current.innerText = slider.options.position + 1;
  total.innerText = slider.slides.length;
};

const types = () => {
  link.addEventListener('click', open.bind(null, modal));
  tab.addEventListener('click', tabHandler);
  initSliders();
};

export default types;