const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat'
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish'
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running'
  }
]

const listRef = document.querySelector('.gallery');

const makeGalleryItems = images.map(image => `<li class="item"><img width="500" src="${image.url}" alt="${image.alt}"></li>`).join('');

listRef.insertAdjacentHTML("beforeend", makeGalleryItems);


// const galery = document.querySelector('.gallery')

// const elemImg = images
//   .map(({ url }) => {
//     return `<li><img src="${url}" alt=""></li>`
//   })
//   .join('')

// galery.insertAdjacentHTML('beforeend', elemImg)
