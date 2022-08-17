import { galleryItems } from './gallery-items.js';

const galleryRef = document.querySelector('.gallery');
const galleryItemsMarkup = createItemsMarkup(galleryItems);

galleryRef.insertAdjacentHTML('beforeend', galleryItemsMarkup);

function createItemsMarkup(items) {
  return items
    .map(
      ({ preview, original, description }) => `
      <div class="gallery__item">
        <a class="gallery__item" href="${original}">
          <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>
      </div> `,
    )
    .join('');
}
