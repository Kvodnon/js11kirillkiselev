const menu = () => {
  const button = document.querySelector('.menu__icon'),
    popup = document.querySelector('.popup-menu'),
    menu = document.querySelector('.popup-dialog-menu'),
    close = document.querySelector('.close-menu');

  const openMenu = () => {
    const visibility = 'visible';
  
    popup.style.paddingRight = 0;
    menu.style.transform = 'translate3d(0,0,0)';
    menu.style.visibility = visibility;
    popup.style.visibility = visibility;
  }

  const closeMenu = () => {
    const visibility = 'hidden';
  
    popup.style.paddingRight = '10px';
    menu.style.transform = 'translate3d(100%,0,0)';
    menu.style.visibility = visibility;
    popup.style.visibility = visibility;
  }
  
  const menuHandler = () => {
    const menuVisible = popup.style.visibility === 'visible' ? true : false;

    menuVisible ? closeMenu() : openMenu();
  };

  button.addEventListener('click', menuHandler);
  close.addEventListener('click', menuHandler);
};

export default menu;