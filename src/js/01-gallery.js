import { galleryItems } from './gallery-items.js';

const galleryRef = document.querySelector('.gallery');
const galleryItemsMarkup = createGalleryItemsMarkup(galleryItems);
let instance = 0;

galleryRef.insertAdjacentHTML('beforeend', galleryItemsMarkup);
galleryRef.addEventListener('click', onPreviewImgClick);

function createGalleryItemsMarkup(items) {
  return items
    .map(
      ({ preview, original, description }) => `
  <div class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </a>
  </div> 
  `,
    )
    .join('');
}

function onPreviewImgClick(e) {
  e.preventDefault();
  if (!e.target.classList.contains('gallery__image')) return;

  instance = createInstance(e);
  instance.show();
  addBodyKeyPressListener();
}

function createInstance(e) {
  return basicLightbox.create(
    `
    <img src="${e.target.dataset.source}">
`,
    { onClose: removeBodyKeyPressListener }, //обьект настроек задача которого выполнить функцию перед закрытием модалки
  );
}

function onEscapePress(e) {
  console.log(`Нажатие ${e.code} для контроля роботы слушателя клавиатуры`);
  if (e.code !== 'Escape') return;
  instance.close();
}

function addBodyKeyPressListener() {
  document.body.addEventListener('keydown', onEscapePress);
}

function removeBodyKeyPressListener() {
  document.body.removeEventListener('keydown', onEscapePress);
}
