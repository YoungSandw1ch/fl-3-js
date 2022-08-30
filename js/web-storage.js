import throttle from 'lodash.throttle';

const refs = {
  form: document.querySelector('.form'),
  name: document.querySelector('input[name="name"]'),
  sex: document.querySelector('.radio'),
  message: document.querySelector('textarea[name="message"]'),
};

// console.log(refs.sex);
// console.log(refs.form);
// console.log(refs.name);
// console.log(refs.message);

refs.form.addEventListener('click', onSubmitPush);
refs.name.addEventListener('input', throttle(onInputName, 500));

function onSubmitPush(e) {
  e.preventDefault();
}

function onInputName(e) {
  console.log(e.target.value);
}
