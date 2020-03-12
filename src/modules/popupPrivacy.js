const links = document.querySelectorAll('.link-privacy'),
  popup = document.querySelector('.popup-privacy');

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

const popupPrivacy = () => {
  links.forEach(link => {
    link.addEventListener('click', openPopup);
    popup.addEventListener('click', popupHandler);
  });
};

export default popupPrivacy;