import { galleryItems } from './gallery-items.js';
import SimpleLightbox from 'simplelightbox';

const galleryRef = document.querySelector('.gallery');
const galleryItemsMarkup = createItemsMarkup(galleryItems);

galleryRef.insertAdjacentHTML('beforeend', galleryItemsMarkup);

const galleyLightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

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
