import {
  fetchTodos,
  updateTodo,
  deleteTodo,
  createTodo,
} from './08-api-todos.js';

let items = [
  // { id: '1', name: 'bread', isCheked: true },
];

const refs = {
  list: document.querySelector('.list'),
  form: document.querySelector('.form'),
  loader: document.querySelector('.loader'),
};

loadAndRender();

refs.list.addEventListener('click', onListItemClick);
refs.form.addEventListener('submit', onSubmitForm);

//=========================================================
function renderTodos() {
  const itemsMarkup = items.map(createItemMarkup).join('');

  refs.list.innerHTML = '';
  refs.list.insertAdjacentHTML('afterbegin', itemsMarkup);
}

function createItemMarkup({ name, isCheked }) {
  return `
  <li class='item ${isCheked ? 'item--changeBg' : ''}'>
    <label class='label'>
      <input type="checkbox" ${isCheked ? 'checked' : ''}>
      <span class='list__text ${isCheked ? 'done' : ''}'>${name}</span>
    </label>
    <button class='close'>x</button>
  </li>
  `;
}

function loadAndRender() {
  showLoader();

  loadData().then(renderTodos).finally(hideLoader);
}

function loadData() {
  return fetchTodos().then(data => {
    items = data;
  });
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
  renderTodos();
}

function onSubmitForm(e) {
  e.preventDefault();

  const inputValue = refs.form.elements.text.value;
  if (!inputValue) return;

  const item = {
    name: inputValue,
    isCheked: false,
  };

  showLoader();
  createTodo(item)
    .then(data => {
      items.push(data);
    })
    .then(renderTodos)
    .then(resetForm)
    .finally(hideLoader);
}
//================================================

function deleteItem(id) {
  items = items.filter(el => el.id !== id);
}

function saveData() {}

function toogleItem(id) {
  items.map(el => {
    if (el.id === id) {
      el.isCheked = !el.isCheked;
    }
  });
}

function resetForm() {
  refs.form.reset();
}
//====================loader======================
function showLoader() {
  refs.loader.classList.add('show');
}

function hideLoader() {
  refs.loader.classList.remove('show');
}

//====================locale storage=====================================
// function updateLocaleStorage() {
//   localStorage.setItem('noteData', JSON.stringify(items));
// }

// function getItemsFromLS() {
//   const itemsData = localStorage.getItem('noteData');
//   if (!itemsData) return;

//   try {
//     items = JSON.parse(itemsData);
//   } catch (error) {
//     console.log(`ОШИБКА parse ${error.message}`);
//   }
// }
