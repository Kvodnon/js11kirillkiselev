const popups = document.querySelectorAll('.popup');

const close = (target) => {
  const popup = target.closest('.popup');
  popup.classList.remove('modal_open');
};

export const open = (modal) => {
  modal.classList.add('modal_open');
};

const handler = (event) => {
  const target = event.target;

  if (!target.matches('.close')) return;

  close(target);
};

const modalHandler = () => {
  for (const popup of popups) {
    popup.addEventListener('click', handler);
  }
};

export default modalHandler;