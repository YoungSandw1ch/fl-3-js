// import * as storage from './storage.js';
// console.log(storage);

let items = [
  { id: '1', name: 'bread', isCheked: true },
  { id: '2', name: 'potato', isCheked: false },
  { id: '3', name: 'tomato', isCheked: true },
  { id: '4', name: 'chery', isCheked: false },
  { id: '5', name: 'pork', isCheked: true },
];

const refs = {
  list: document.querySelector('ol'),
  form: document.querySelector('.form'),
};

getItemsFromLS();
updateLocaleStorage();
renderList();

refs.list.addEventListener('click', onListItemClick);
refs.form.addEventListener('submit', onAddBtnClick);

//=================== render list ======================================
function renderList() {
  const itemsMarkup = items.map(createItem).join('');

  refs.list.innerHTML = '';
  refs.list.insertAdjacentHTML('afterbegin', itemsMarkup);
}

function createItem({ name, isCheked, id }) {
  const item = `
  <li class='item ${isCheked ? 'item--changeBg' : ''}' id='${id}'>
    <label class='label'>
      <input type="checkbox" ${isCheked ? 'checked' : ''}>
      <span class='list__text ${isCheked ? 'done' : ''}'>${name}</span>
    </label>
    <button class='close'>x</button>
  </li>
  `;
  return item;
}

//================== handlers =========================================
function onListItemClick(e) {
  if (e.target === e.currentTarget) return;

  const listItem = e.target.closest('li');
  const id = listItem.id;

  if (e.target.nodeName === 'BUTTON') {
    deleteItem(id);
  }

  if (e.target.nodeName === 'LABEL' || e.target.nodeName === 'INPUT') {
    toogleItem(id);
    const text = e.target.nextElementSibling;
    text.classList.toggle('done');
    listItem.classList.toggle('item--changeBg');
  }

  updateLocaleStorage();
  renderList();
}

function onAddBtnClick(e) {
  e.preventDefault();
  const inputRef = document.querySelector('[name="text"]');
  if (inputRef.value) {
    const item = {
      id: Date.now().toString(),
      name: inputRef.value,
      isCheked: false,
    };

    items.push(item);
    refs.form.reset();

    renderList();
    updateLocaleStorage();
  }
}
//==================== toogle / delete =================================
function deleteItem(id) {
  items = items.filter(el => el.id !== id);
}

function toogleItem(id) {
  items.map(el => {
    if (el.id === id) {
      el.isCheked = !el.isCheked;
    }
  });
}
//====================locale storage=====================================
function updateLocaleStorage() {
  localStorage.setItem('noteData', JSON.stringify(items));
}

function getItemsFromLS() {
  const itemsData = localStorage.getItem('noteData');
  if (!itemsData) return;

  try {
    items = JSON.parse(itemsData);
  } catch (error) {
    console.log(`ОШИБКА parse ${error.message}`);
  }
}

//=====old function, trash==============================================

// function onItemSelect(e) {
//   const listItem = e.target.closest('li');
//   const span = e.target.nextElementSibling;

//   items.map(el => {
//     if (el.id === listItem.id) {
//       el.isCheked = !el.isCheked;
//       span.classList.toggle('done');
//       listItem.classList.toggle('item--changeBg');
//     }
//   });

//   updateLocaleStorage();
// }

// function onCloseBtn(e) {
//   //если таргет именно кнопка (можна через класс getAttribute)
//   if (e.target.nodeName === 'BUTTON') {
//     const listItem = e.target.closest('li');
//     //удалить этот елемент li
//     listItem.remove();

//     //удалить обьект продукта из массива
//     items.map((el, i, a) => {
//       if (el.id === listItem.id) {
//         a.splice(i, 1);
//       }
//     });
//   }

//   updateLocaleStorage();
// }
