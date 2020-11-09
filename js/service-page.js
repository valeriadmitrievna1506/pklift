// swiper 1

var serviceSwiper1 = new Swiper('#swc1', {
    speed: 400,
    slidesPerView: 1,
    loop: true,
    navigation: {
        prevEl: '.swiper-button-prev',
        nextEl: '.swiper-button-next',
    },
});

const swiperPrev1 = document.querySelector('#prev1');
const swiperNext1 = document.querySelector('#next1');

swiperPrev1.addEventListener('click', function() {
    serviceSwiper1.slidePrev();
});
swiperNext1.addEventListener('click', function() {
    serviceSwiper1.slideNext();
});

// swiper 2

var serviceSwiper2 = new Swiper('#swc2', {
    speed: 400,
    slidesPerView: 1,
    loop: true,
    navigation: {
        prevEl: '.swiper-button-prev',
        nextEl: '.swiper-button-next',
    },
});

const swiperPrev2 = document.querySelector('#prev2');
const swiperNext2 = document.querySelector('#next2');

swiperPrev2.addEventListener('click', function() {
    serviceSwiper2.slidePrev();
});
swiperNext2.addEventListener('click', function() {
    serviceSwiper2.slideNext();
});

// swiper 3

var serviceSwiper3 = new Swiper('#swc3', {
    speed: 400,
    slidesPerView: 1,
    loop: true,
    navigation: {
        prevEl: '.swiper-button-prev',
        nextEl: '.swiper-button-next',
    },
});

const swiperPrev3 = document.querySelector('#prev3');
const swiperNext3 = document.querySelector('#next3');

swiperPrev3.addEventListener('click', function() {
    serviceSwiper3.slidePrev();
});
swiperNext3.addEventListener('click', function() {
    serviceSwiper3.slideNext();
});