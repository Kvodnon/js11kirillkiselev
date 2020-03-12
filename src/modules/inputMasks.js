import maskPhone from "./plugins/maskPhone";

const selector = '[name="phone"]',
  phones = document.querySelectorAll(selector);
  console.log('phones: ', phones);
  
  const inputMasks = () => {
    phones.forEach((phone) => {
    maskPhone(phone);
  });
};

export default inputMasks;