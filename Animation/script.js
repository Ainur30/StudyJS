'use strict';
const body = document.querySelector('body');
const one = document.querySelector('.one');
let button = document.querySelector('.button');
let reset = document.querySelector('.reset');
let k = 0;
let n = 0;
let m = 0;
let move;
let animate = function () {
    move = requestAnimationFrame(animate);
    k++;
    if (k < 300) {
        m++;
        one.style.top = m + 'px';
    } else if (k < 600) {
        body.setAttribute('style', 'background-color: black');
        n++;
        one.style.right = n + 'px';
    } else if (k < 900) {
        body.setAttribute('style', 'background-color: purple');
        m--;
        one.style.top = m + 'px';
    } else if (k < 1200) {
        body.setAttribute('style', 'background-color: blue');
        n--;
        one.style.right = n + 'px';

    } else {
        cancelAnimationFrame(move);
    }
};
let start = false;
button.addEventListener('click', function () {
    if (start) {
        button.textContent = 'Пауза';
        move = requestAnimationFrame(animate);
        start = false;
    } else {
        button.textContent = 'Запуск';
        cancelAnimationFrame(move);
        start = true;
    }

});
reset.addEventListener('click', function () {


    one.style.top = 0;
    one.style.right = 0;
    start = false;
    body.setAttribute('style', 'background-color: blue');
    button.textContent = 'Запуск';
    k = 0;
    n = 0;
    m = 0;
    cancelAnimationFrame(move);


});
