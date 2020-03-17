import { sliderCounter, SliderCarousel } from "./carousel";

const sliders = document.querySelector('.designs-slider');

const design = () => {
  const child = sliders.children[0];

  const designSlider = new SliderCarousel({
    main: `.designs-slider`,
    wrap: `.${child.className}`,
  
    tabs: '#designs-list',
    tabClass: 'designs-nav__item',
    slideBy: 'y',
  
    numberSlider: sliderCounter.count,
    slidesToShow: 1,
  });

  designSlider.init();
};

export default design;