import { open } from "../modalHandler";

const link = document.querySelector('.link-list-menu .menu-link'),
  tab = document.querySelector('.repair-types .repair-types-tab'),
  modal = document.querySelector('.popup-repair-types');

const tabHandler = (event) => {
  const target = event.target;

  if (!target.matches('.link-list-repair a')) return;

  open(modal);
};

const types = () => {
  link.addEventListener('click', open.bind(null, modal));
  tab.addEventListener('click', tabHandler);
};

export default types;