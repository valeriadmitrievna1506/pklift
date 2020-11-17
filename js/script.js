$('#input-tel').mask('+7 (999) 999 99 99');
$('#input-tel-m').mask('+7 (999) 999 99 99');


  $(function() {
    // при нажатии на кнопку scrollup
    $('.scrollup').click(function() {
      // переместиться в верхнюю часть страницы
      $("html, body").animate({
        scrollTop:0
      },600);
    })
  })
  // при прокрутке окна (window)
  $(window).scroll(function() {
    // если пользователь прокрутил страницу более чем на 200px
    if ($(this).scrollTop()>200) {
      // то сделать кнопку scrollup видимой
      $('.scrollup').fadeIn(0);
    }
    // иначе скрыть кнопку scrollup
    else {
      $('.scrollup').fadeOut(300);
    }
  });

let menuClick = 0;

$('#burger-icon').click(function() {
  $('#dropdown-burger').slideToggle(300);
  menuClick += 1;

  if (menuClick % 2 == 1) {
    $('#burger-icon')[0].classList = 'opened';
  }
  else {
    $('#burger-icon')[0].classList = 'closed';
  }

});

let dropdownMenuPoint = document.querySelectorAll('.dropdown-burger > div');


dropdownMenuPoint[0].addEventListener('click', function() {
  $(dropdownMenuPoint[0].childNodes[2]).slideToggle(300);
});

dropdownMenuPoint[1].addEventListener('click', function() {
  $(dropdownMenuPoint[1].childNodes[2]).slideToggle(300);
});

$('.modal-button').click(function() {
  $('#MODAL').fadeToggle(700);
  document.querySelector('body').classList = "non-scroll";
});

$('#MODAL').click (function () {

  if (event.target != $('#modal-window')[0]
  && event.target != $('#modal-window > p:first-of-type')[0]
  && event.target != $('#modal-window > input')[0]
  && event.target != $('#modal-window > input')[1]
  && event.target != $('#modal-window > input')[2]
  && event.target != $('#modal-window > input')[3]
  || event.target == $('#modal-window > p:last-of-type')[0]) {
    $('#MODAL').fadeToggle(700);
    document.querySelector('body').classList = "";
  }
});

var bannerSwiper = new Swiper('.banner-container', {
  speed: 400,
  spaceBetween: 0,
  loop: true,
  navigation: {
    nextEl: '.banner-next',
    prevEl: '.banner-prev',
  },
  autoplay: {
    delay: 2000,
  },
});