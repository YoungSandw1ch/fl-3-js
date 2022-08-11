const items = [
  { id: '1', name: 'bread', isCheked: true },
  { id: '2', name: 'potato', isCheked: false },
  { id: '3', name: 'tomato', isCheked: true },
  { id: '4', name: 'chery', isCheked: false },
  { id: '5', name: 'pork', isCheked: true },
];

const refs = {
  title: document.querySelector('.title'),
  list: document.querySelector('ol'),
  form: document.querySelector('.form'),
};

createList(items);

refs.list.addEventListener('change', onItemSelect);
refs.form.addEventListener('submit', onSubmitBtnAddItem);

function createList(items) {
  const itemsMarkup = items.map(createItem).join('');

  refs.list.innerHTML = '';
  refs.list.insertAdjacentHTML('afterbegin', itemsMarkup);
}

function createItem({ name, isCheked, id }) {
  const item = `
  <li class='item' id='${id}'>
    <label class='label'>
      <input type="checkbox" ${isCheked ? 'checked' : ''}>
      <span class='list__text'>${name}</span>
    </label>
    <button class='close'>x</button>
  </li>
  `;
  return item;
}

function onItemSelect(e) {
  const listItem = e.target.closest('li');
  console.log(listItem.id);
  items.map(el => (el.id === listItem.id ? (el.isCheked = !el.isCheked) : el));
}

function onSubmitBtnAddItem(e) {
  e.preventDefault();
  const inputRef = document.querySelector('[name="text"]');
  const item = {
    id: Date.now().toString(),
    name: inputRef.value,
    isCheked: false,
  };

  items.push(item);
  refs.form.reset();

  createList(items);
}

function isDone(items) {
  const listItems = document.querySelectorAll('.list__text');
}
