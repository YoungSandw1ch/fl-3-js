import {
  fetchTodos,
  updateTodo,
  deleteTodo,
  createTodo,
} from './08-api-todos.js';

let items = [];

const refs = {
  list: document.querySelector('.list'),
  form: document.querySelector('.form'),
  loader: document.querySelector('.loader'),
};

loadAndRender();

refs.list.addEventListener('click', onListItemClick);
refs.form.addEventListener('submit', onSubmitForm);

//================== handlers ====================
function onListItemClick(e) {
  if (e.target === e.currentTarget) return;

  const listItem = e.target.closest('li');
  const id = listItem.id;

  if (e.target.nodeName === 'BUTTON') {
    showLoader();
    deleteTodo(id).then(deleteItem(id)).then(renderTodos).finally(hideLoader);
  }

  if (e.target.nodeName === 'INPUT') {
    const data = toogleItem(id);
    updateTodo(id, data);

    const text = e.target.nextElementSibling;
    text.classList.toggle('done');
    listItem.classList.toggle('item--changeBg');
  }
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
//===================load and render===============
function renderTodos() {
  const itemsMarkup = items.map(createItemMarkup).join('');

  refs.list.innerHTML = '';
  refs.list.insertAdjacentHTML('afterbegin', itemsMarkup);
}

function createItemMarkup({ name, isCheked, id }) {
  return `
  <li class='item ${isCheked ? 'item--changeBg' : ''}' id='${id}'>
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
//==================work with items===============

function deleteItem(id) {
  items = items.filter(el => el.id !== id);
}

function toogleItem(id) {
  const toggledItemStatus = {};

  items.map(el => {
    if (el.id === id) {
      el.isCheked = !el.isCheked;
      toggledItemStatus.isCheked = el.isCheked;
    }
  });

  return toggledItemStatus;
}
//====================loader======================
function showLoader() {
  refs.loader.classList.add('show');
}

function hideLoader() {
  refs.loader.classList.remove('show');
}
//====================common funk================
function resetForm() {
  refs.form.reset();
}
