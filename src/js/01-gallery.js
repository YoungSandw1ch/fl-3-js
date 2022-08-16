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
  const img = e.target;
  if (!img.classList.contains('gallery__image')) return;

  instance = basicLightbox.create(`
    <img src="${img.dataset.source}">
`);
  instance.show();
  addBodyKeyPressListener();
}

function onEscapePress(e) {
  if (e.code !== 'Escape') return;
  console.log(e.code);

  instance.close();
  removeBodyKeyPressListener();
}

function addBodyKeyPressListener() {
  document.body.addEventListener('keydown', onEscapePress);
}

function removeBodyKeyPressListener() {
  document.body.removeEventListener('keydown', onEscapePress);
}
