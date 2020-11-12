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
        400: {
          slidesPerView: 4,
          spaceBetween: 30,
        },
        300: {
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