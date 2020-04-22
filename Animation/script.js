
'use strict';
const body = document.querySelector('body');
const one = document.querySelector('.one');
const button = document.querySelector('.button');
const reset = document.querySelector('.reset');
let k = 0;
let n = 0;
let m = 0;
let move;
const animate = function () {
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
        cancelAnimationFrame(move);
        start = false;
    } else {

        start = true;
        button.textContent = 'Запуск';
        move = requestAnimationFrame(animate);
    }

});
reset.addEventListener('click', () => {
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



