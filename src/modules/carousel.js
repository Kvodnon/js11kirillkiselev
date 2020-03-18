export class SliderCarousel {
  constructor({
    main,
    wrap,
    next,
    prev,
    tabs,
    hideArrow = false,
    tabClass = 'glo-tab',
    slideBy = 'X',
    infinity = false,
    position = 0,
    slidesToShow = 3,
    responsive = [],
    numberSlider = 1
  }) {
    if (!main && !wrap) {
      console.warn('slider-carousel: Необходимо 2 свойства, "main" и "wrap"!')
    }

    this.main = document.querySelector(main);
    this.wrap = document.querySelector(wrap);
    this.slides = document.querySelector(wrap).children;
    this.first = this.slides[0];
    this.next = document.querySelector(next);
    this.prev = document.querySelector(prev);
    this.slidesToShow = slidesToShow;
    this.options = {
      position,
      infinity,
      widthSlide: Math.floor(100 / this.slidesToShow),
      maxPosition: this.slides.length - this.slidesToShow
    };
    this.responsive = responsive;
    this.numberSlider = numberSlider;

    this.event = new Event("sliderChange");
    this.tabEvent = new Event("tabChange");
    this.responseEventAfter = new Event("responseEventAfter");
    this.tabs = document.querySelector(tabs);
    this.tabClass = tabClass;
    this.slideBy = slideBy.toUpperCase();
    this.hideArrow = hideArrow;
    this.callbacks = {};
    this.callbacks.prev = {};
    this.callbacks.next = {};
  }

  init() {
    this.addGloClass();
    this.addStyle();

    if (!this.prev && !this.next && !this.tabs) {
      this.addArrow();
    }

    if (this.tabs) {
      this.tabSlider();
    } else {
      this.controlSlider();
    }

    this.responsiveInit();
  }

  addGloClass() {
    this.wrap.classList.add(`glo-slider${this.numberSlider}`);
    this.main.classList.add(`glo-wrap`);

    for (const item of this.slides) {
      item.classList.add('glo-slider__item');
    }
  }

  addStyle() {
    this.style = document.getElementById(`sliderCarousel-style${this.numberSlider}`);

    if (!this.style) {
      this.style = document.createElement('style');
      this.style.id = `sliderCarousel-style${this.numberSlider}`;
    }

    this.style.textContent = `
      .glo-wrap .glo-slider${this.numberSlider} {
        display: flex;
        ${this.slideBy === 'Y' ? 'flex-wrap: wrap;' : 'flex-wrap: nowrap;'}
      }
      .glo-slider${this.numberSlider} > .glo-slider__item {
        max-width: none;
        flex: 0 0 ${this.options.widthSlide}%;
        align-items: center;
        margin: auto 0;
        transition: margin-left .5s, top .5s; 
        will-change: margin-left, top;
        position: relative;
        top: 0;
        height: 100%;
      }
    `;

    document.head.appendChild(this.style);
  }

  removeStyle() {
    this.style.remove();
    this.style = null;
  }

  controlSlider() {
    this.callbacks.prev = this.prevSlider.bind(this);
    this.callbacks.next = this.nextSlider.bind(this);
    this.prev.addEventListener('click', this.callbacks.prev);
    this.next.addEventListener('click', this.callbacks.next);
  }

  removeControl() {
    this.prev.removeEventListener('click', this.callbacks.prev);
    this.next.removeEventListener('click', this.callbacks.next);
  }

  tabSlider() {
    const children = [...this.tabs.children];

    this.tabs.addEventListener('click', (event) => {
      const target = event.target;

      if (!target.matches(`.${this.tabClass}`)) return;

      const current = document.querySelector(`.${this.tabClass}.active`);

      if (current) {
        current.classList.remove('active');
      }

      target.classList.add('active');

      this.toSlide(children.indexOf(target));
    });
  }

  toSlide(position) {
    this.options.position = position;

    if (this.slideBy === 'Y') {
      for (const slide of this.slides) {
        slide.style.top = `-${this.options.position * this.options.widthSlide}%`;
      }
    } else {
      this.first.style.marginLeft = `-${this.options.position * this.options.widthSlide}%`;
    }

    this.main.dispatchEvent(this.tabEvent);
    this.wrap.dispatchEvent(this.tabEvent);
  }

  prevSlider() {
    if (this.options.infinity || this.options.position > 0) {
      --this.options.position;

      if (this.options.position < 0) {
        this.options.position = this.options.maxPosition;
      }

      this.toSlide(this.options.position);
    }

    if (!this.options.infinity && this.hideArrow) {
      if (this.options.position === 0 && this.options.position !== this.options.maxPosition) {
        this.prev.style.display = 'none';
      } else {
        this.prev.style.display = 'flex';
        this.next.style.display = 'flex';
      }
    }

    this.main.dispatchEvent(this.event);
    this.wrap.dispatchEvent(this.event);
  }
  
  nextSlider() {
    if (this.options.infinity || this.options.position < this.options.maxPosition) {
      ++this.options.position;

      if (this.options.position > this.options.maxPosition) {
        this.options.position = 0;
      }
      
      this.toSlide(this.options.position);
    }

    if (!this.options.infinity && this.hideArrow) {
      if (this.options.position === this.options.maxPosition && this.options.position !== 0) {
        this.next.style.display = 'none';
      } else {
        this.next.style.display = 'flex';
        this.prev.style.display = 'flex';
      }
    }

    this.main.dispatchEvent(this.event);
    this.wrap.dispatchEvent(this.event);
  }

  addArrow() {
    this.prev = document.createElement('button');
    this.next = document.createElement('button');

    this.prev.className = 'glo-slider__prev';
    this.next.className = 'glo-slider__next';

    this.main.appendChild(this.prev);
    this.main.appendChild(this.next);

    const style = document.createElement('style');
    style.textContent = `
      .glo-slider__prev,
      .glo-slider__next {
        margin: 0 10px;
        border: 20px solid transparent;
        background: transparent;
      }

      .glo-slider__next {
        border-left-color: #19b5fe;
      }

      .glo-slider__prev {
        border-right-color: #19b5fe;
      }

      .glo-slider__prev:hover,
      .glo-slider__prev:focus,
      .glo-slider__next:hover,
      .glo-slider__next:focus {
        background: transparent;
        outline: transparent;
      }
    `;

    document.head.appendChild(style);
  }

  responsiveInit() {
    const slidesToShowDefault = this.slidesToShow,
      allResponse = this.responsive.map(item => item.breakpoint),
      maxResponse = Math.max(...allResponse);

    const checkResponse = () => {
      const widthWindow = document.documentElement.clientWidth;

      if (widthWindow < maxResponse) {
        for (let i = 0; i < allResponse.length; i++) {
          if (widthWindow < allResponse[i]) {
            this.slidesToShow = this.responsive[i].slideToShow;
            this.options.widthSlide = Math.floor(100 / this.slidesToShow);
            this.addStyle();
          }
        }
      } else {
        this.slidesToShow = slidesToShowDefault;
        this.options.widthSlide = Math.floor(100 / this.slidesToShow);
        this.addStyle();
      }
      
      this.wrap.dispatchEvent(this.responseEventAfter);
    }

    checkResponse();

    window.addEventListener('resize', checkResponse);
  }
}

export const sliderCounter = {
  num: 0,
  get count() {
    this.num++;

    return this.num;
  }
};