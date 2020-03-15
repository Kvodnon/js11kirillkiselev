import { open } from "../modalHandler";
import { SliderCarousel, sliderCounter } from "../carousel";

const link = document.querySelector('.link-list-menu .menu-link'),
  tab = document.querySelector('.repair-types .repair-types-tab'),
  modal = document.querySelector('.popup-repair-types'),
  sliders = document.querySelector('.repair-types-slider');

const tabHandler = (event) => {
  const target = event.target;

  if (!target.matches('.link-list-repair a')) return;

  open(modal);
};

const initSliders = () => {
  const child = sliders.children[0];

  const slider = new SliderCarousel({
    main: `.repair-types-slider`,
    wrap: `.${child.className}`,
  
    tabs: '.nav-list-repair',
    tabClass: 'repair-types-nav__item',
    slideBy: 'y',
  
    numberSlider: sliderCounter.count,
    slidesToShow: 1,
  });
  
  slider.init();
}

const types = () => {
  link.addEventListener('click', open.bind(null, modal));
  tab.addEventListener('click', tabHandler);
  initSliders();
};

export default types;