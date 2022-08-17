import { galleryItems } from './gallery-items.js';

const galleryRef = document.querySelector('.gallery');
const galleryMarkup = galleryItems
  .map(
    ({ preview, original, description }) => `
  <a class="gallery__item" href="${original}">
          <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>
`,
  )
  .join('');

galleryRef.insertAdjacentHTML('beforeend', galleryMarkup);

const galleryLightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
