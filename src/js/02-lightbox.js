import { galleryItems } from './gallery-items.js';

const galleryRef = document.querySelector('.gallery');
const galleryItemsMarkup = createItemsMarkup(galleryItems);

galleryRef.insertAdjacentHTML('beforeend', galleryItemsMarkup);
galleryRef.addEventListener('click', onGalleryImgClick);
var galleyLightbox = new SimpleLightbox('.gallery a', { captionsData: 'alt' });

function createItemsMarkup(items) {
  return items
    .map(
      ({ preview, original, description }) => `
        <a class="gallery__item" href="${original}">
          <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>`,
    )
    .join('');
}

function onGalleryImgClick(e) {
  e.preventDefault();
  if (!e.target.classList.contains('gallery__image')) return;

  galleyLightbox.open(e.target);
}
