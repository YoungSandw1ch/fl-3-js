// const refs = {
//   box: document.querySelector('.box'),
// };

// refs.box.addEventListener('click', onBtnClick);

/*
 *----выбор любого количества тегов и сбор их в колекцию
 */
// let tags = new Set();

// function onBtnClick(e) {
//   if (e.target.nodeName !== 'BUTTON') return;

//   const btn = e.target;
//   const value = btn.dataset.value;
//   const isBtnActive = btn.classList.contains('btn--active');

//   if (isBtnActive) {
//     //есть тег в колекции? уже есть значит убираем его
//     tags.delete(value);
//   } else {
//     // нету тега в коллекции ? значит добавим его
//     tags.add(value);
//   }

//   e.target.classList.toggle('btn--active');
//   console.log(tags);
// }

/*
 *----выбор только одного тега c возможностью отжать тег
 */

// function onBtnClick(e) {
//   if (e.target.nodeName !== 'BUTTON') return;

//   const activeBtn = document.querySelector('.btn--active');

//   if (activeBtn) {
//     activeBtn.classList.remove('btn--active');
//   }

//   if (activeBtn?.dataset?.value === e.target.dataset.value) {
//     activeBtn.classList.remove('btn--active');
//     console.log('Пожалуйста выберите тег');
//   } else {
//     e.target.classList.add('btn--active');
//     console.log(e.target.dataset.value);
//   }
// }

/*
 *----------------------просто повторил материал--------
 */
const box = document.querySelector('.box');
const selectedTags = new Set();

box.addEventListener('click', onBtnClick);

function onBtnClick(e) {
  if (e.target.nodeName !== 'BUTTON') return;

  const activeBtn = e.target;
  activeBtn.classList.toggle('btn--active');

  const isBtnActive = activeBtn.classList.contains('btn--active');
  const tag = activeBtn.dataset.value;

  if (!isBtnActive) {
    selectedTags.delete(tag);
  } else {
    selectedTags.add(tag);
  }
  // just try work with sets
  // const filteredTags = Array.from(selectedTags).filter(e => e !== '#js');
  // console.log('filtered: ', filteredTags);

  console.log(selectedTags);
}
