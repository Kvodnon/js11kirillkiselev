const link = document.querySelector('.link-list-menu .menu-link'),
  tab = document.querySelector('.repair-types .repair-types-tab'),
  popup = document.querySelector('.popup-repair-types');

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

const tabHandler = (event) => {
  const target = event.target;

  if (!target.matches('.link-list-repair a')) return;

  openPopup();
};

const popupTypes = () => {
  link.addEventListener('click', openPopup);
  tab.addEventListener('click', tabHandler);
  popup.addEventListener('click', popupHandler);
};

export default popupTypes;