const i=[{preview:"https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg",description:"Hokkaido Flower"},{preview:"https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg",description:"Container Haulage Freight"},{preview:"https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg",description:"Aerial Beach View"},{preview:"https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg",original:"https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg",description:"Flower Blooms"},{preview:"https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg",original:"https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg",description:"Alpine Mountains"},{preview:"https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg",description:"Mountain Lake Sailing"},{preview:"https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",description:"Alpine Spring Meadows"},{preview:"https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",description:"Nature Landscape"},{preview:"https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",description:"Lighthouse Coast Sea"}],e=document.querySelector(".gallery");let a;if("loading"in HTMLImageElement.prototype)a=i.map((({preview:i,original:e,description:a})=>`\n        <a class="gallery__item" href="${e}">\n          <img loading="lazy" class="gallery__image" src="${i}" alt="${a}" width="510" height="340"/>\n        </a>\n        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit illum, quaerat, ex deserunt, debitis excepturi doloribus a enim molestias harum dolore odio sequi tempore recusandae aliquid tempora laudantium earum ipsam quisquam asperiores dicta dolores? Qui molestias magni amet impedit consectetur, error quis aspernatur ullam temporibus voluptatum harum animi reiciendis adipisci?</p>\n`)).join("");else{a=function(i){return i.map((({preview:i,original:e,description:a})=>`\n        <a class="gallery__item" href="${e}">\n          <img class="gallery__image" data-src="${i}" alt="${a}" width="510" height="340"/>\n        </a>\n        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit illum, quaerat, ex deserunt, debitis excepturi doloribus a enim molestias harum dolore odio sequi tempore recusandae aliquid tempora laudantium earum ipsam quisquam asperiores dicta dolores? Qui molestias magni amet impedit consectetur, error quis aspernatur ullam temporibus voluptatum harum animi reiciendis adipisci?</p>\n`)).join("")}(i);const e=function(){const i=document.createElement("script");return i.src="https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js",i.integrity="sha512-q583ppKrCRc7N5O0n2nzUiJ+suUv7Et1JGels4bXOaMFQcamPk9HjdUknZuuFjBNs7tsMuadge5k9RzdmO+1GQ==",i.crossorigin="anonymous",i.referrerpolicy="no-referrer",i}();document.body.appendChild(e)}e.insertAdjacentHTML("beforeend",a);new SimpleLightbox(".gallery a",{captionsData:"alt",captionDelay:250});
//# sourceMappingURL=03-lazyload-gallery.45e1e813.js.map
