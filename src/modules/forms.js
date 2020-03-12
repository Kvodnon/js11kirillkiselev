import { openThanksPopup } from "./popupThanks";

const forms = document.querySelectorAll('.feedback__form, .feedback-block__form');

const postData = (body) => {
  return fetch('./server.php', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(body)
  });
};

const formHandler = (event) => {
  event.preventDefault();

  const form = event.target,
    policy = form.querySelector('.checkbox__input');

  if (!policy.checked) {
    alert('Отметьте галочку!');
  }
  
  const formData = new FormData(form);

  let body = {};

  formData.forEach((value, key) => {
    body[key] = value;
  });

  postData(body).then((response) => {
    if (response.status !== 200) {
      throw new Error(response.statusText);
    }

    openThanksPopup();

  }, (error) => {

    console.log(error);
    
  });

  form.reset();
};

const initForms = () => {
  forms.forEach(form => {
    const policy = form.querySelector('.checkbox__input'),
      phone = form.querySelector('[name="phone"]');

    policy.removeAttribute('required');
    phone.required = true;

    form.addEventListener('submit', formHandler);
  });
};

export default initForms;