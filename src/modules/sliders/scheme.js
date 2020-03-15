import { SliderCarousel, sliderCounter } from "../carousel";

const scheme = () => {
  const slider = new SliderCarousel({
    main: `.scheme-slider-wrap`,
    wrap: `.scheme-slider`,
  
    tabs: '#scheme-list',
    tabClass: 'scheme-nav__item',
  
    numberSlider: sliderCounter.count,
    slidesToShow: 1,
  });
  
  slider.init();
  
  slider.main.addEventListener('tabChange', () => {
    const children = slider.main.querySelectorAll('.scheme-description-block');
    const active = slider.main.querySelector('.scheme-description-block.visible-content-block');
    
    active.classList.remove('visible-content-block');
    const needed = children.item(slider.options.position);
    needed.classList.add('visible-content-block');
  });
};

export default scheme;