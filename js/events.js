const refs = {
  box: document.querySelector('.box'),
};
let tags = new Set();

refs.box.addEventListener('click', onBtnClick);

function onBtnClick(e) {
  if (e.target.nodeName !== 'BUTTON') return;

  const btn = e.target;
  const value = btn.dataset.value;
  const isBtnActive = btn.classList.contains('btn--active');

  if (isBtnActive) {
    //есть тег в колекции? уже есть значит убираем его
    tags.delete(value);
  } else {
    // нету тега в коллекции ? значит добавим его
    tags.add(value);
  }

  e.target.classList.toggle('btn--active');
  console.log(tags);
}
