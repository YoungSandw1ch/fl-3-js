import { galleryItems } from './gallery-items.js';
// import * as basicLightbox from 'basiclightbox';

const refs = {
  gallery: document.querySelector('.gallery'),
};
const galleryItemsMarkup = createGalleryItemsMarkup(galleryItems);

refs.gallery.insertAdjacentHTML('beforeend', galleryItemsMarkup);
refs.gallery.addEventListener('click', onPreviewImgClick);

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
  if (!img.classList.contains(gallery__image)) return;

  const instance = basicLightbox.create(`
    <img src="${img.dataset.source}">
`);

  instance.show();
}
