import SimpleLightbox from "simplelightbox";

// console.log(SimpleLightbox);

const images = [
  {
    alt_description: 'Elephant Black-And-White photo',
    urls: {
      full: 'https://cdn.pixabay.com/photo/2017/10/20/10/58/elephant-2870777_1280.jpg',
      preview: 'https://cdn.pixabay.com/photo/2017/10/20/10/58/elephant-2870777_640.jpg'
    },
  },
  {
    alt_description: 'Giraffe Zoo photo',
    urls: {
      full: 'https://cdn.pixabay.com/photo/2018/04/23/14/23/giraffe-3344366_1280.jpg',
      preview: 'https://cdn.pixabay.com/photo/2018/04/23/14/23/giraffe-3344366_640.jpg'
    },
  },
  {
    alt_description: 'Rhinoceros Gray Animal photo',
    urls: {
      full: 'https://cdn.pixabay.com/photo/2016/11/18/22/26/rhinoceros-1837164_1280.jpg',
      preview: 'https://cdn.pixabay.com/photo/2016/11/18/22/26/rhinoceros-1837164_640.jpg'
    },
  },
  {
    alt_description: 'Dog Jack Russel Terrier photo',
    urls: {
      full: 'https://cdn.pixabay.com/photo/2022/08/28/18/03/dog-7417233_1280.jpg',
      preview: 'https://cdn.pixabay.com/photo/2022/08/28/18/03/dog-7417233_640.jpg'
    },
  },
  {
    alt_description: 'Iceland Arctic Fox photo',
    urls: {
      full: 'https://cdn.pixabay.com/photo/2017/01/14/12/59/iceland-1979445_1280.jpg',
      preview: 'https://cdn.pixabay.com/photo/2017/01/14/12/59/iceland-1979445_640.jpg'
    },
  },
  {
    alt_description: 'Raccoon Animal photo',
    urls: {
      full: 'https://cdn.pixabay.com/photo/2019/08/01/12/19/raccoon-4377383_1280.jpg',
      preview: 'https://cdn.pixabay.com/photo/2019/08/01/12/19/raccoon-4377383_640.jpg'
    },
  },
  {
    alt_description: 'Fox Nature photo',
    urls: {
      full: 'https://cdn.pixabay.com/photo/2015/04/10/01/41/fox-715588_1280.jpg',
      preview: 'https://cdn.pixabay.com/photo/2015/04/10/01/41/fox-715588_640.jpg'
    },
  },
  {
    alt_description: 'Leopard Animal photo',
    urls: {
      full: 'https://cdn.pixabay.com/photo/2014/11/03/17/40/leopard-515509_1280.jpg',
      preview: 'https://cdn.pixabay.com/photo/2014/11/03/17/40/leopard-515509_640.jpg'
    },
  },
  {
    alt_description: 'Llama Alpaca photo',
    urls: {
      full: 'https://cdn.pixabay.com/photo/2021/11/09/18/51/llama-6782140_1280.jpg',
      preview: 'https://cdn.pixabay.com/photo/2021/11/09/18/51/llama-6782140_640.jpg'
    },
  },
];

const refs = {
  galleryList: document.querySelector('.js-gallery-list'),
};

// console.log(refs);

const createGalleryCardTemplate = imgInfo => {
  return `
    <li class="gallery-list-item">
      <a href="${imgInfo.urls.full}" class="gallery-list-link">
      <img src="${imgInfo.urls.preview}" alt="${imgInfo.alt_description}" class="gallery-list-img">
      </a>
  </li>
  `;
};

const galleryCardsTemplate = images.map(img => createGalleryCardTemplate(img)).join('');

// console.log(createGalleryCardTemplate(images[0]));
// console.log(createGalleryCardTemplate(images[1]));

// console.log(galleryCardsTemplate);

refs.galleryList.innerHTML = galleryCardsTemplate;

new SimpleLightbox('.js-gallery-list a', {
  nav: true,
  overlayOpacity: 0.5,
  captionsData: 'alt',
  captionDelay: 500,
});
