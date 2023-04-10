import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector('.gallery');


const markup =
    galleryItems.map(({ preview, original, description }) =>
    
    `<li class="gallery__item")>
        <a class="gallery__link" href= '${original}'>
            <img
                class="gallery__image"
                src='${preview}'
                data-source='${original}'
                alt='${description}'
            />
        </a>
    </li>`
    ).join('');


galleryContainer.insertAdjacentHTML("beforeend", markup);

galleryContainer.addEventListener('click', openModalWindow);

function openModalWindow (event) {
    event.preventDefault();
    
    if (event.target.nodeName !== "IMG") {
    return;
  }

    const instance =
        basicLightbox.create
            (`<img src = '${event.target.dataset.source}' 
            width = '800' heigth = '600'>`);

    instance.show();
  
};

