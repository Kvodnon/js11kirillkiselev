import { sliderCounter, SliderCarousel } from "./carousel";

const sliders = document.querySelector('.designs-slider'),
  current = document.querySelector('#designs-counter .slider-counter-content__current'),
  tab = document.getElementById('designs-list'),
  total = document.querySelector('#designs-counter .slider-counter-content__total'),
  paginations = document.querySelectorAll('.preview-block'),
  designs = document.getElementById('designs');

let designSlider,
  designSliders = [],
  tabsSlider;

const tabHandler = (event) => {
  const {target} = event;

  if (!target.matches('.designs-nav__item')) return;

  const children = [...designSlider.tabs.children],
    slider = designSliders[children.indexOf(target)],
    tabChildren = [...tab.children],
    paginationActive = document.querySelector('.preview-block.visible'),
    paginationNeeded = tabChildren.indexOf(target);


  for (const slider of designSliders) {
    slider.removeControl();
  }

  slider.controlSlider();
  paginationActive.classList.remove('visible');
  paginations[paginationNeeded].classList.add('visible');

  const dotActive = paginations[paginationNeeded].querySelector('.preview_active');
  dotActive.classList.remove('preview_active');

  const dot = paginations[paginationNeeded].children[slider.options.position];
  dot.querySelector('.preview-block__item-inner').classList.add('preview_active');

  current.innerText = slider.options.position + 1;
  total.innerText = slider.slides.length;
};

const design = () => {
  const children = sliders.children;
  
  for (const child of children) {
    const slider = new SliderCarousel({
      main: `.repair-types-slider`,
      wrap: `.${child.className}`,
      
      prev: '#design_left',
      next: '#design_right',
      
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
    main: `.designs-slider-wrap`,
    wrap: `.designs-slider`,
  
    tabs: '#designs-list',
    tabClass: 'designs-nav__item',
    slideBy: 'y',
  
    numberSlider: sliderCounter.count,
    slidesToShow: 1,
  });

  designSlider.init();

  
  tab.addEventListener('click', tabHandler);

  tabsSlider = new SliderCarousel({
    wrap: '#designs-list',
    main: '.nav-designs',
    
    prev: '#nav-arrow-designs_left',
    next: '#nav-arrow-designs_right',
    
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
    } else if (document.documentElement.clientWidth > 1024 && tabsSlider.style) {
      tabsSlider.removeStyle();
      tab.children[0].style.marginLeft = 0;
    }
  };

  responseHandler();

  tabsSlider.wrap.addEventListener('responseEventAfter', responseHandler);

  const paginationHandler = () => {
    let {target} = event;
    
    target = target.closest('.preview-block__item');

    if (!target) return;
    
    const pagination = target.parentNode,
      paginationIndex = [...paginations].indexOf(pagination),
      slider = designSliders[paginationIndex],
      paginationChldren = [...pagination.children],
      dotIndex = paginationChldren.indexOf(target);
    
    slider.toSlide(dotIndex);

    const dotActive = pagination.querySelector('.preview_active');

    dotActive.classList.remove('preview_active');

    const dot = target.querySelector('.preview-block__item-inner');
    dot.classList.add('preview_active');
  };
  
  designs.addEventListener('click', paginationHandler);
};


export default design;