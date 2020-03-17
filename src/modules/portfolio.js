import { open } from "./modalHandler";
import { sliderCounter, SliderCarousel } from "./carousel";

const modal = document.querySelector('.popup-portfolio'),
  portfolioBlock = document.querySelector('.portfolio-slider'),
  current = document.querySelector('#portfolio-counter .slider-counter-content__current'),
  total = document.querySelector('#portfolio-counter .slider-counter-content__total'),
  information = document.querySelectorAll('.popup-portfolio .popup-portfolio-text');

let popupSlider, portfolioSlider;

const portfolioHandler = (event) => {
  let {target} = event,
    innerParent = target.parentNode,
    innerChildren = [...innerParent.children],
    outerParent = innerParent.parentNode,
    outerChildren = [...outerParent.children],
    current = document.querySelector('#popup-portfolio-counter .slider-counter-content__current');
     
  if (!target.matches('.portfolio-slider__slide-frame, .item-hover')) return;
  
  if (target.matches('.portfolio-slider__slide-frame'))  {
    let index = (outerChildren.indexOf(innerParent) * 2) + innerChildren.indexOf(target);
  
    current.innerText = index + 1;
    popupSlider.toSlide(index);
  }
  
  if (target.matches('.item-hover'))  {
    innerChildren = [...innerParent.parentNode.children];
    let index = innerChildren.indexOf(innerParent);
  
    current.innerText = index + 1;
    popupSlider.toSlide(index);
  }

  const active = document.querySelector('.popup-portfolio-text.active');
  active.classList.remove('active');
  information[popupSlider.options.position].classList.add('active');

  open(modal);
};

const portfolio = () => {
  popupSlider = new SliderCarousel({
    wrap: '.popup-portfolio-slider',
    main: '.popup-portfolio-slider-wrap',
    
    prev: '#popup_portfolio_left',
    next: '#popup_portfolio_right',
    
    numberSlider: sliderCounter.count,
    slidesToShow: 1,
  });
  
  popupSlider.init();

  const totalModal = document.querySelector('#popup-portfolio-counter .slider-counter-content__total');
  totalModal.innerText = popupSlider.slides.length;
  information[0].classList.add('active');
  
  portfolioSlider = new SliderCarousel({
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
  
  portfolioSliderMobile.main.addEventListener('click', portfolioHandler);

  portfolioSliderMobile.main.addEventListener('sliderChange', () => {
    current.innerText = portfolioSliderMobile.options.position + portfolioSliderMobile.slidesToShow;
  });

  total.innerText = portfolioSliderMobile.slides.length;
  

  portfolioBlock.addEventListener('click', portfolioHandler);

  popupSlider.main.addEventListener('sliderChange', () => {
    let current = document.querySelector('#popup-portfolio-counter .slider-counter-content__current');
    current.innerText = popupSlider.options.position + popupSlider.slidesToShow;
    const active = document.querySelector('.popup-portfolio-text.active');
    active.classList.remove('active');
    information[popupSlider.options.position].classList.add('active');
    portfolioSliderMobile.toSlide(popupSlider.options.position);
    current = document.querySelector('#portfolio-counter .slider-counter-content__current');
    current.innerText = popupSlider.options.position + popupSlider.slidesToShow;
  });
};

export default portfolio;