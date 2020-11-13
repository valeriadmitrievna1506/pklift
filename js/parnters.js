var partnersMainPageSwiper = new Swiper('.partners-swiper', {
    loop: true,
    speed: 400,
    spaceBetween: 30,
    slidesPerView: 4,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        1250: {
          slidesPerView: 4,
          spaceBetween: 30,
        },
        1100: {
            slidesPerView: 3,
            spaceBetween: screen.width * 0.02,
          },
        700: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        100: {
            slidesPerView: 1,
            spaceBetween: 5,
        }
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