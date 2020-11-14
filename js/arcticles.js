let tabs = {
    'nav-1': '1-page',
    'nav-2': '2-page',
    'nav-3': '3-page',
    'nav-4': '4-page',
    'nav-5': '5-page',
    'nav-6': '6-page',
    'nav-7': '7-page',
    'nav-8': '8-page',
    'nav-9': '9-page',
    'nav-10': '10-page',
    'nav-11': '11-page',
    'nav-12': '12-page',
    'nav-13': '13-page',
    'nav-14': '14-page',
    'nav-15': '15-page',
    'nav-16': '16-page',
    'nav-17': '17-page',
    'nav-18': '18-page',
    'nav-19': '19-page',
    'nav-20': '20-page',
    'nav-21': '21-page',
    'nav-22': '22-page',
    'nav-23': '23-page',
};
let tabsKeys = Object.keys(tabs);

var currentNumber = { 
    'i' : 1,
    'el': '',
};
currentNumber['el'] = tabsKeys[currentNumber['i'] - 1];

$('.navigation-number').click(function (event) {
    clearAll();

    // ставим фокус на блок\пункт, который был выбран при нажатии
    event.target.classList = 'navigation-number flex nn-highlighted';
    $('#' + tabs[$(event.target).attr('id')]).addClass('focused-block');

    currentNumber['el'] = $(event.target).attr('id');
    currentNumber['i'] = $(event.target)[0].innerText;
});

let buttonArrows = document.querySelectorAll('.arrow');

// PREV PAGE
$(buttonArrows[0]).click(function () {
    if (currentNumber['i'] > 1) {
        clearAll();

        currentNumber['i'] = parseInt(currentNumber['i']) - 1;
        currentNumber['el'] = tabsKeys[currentNumber['i'] - 1];

        $('#' + currentNumber['el'])[0].classList = 'navigation-number flex nn-highlighted';

        $('#' + tabs[currentNumber['el']]).addClass('focused-block');
    }
});

// NEXT PAGE
$(buttonArrows[1]).click(function () {
    if (currentNumber['i'] <= 22) {
        clearAll();

        currentNumber['i'] = parseInt(currentNumber['i']) + 1;
        currentNumber['el'] = tabsKeys[currentNumber['i'] - 1];

        $('#' + currentNumber['el'])[0].classList = 'navigation-number flex nn-highlighted';

        $('#' + tabs[currentNumber['el']]).addClass('focused-block');
        console.log($('#' + tabs[currentNumber['el']]));

    }
});

let clearAll = function () {
    let navTabs = document.querySelectorAll('.navigation-number');

    // удаляем фокус со всех блоков и пунктов навигации
    navTabs.forEach(element => {
        if (element.classList == 'navigation-number flex nn-highlighted') {
            element.classList = 'navigation-number flex';
            $('#' + tabs[$(element).attr('id')]).removeClass('focused-block')
        }
    });
}