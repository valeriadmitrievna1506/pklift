var galleryMainPageSwiper = new Swiper('.gallery-swiper', {
    speed: 400,
    loop: true,
    spaceBetween: 30,
    slidesPerView: 4,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
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