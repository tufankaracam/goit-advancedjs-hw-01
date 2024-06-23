// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const uiGallery = document.querySelector('.gallery');

const loadImages = ()=>{
    const items = galleryItems.map(image=>`<li class="gallery-item">
    <a class="gallery-link" href="${image.original}">
    <img
      class="gallery-image"
      src="${image.preview}"
      data-source="${image.original}"
      alt="${image.description}"
    />
    </a>
    </li>`);

    uiGallery.insertAdjacentHTML('afterbegin',items.join(""));
}

loadImages();


var lightbox = new SimpleLightbox('.gallery a');