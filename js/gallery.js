let tabs = {
    'autos-nav': 'autos',
    'lifts-nav': 'lifts',
    'warehouse-nav': 'warehouse',
    'workers-nav': 'workers',
};

$('.gallery .container nav p').click(function (event) {
    let navTabs = document.querySelectorAll('.gallery .container nav p');
    navTabs.forEach(element => {
        if (element.classList == 'focused') {
            element.classList = '';
            $('#' + tabs[$(element).attr('id')]).removeClass('focused-block')
        }
    });
    event.target.classList = 'focused';
    $('#' + tabs[$(event.target).attr('id')]).addClass('focused-block');
});

$(function(){
    $("a.colorbox").colorbox({
        current:"Фото {current} из {total}",
        width: "100%",
        height: "70%"
    });
});