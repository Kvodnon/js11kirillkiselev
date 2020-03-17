import { open } from "./modalHandler";
import { sliderCounter, SliderCarousel } from "./carousel";

const modal = document.querySelector('.popup-portfolio'),
  portfolioBlock = document.querySelector('.portfolio-slider'),
  current = document.querySelector('#portfolio-counter .slider-counter-content__current'),
  total = document.querySelector('#portfolio-counter .slider-counter-content__total');

const portfolioHandler = (event) => {
  const target = event.target;

  if (!target.matches('.portfolio-slider__slide-frame')) return;

  open(modal);
};

const portfolio = () => {
  const popupSlider = new SliderCarousel({
    wrap: '.popup-transparency-slider',
    main: '.popup-transparency-slider-wrap',
    
    prev: '#transparency_left',
    next: '#transparency_right',
    
    numberSlider: sliderCounter.count,
    slidesToShow: 1,
  });
  
  // popupSlider.init();
  
  const portfolioSlider = new SliderCarousel({
    wrap: '.portfolio-slider',
    main: '.portfolio-slider-wrap',
    
    prev: '#portfolio-arrow_left',
    next: '#portfolio-arrow_right',

    hideArrow: true,
    
    numberSlider: sliderCounter.count,
    slidesToShow: 3,

    responsive: [
      {
        breakpoint: 1030,
        slideToShow: 3
      },
      {
        breakpoint: 1024,
        slideToShow: 2
      },
      {
        breakpoint: 901,
        slideToShow: 1
      }
    ]
  });

  portfolioSlider.init();

  const portfolioSliderMobile = new SliderCarousel({
    wrap: '.portfolio-slider-mobile',
    main: '.portfolio-slider-wrap',
    
    prev: '#portfolio-arrow-mobile_left',
    next: '#portfolio-arrow-mobile_right',

    numberSlider: sliderCounter.count,
    slidesToShow: 1,
  });

  portfolioSliderMobile.init();

  portfolioSliderMobile.main.addEventListener('sliderChange', () => {
    current.innerText = portfolioSliderMobile.options.position + portfolioSliderMobile.slidesToShow;
  });

  total.innerText = portfolioSliderMobile.slides.length;

  portfolioBlock.addEventListener('click', portfolioHandler);
};

export default portfolio;