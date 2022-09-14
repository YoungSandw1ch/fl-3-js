// import throttle from 'lodash.throttle';

// const refs = {
//   form: document.querySelector('.form'),
//   name: document.querySelector('input[name="name"]'),
//   message: document.querySelector('textarea[name="message"]'),
// };

// const STORAGE_KEY = 'savedDataForm';
// //----обьект для сохранения данных в локальное хранилище-----------------
// const savedData = { ...JSON.parse(localStorage.getItem(STORAGE_KEY)) }; // если что то сохранено то распыляем его в наш обьект иначе при перезагрузке мы перезапишем наш обьект на пустой
// //---возвращаем данные с локального хранилища-----------------------------
// returnDataFromLocalStorage();
// //------------------------------------------------------------------------

// refs.form.addEventListener('submit', onSubmitPush);
// refs.form.addEventListener('input', throttle(onFormInputsChange, 500));
// refs.form.addEventListener('change', onFormInputsChange);

// function onSubmitPush(e) {
//   e.preventDefault();

//   console.log('send form');

//   e.currentTarget.reset();
//   localStorage.removeItem(STORAGE_KEY);
// }

// function onFormInputsChange(e) {
//   localStorage.setItem(STORAGE_KEY, JSON.stringify(savedData));
//   savedData[e.target.name] = e.target.value;
// }

// function returnDataFromLocalStorage() {
//   const data = JSON.parse(localStorage.getItem(STORAGE_KEY));
//   if (!data) return; //проверка чтоб не было ошибки в деструктуризации нижн "not found"

//   const { name, sex, message } = data;

//   if (name) refs.name.value = name;
//   if (message) refs.message.value = message;
//   if (sex) {
//     const checkedRadioBtn = document.querySelector(`input[value="${sex}"]`);
//     checkedRadioBtn.setAttribute('checked', true);
//   }
// }

//-----------second try-------------------------------

import trottle from 'lodash.throttle';

const refs = {
  form: document.querySelector('.form'),
  textInput: document.querySelector('input[class="input-text"]'),
  textArea: document.querySelector('textarea[class="input-text"]'),
};
const FORM_KEY = 'form-data';
const formData = { ...JSON.parse(localStorage.getItem(FORM_KEY)) };

saveFormDataFromRealod();

refs.form.addEventListener('submit', trottle(onFormSubmit, 500));
refs.form.addEventListener('input', trottle(onTextInputChange, 500));

function onFormSubmit(e) {
  e.preventDefault();

  console.log('Отправляем форму');

  e.currentTarget.reset();
  localStorage.removeItem(FORM_KEY);
  removeCheckedFromRadioInputs();
}

function onTextInputChange(e) {
  formData[e.target.name] = e.target.value;
  localStorage.setItem(FORM_KEY, JSON.stringify(formData));
}

function saveFormDataFromRealod() {
  const str = localStorage.getItem(FORM_KEY);
  if (!str) return;

  const { name, sex, message } = JSON.parse(str);
  if (name) refs.textInput.value = name;
  if (message) refs.textArea.value = message;
  if (sex) {
    const inputSexRef = document.querySelector(`input[value="${sex}"]`);
    inputSexRef.setAttribute('checked', true);
  }
}

function removeCheckedFromRadioInputs() {
  const checkedRadioInput = refs.form.querySelector('input[checked]');
  checkedRadioInput.removeAttribute('checked');
}
