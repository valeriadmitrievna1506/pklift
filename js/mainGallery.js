var galleryMainPageSwiper = new Swiper('.gallery-swiper', {
    loop: true,
    speed: 400,
    spaceBetween: 30,
    slidesPerView: 4,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        1360: {
          slidesPerView: 4,
          spaceBetween: 30,
        },
        1100: {
            slidesPerView: 3,
            spaceBetween: screen.width * 0.02,
          },
        850: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        100: {
            slidesPerView: 1,
            spaceBetween: 5,
        }
    },
  });

const swiperPrev = document.querySelector('#swiperPrev');
const swiperNext = document.querySelector('#swiperNext');

swiperPrev.addEventListener('click', function() {
    galleryMainPageSwiper.slidePrev();
});
swiperNext.addEventListener('click', function() {
    galleryMainPageSwiper.slideNext();
});