import SliderCarousel, {sliderCounter} from "../carousel";

const reviews = () => {
  const reviews = new SliderCarousel({
    wrap: '.reviews-slider',
    main: '.reviews-slider-wrap',
    
    prev: '#reviews-arrow_left',
    next: '#reviews-arrow_right',

    numberSlider: sliderCounter.count,
    slidesToShow: 1,
  });

  reviews.init();
};

export default reviews;