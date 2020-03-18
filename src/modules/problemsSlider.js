const wrapper = document.querySelector('.problems-slider-wrap'),
  slider = document.querySelector('.problems-slider'),
  slides = document.getElementsByClassName('problems-slider__slide'),
  selectorPrev = 'problems-prev-slide',
  selectorActive = 'active-item';

const slidesDefault = 3;

const getSlidesToShow = () => {
  return document.documentElement.clientWidth < 768 ? 1 : slidesDefault;
}

let slidesToShow = getSlidesToShow(),
  responseCurrentSlider = getSlidesToShow() === 1 ? 1 : slidesDefault;

const slideToRight = () => {
  const prev = slider.appendChild(slides[0]);
  prev.classList.remove(selectorPrev);
  slides[0].classList.add(selectorPrev);

  let lastSlide = slides[0],
    currentSlide = slides[1];

  if (slidesToShow === slidesDefault) {
    lastSlide = slides[1];
    currentSlide = slides[2];
  }

  lastSlide.classList.remove(selectorActive);
  currentSlide.classList.add(selectorActive);
};

const insertSlideToStart = () => {
  return slider.insertBefore(slides[slides.length - 1], slides[0]);
};

const slideToLeft = () => {
  slides[0].classList.remove(selectorPrev);
  
  let lastSlide = slides[1],
    currentSlide = slides[0];

  if (slidesToShow === slidesDefault) {
    currentSlide = slides[1];
    lastSlide = slides[2];
  }
  
  currentSlide.classList.add(selectorActive);
  lastSlide.classList.remove(selectorActive);

  const next = insertSlideToStart();
  next.classList.add(selectorPrev);
};

const responseInit = () => {
  insertSlideToStart();
  
  if (responseCurrentSlider === 1) {
    slider.classList.add('problems-slider_mobile');
  } else {
    slider.classList.add('problems-slider_desktop');
  }

  if (slidesToShow === slidesDefault) {
    insertSlideToStart();
  }

  slides[0].classList.add(selectorPrev);

  let currentSlide = slides[1];

  for (const slide of slides) {
    if (slidesToShow === 1) {
      slide.classList.add('problems-one-slide');
    }
  }

  if (slidesToShow === slidesDefault) {
    currentSlide = slides[2];
  }

  currentSlide.classList.add('active-item');
};

const resizeHandler = () => {
  responseCurrentSlider = slidesToShow = getSlidesToShow();

  if (responseCurrentSlider === 1 && !slider.classList.contains('problems-slider_mobile')) {
    slider.classList.remove('problems-slider_desktop');
    slider.classList.add('problems-slider_mobile');
    slideToRight();
  } else if (responseCurrentSlider === slidesDefault && !slider.classList.contains('problems-slider_desktop')) {
    slideToLeft();
    slider.classList.add('problems-slider_desktop');
    slider.classList.remove('problems-slider_mobile');
  }
  
  if (responseCurrentSlider === 1) {
    slider.classList.remove('problems-slider_desktop');
  } else {
    slider.classList.remove('problems-slider_mobile');
  }

  for (const slide of slides) {
    if (slidesToShow === slidesDefault) {
      slide.classList.remove('problems-one-slide');
    } else {
      slide.classList.add('problems-one-slide');
    }
  }
};

const sliderHandler = (event) => {
  const target = event.target;

  if (target.closest('#problems-arrow_right')) {
    slideToRight();
  } else if (target.closest('#problems-arrow_left')) {
    slideToLeft();
  }
};

const problemsSlider = () => {
  responseInit();

  wrapper.addEventListener('click', sliderHandler);
  window.addEventListener('resize', resizeHandler);
};

export default problemsSlider;