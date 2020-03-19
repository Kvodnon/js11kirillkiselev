const button = document.querySelector('.menu__icon'),
  popup = document.querySelector('.popup-menu'),
  menu = document.querySelector('.popup-dialog-menu'),
  toTop = document.querySelector('.button-footer');

let transform = 'translate3d(0,0,0)';

menu.style.visibility = 'hidden';

const getAdaptiveTransform = () => {
  const transformVisibleX = 'translate3d(100%,0,0)',
    transformVisibleY = 'translate3d(0,-100%,0)';

  const windowWidth = document.documentElement.clientWidth,
    mobileWidth = 576;

  if (windowWidth < mobileWidth) {
    return transformVisibleY;
  } else {
    return transformVisibleX;
  }
};

const easeInCubic = function (t) {
  return t * t * t
}

const scrollToElem = (startTime, currentTime, duration, scrollEndElemTop, startScrollOffset) => {
  const runtime = currentTime - startTime;
  let progress = runtime / duration;

  progress = Math.min(progress, 1);

  const ease = easeInCubic(progress);

  window.scroll(0, startScrollOffset + (scrollEndElemTop * ease));
  
  if (runtime < duration) {
    requestAnimationFrame((timestamp) => {
      const currentTime = timestamp || new Date().getTime();
      scrollToElem(startTime, currentTime, duration, scrollEndElemTop, startScrollOffset);
    });
  }
}

const openMenu = () => {
  const visibility = 'visible';

  popup.style.paddingRight = 0;
  menu.style.transform = transform;
  menu.style.visibility = visibility;
  popup.style.visibility = visibility;
}

const closeMenu = () => {
  const visibility = 'hidden';

  popup.style.paddingRight = '10px';
  menu.style.transform = getAdaptiveTransform();

  popup.removeAttribute('style');
  menu.removeAttribute('style');

  menu.style.visibility = visibility;
  popup.style.visibility = visibility;
}

const animateLink = (target) => {
  const anchor = document.getElementById(target.href.split('#')[1]);

  requestAnimationFrame((timestamp) => {
    const stamp = timestamp || new Date().getTime();
    const duration = 1200;
    const start = stamp;

    const startScrollOffset = window.pageYOffset;
    const scrollEndElemTop = anchor.getBoundingClientRect().top;

    scrollToElem(start, stamp, duration, scrollEndElemTop, startScrollOffset);
  });
}

const menuHandler = (event) => {
  event.preventDefault();

  const target = event.target;

  if (!target.closest('.close-menu, .menu__icon, .menu-link')) return;

  const menuVisible = popup.style.visibility === 'visible' ? true : false;

  menuVisible ? closeMenu() : openMenu();

  if (target.closest('.popup-menu-nav__item')) {
    animateLink(target);
  }
}

const toTopHandler = (event) => {
  event.preventDefault();
  const target = event.target.closest('.button-footer');
  animateLink(target.children[0]);
}

const sideMenu = () => {
  menu.addEventListener('click', menuHandler);
  button.addEventListener('click', menuHandler);
  toTop.addEventListener('click', toTopHandler);
};

export default sideMenu;