const accordion = document.querySelector('.accordion ul');

const accordionHandler = () => {
  const target = event.target;

  if (!target.matches('.title_block')) return;

  const current = accordion.querySelector('.msg-active');
  
  if (!target.classList.contains('msg-active')) {
    target.classList.add('msg-active');
  }
  
  if (current) {
    current.classList.remove('msg-active');
  }
};

const FAQAccordion = () => {
  accordion.addEventListener('click', accordionHandler);
};

export default FAQAccordion;