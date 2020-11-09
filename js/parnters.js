var partnersMainPageSwiper = new Swiper('.partners-swiper', {
    loop: true,
    speed: 400,
    spaceBetween: 30,
    slidesPerView: 4,
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