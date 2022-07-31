const items = [
  { id: 1, name: 'bread', isCheked: true },
  { id: 2, name: 'potato', isCheked: false },
  { id: 3, name: 'tomato', isCheked: true },
  { id: 4, name: 'chery', isCheked: false },
  { id: 5, name: 'pork', isCheked: true },
];

const refs = {
  body: document.querySelector('body'),
  title: document.querySelector('.title'),
};

const createForm = () => {
  const formEl = document.createElement('form');
  const labelEl = document.createElement('label');
  const spanEl = document.createElement('span');
  const inputEl = document.createElement('input');
  const buttonEl = document.createElement('button');

  spanEl.textContent = 'Add task';
  inputEl.type = 'text';
  inputEl.name = 'text';
  buttonEl.type = 'submit';
  buttonEl.textContent = ' + Add';

  labelEl.append(spanEl, inputEl);
  formEl.append(labelEl, buttonEl);
  refs.title.after(formEl);
};

const createList = items => {
  const listEl = document.createElement('ol');
  const itemsMarkup = items.map(createItem).join('');

  refs.body.appendChild(listEl);
  listEl.insertAdjacentHTML('afterbegin', itemsMarkup);
};

function createItem({ name, isCheked }) {
  const item = `
  <li>
    <label>
      <span>${name}</span>
      <input type="checkbox" ${isCheked ? 'checked' : ''}>
    </label>
  </li>
  `;
  return item;
}

createForm();
createList(items);
