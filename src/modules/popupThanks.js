const popup = document.querySelector('.popup-thank');

const closePopup = () => {
  popup.style.visibility = 'hidden';
}

export const openThanksPopup = () => {
  popup.style.visibility = 'visible';
}

const popupHandler = (event) => {
  const target = event.target;

  if (!target.matches('.close')) return;

  closePopup();
}

const popupThanks = () => {
  popup.addEventListener('click', popupHandler);
};

export default popupThanks;