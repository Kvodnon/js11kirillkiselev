import { sliderCounter, SliderCarousel } from "./carousel";

const sliders = document.querySelector('.designs-slider');

let designSlider,
  designSliders = [];

const design = () => {
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
    // slider.removeControl();
    
    designSliders.push(slider);
  
    // slider.wrap.addEventListener('sliderChange', () => {
    //   current.innerText = slider.options.position + 1;
    // });
  }

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
};

export default design;