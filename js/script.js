var galleryMainPageSwiper = new Swiper('.gallery-swiper', {
    speed: 400,
    loop: true,
    spaceBetween: 30,
    slidesPerView: 'auto',
    loopedSlides: 4,
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

$('#input-tel').mask('+7 (999) 999 99 99');

var partnersMainPageSwiper = new Swiper('.partners-swiper', {
    loop: true,
    speed: 400,
    loopedSlides: 4,
    slidesPerView: 'auto',
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
  });

const swiperPrevP = document.querySelector('#swiperPrevP');
const swiperNextP = document.querySelector('#swiperNextP');

swiperPrevP.addEventListener('click', function() {
    partnersMainPageSwiper.slidePrev();
});
swiperNextP.addEventListener('click', function() {
    partnersMainPageSwiper.slideNext();
});