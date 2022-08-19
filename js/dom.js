const items = [
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

createList(items);

refs.list.addEventListener('change', onItemSelect);
refs.list.addEventListener('click', onCloseBtn);
refs.form.addEventListener('submit', onSubmitBtnAddItem);

function createList(items) {
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

function onItemSelect(e) {
  const listItem = e.target.closest('li');
  const span = e.target.nextElementSibling;

  items.map(el => {
    if (el.id === listItem.id) {
      el.isCheked = !el.isCheked;
      span.classList.toggle('done');
      listItem.classList.toggle('item--changeBg');
    }
  });
}

function onSubmitBtnAddItem(e) {
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

    createList(items);
  }
}

function onCloseBtn(e) {
  //если таргет именно кнопка (можна через класс getAttribute)
  if (e.target.nodeName === 'BUTTON') {
    const listItem = e.target.closest('li');
    //удалить этот елемент li
    listItem.remove();

    //удалить обьект продукта из массива
    items.map((el, i, a) => {
      if (el.id === listItem.id) {
        a.splice(i, 1);
      }
    });
  }
}
