var navigationNumbers = document.querySelectorAll('.navigation-number');
var navigationArrows = document.querySelectorAll('button.arrow');

navigationArrows[0].addEventListener('click', function() {
    for (let i = 0; i < navigationNumbers.length; i++) {
        let currentNumberL = 0
        if (navigationArrows[i].classList == 'navigation-number flex nn-highlighted') {
            currentNumberL = i; 
        };
        navigationArrows[i].classList = 'navigation-number flex';
        if (currentNumberL == 1) {
            navigationArrows[currentNumberL].classList = 'navigation-number flex nn-highlighted';
        } else if (currentNumberL > 1) {
            navigationArrows[currentNumberL - 1].classList = 'navigation-number flex nn-highlighted';
        };
    }
});
navigationArrows[1].addEventListener('click', function() {
    for (let i = 0; i < navigationNumbers.length; i++) {
        let currentNumberR = 0;
        if (navigationArrows[i].classList == 'navigation-number flex nn-highlighted') {
            currentNumberR = i; 
        };
        navigationArrows[i].classList = 'navigation-number flex';
        if (currentNumberR == 5) {
            navigationArrows[currentNumberR].classList = 'navigation-number flex nn-highlighted';
        } else if (currentNumberR >= 1 && currentNumberR < 5)  {
            navigationArrows[currentNumberR + 1].classList = 'navigation-number flex nn-highlighted';
        };
    }
});