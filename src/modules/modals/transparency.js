import { open } from "../modalHandler";

const modal = document.querySelector('.popup-transparency'),
  slider = document.querySelector('.transparency-slider');

const handler = () => {
  const target = event.target;

  if (!target.matches('.transparency-item__img')) return;

  open(modal);
};

const transparency = () => {
  slider.addEventListener('click', handler);
};

export default transparency;