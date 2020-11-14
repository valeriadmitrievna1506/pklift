$('#input-tel').mask('+7 (999) 999 99 99');
$('#input-tel-m').mask('+7 (999) 999 99 99');

$(function() {
    $('.scrollup').click(function() {
      $("html, body").animate({
        scrollTop:0
      },600);
    });
  });

let menuClick = 0;

$('#burger-icon').click(function() {
  $('#dropdown-burger').slideToggle(700);
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
  $(dropdownMenuPoint[0].childNodes[2]).slideToggle(700);
});

dropdownMenuPoint[1].addEventListener('click', function() {
  $(dropdownMenuPoint[1].childNodes[2]).slideToggle(700);
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