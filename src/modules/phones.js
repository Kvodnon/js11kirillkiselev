const phones = () => {
  const arrow = document.querySelector('.header-contacts__arrow img'),
    accord = document.querySelector('.header-contacts__phone-number-accord'),
    secondPhone = accord.querySelector('.header-contacts__phone-number');
  
  const show = (element) => {
    element.style.opacity = 1;
  }
  
  const hide = (element) => {
    element.style.opacity = 0;
  }

  const arrowHandler = (event) => {
    const opacity = +secondPhone.style.opacity;

    let topIndent = '30px',
      rotate = 'rotate(180deg)';
      
    arrow.style.transition = 'transform .5s';
    
    if (!opacity) {
      show(secondPhone);
    } else {
      rotate = 'rotate(0deg)';
      topIndent = '0';
      hide(secondPhone);
    }
    
    accord.style.top = topIndent;
    arrow.style.transform = rotate;
  };

  arrow.parentNode.addEventListener('click', arrowHandler);
};

export default phones;