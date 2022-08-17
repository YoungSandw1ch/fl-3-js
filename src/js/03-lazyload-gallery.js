import { galleryItems } from './gallery-items.js';

const galleryRef = document.querySelector('.gallery');
let galleryMarkup;

//------browser fitches detection ----------------

if ('loading' in HTMLImageElement.prototype) {
  galleryMarkup = createImgsMarkupLoading(galleryItems);
} else {
  galleryMarkup = createImgsMarkupDataSrc(galleryItems);

  const script = createScriptMarkup();
  document.body.appendChild(script);
}
//-------------------------------------------------

galleryRef.insertAdjacentHTML('beforeend', galleryMarkup);

const galleryLightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

function createImgsMarkupLoading(items) {
  return items
    .map(
      ({ preview, original, description }) => `
        <a class="gallery__item" href="${original}">
          <img loading="lazy" class="gallery__image" src="${preview}" alt="${description}" width="510" height="340"/>
        </a>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit illum, quaerat, ex deserunt, debitis excepturi doloribus a enim molestias harum dolore odio sequi tempore recusandae aliquid tempora laudantium earum ipsam quisquam asperiores dicta dolores? Qui molestias magni amet impedit consectetur, error quis aspernatur ullam temporibus voluptatum harum animi reiciendis adipisci?</p>
`,
    )
    .join('');
}
function createImgsMarkupDataSrc(items) {
  return items
    .map(
      ({ preview, original, description }) => `
        <a class="gallery__item" href="${original}">
          <img class="gallery__image" data-src="${preview}" alt="${description}" width="510" height="340"/>
        </a>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit illum, quaerat, ex deserunt, debitis excepturi doloribus a enim molestias harum dolore odio sequi tempore recusandae aliquid tempora laudantium earum ipsam quisquam asperiores dicta dolores? Qui molestias magni amet impedit consectetur, error quis aspernatur ullam temporibus voluptatum harum animi reiciendis adipisci?</p>
`,
    )
    .join('');
}
function createScriptMarkup() {
  const script = document.createElement('script');
  script.src =
    'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';
  script.integrity =
    'sha512-q583ppKrCRc7N5O0n2nzUiJ+suUv7Et1JGels4bXOaMFQcamPk9HjdUknZuuFjBNs7tsMuadge5k9RzdmO+1GQ==';
  script.crossorigin = 'anonymous';
  script.referrerpolicy = 'no-referrer';
  return script;
}
