import { open } from "../modalHandler";

const modal = document.querySelector('.popup-thank');

export const openThanksPopup = open.bind(null, modal);

const thanks = () => {};

export default thanks;