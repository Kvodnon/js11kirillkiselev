import { open } from "../modalHandler";

const buttons = document.querySelectorAll('.button_wide'),
  modal = document.querySelector('.popup-consultation');

const consultation = () => {
  buttons.forEach(button => {
    button.addEventListener('click', open.bind(null, modal));
  });
};

export default consultation;