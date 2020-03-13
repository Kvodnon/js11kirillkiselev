const buttons = document.querySelectorAll('.button_wide'),
  popup = document.querySelector('.popup-consultation');

const closePopup = () => {
  popup.style.visibility = 'hidden';
}

const openPopup = () => {
  popup.style.visibility = 'visible';
}

const popupHandler = (event) => {
  const target = event.target;

  if (!target.matches('.close')) return;

  closePopup();
}

const popupConsultation = () => {
  buttons.forEach(button => {
    button.addEventListener('click', openPopup);
    popup.addEventListener('click', popupHandler);
  });
};

export default popupConsultation;