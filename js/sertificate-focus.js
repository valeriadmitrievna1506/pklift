$('#1-doc-l > img').click(function () {
    console.log('click');
    $('#1-doc').fadeIn(500);
});
$('#2-doc-l > img').click(function () {
    $('#2-doc').fadeIn(500);
});
$('#3-doc-l > img').click(function () {
    $('#3-doc').fadeIn(500);
});


$('.big-doc').click(function () {
    if (event.target != document.querySelector('.big-doc > div')
     && event.target != document.querySelector('.big-doc > div > img')) {
        $('.big-doc').fadeOut(500);
    }
});