import { open } from "../modalHandler";

const links = document.querySelectorAll('.link-privacy'),
  modal = document.querySelector('.popup-privacy');

const privacy = () => {
  links.forEach(link => {
    link.addEventListener('click', open.bind(null, modal));
  });
};

export default privacy;