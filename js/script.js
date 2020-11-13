$('#input-tel').mask('+7 (999) 999 99 99');

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

