window.addEventListener('DOMContentLoaded', function () {
    'use strict';

    const slide = (el) => {
        if (el.href === undefined) { return; }
        let elems = el.href.split('#')[1];
        document.querySelector('#' + elems).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    };

    const countTimer = (deadline) => {
        let timeHours = document.querySelector('#timer-hours'),
            timeMinutes = document.querySelector('#timer-minutes'),
            timeSeconds = document.querySelector('#timer-seconds');


        const getTimeRemaining = () => {
            let dateStop = new Date(deadline).getTime(),
                dateNow = new Date().getTime(),
                timeRemaining = (dateStop - dateNow) / 1000,
                seconds = Math.floor(timeRemaining % 60),
                minutes = Math.floor((timeRemaining / 60) % 60),
                hours = Math.floor(timeRemaining / 60 / 60);
            return { timeRemaining, seconds, minutes, hours };

        };

        const upDateClock = () => {
            let timer = getTimeRemaining();
            if (timer.hours < 0 && timer.minutes < 0 && timer.seconds < 0) {
                timer.hours = 0;
                timer.minutes = 0;
                timer.seconds = 0;
            }

            timeHours.textContent = timer.hours;
            timeMinutes.textContent = timer.minutes;
            timeSeconds.textContent = timer.seconds;

            if (timer.hours < 10) {
                timeHours.textContent = `0${timer.hours}`;

            }
            if (timer.minutes < 10) {
                timeMinutes.textContent = `0${timer.minutes}`;

            }
            if (timer.seconds < 10) {
                timeSeconds.textContent = `0${timer.seconds}`;

            }

            if (timer.timeRemaining > 0) {
                setInterval(upDateClock, 1000);
            }

        };
        upDateClock();

    };

    countTimer('23 april 2020');

    const toggleMenu = () => {
        const btnMenu = document.querySelector('.menu'),
            menu = document.querySelector('menu'),
            closeBtn = document.querySelector('.close-btn'),
            menuItem = menu.querySelectorAll('ul>li');
        const handlerMenu = (event) => {
            event.preventDefault();
            if (event.target.tagName === 'A' && event.target.className !== 'close-btn') {
                slide(event.target);
            }
            menu.classList.toggle('active-menu');
            if (!menu.style.transform || menu.style.transform === `translate(-100%)`) {
                menu.style.transform = `translate(0)`;
            } else {
                menu.style.transform = `translate(-100%)`;
            }
        };
        btnMenu.addEventListener('click', handlerMenu);
        closeBtn.addEventListener('click', handlerMenu);
        menuItem.forEach((elem) => elem.addEventListener('click', handlerMenu));
    };
    toggleMenu();

    const togglePopUp = () => {
        const popup = document.querySelector('.popup'),
            popupBtn = document.querySelectorAll('.popup-btn'),
            popUpClose = document.querySelector('.popup-close');
        let count = 0;

        popupBtn.forEach((elem) => {

            elem.addEventListener('click', () => {

                let count = -100;
                let pop;
                const start = () => {
                    popup.style.display = 'block';
                };

                const timer = () => {
                    pop = requestAnimationFrame(timer);
                    if (count === 0 || document.documentElement.clientWidth < 700) {
                        cancelAnimationFrame(pop);
                    }
                    count += 5;
                    popup.setAttribute('style', `display: block;transform: translateY(${count}%);
                    background-color:rgba(255, 255, 255, 0);`);
                    if (count === 0) {
                        cancelAnimationFrame(pop);
                    }
                };
                if (document.documentElement.clientWidth < 768) {
                    start();
                } else {
                    pop = requestAnimationFrame(timer);
                }
            });

        });
        popUpClose.addEventListener('click', () => {
            popup.style.display = 'none';
        });
    };
    togglePopUp();

    const mainDown = () => {
        const btnDown = document.querySelector('a[href="#service-block"]');
        btnDown.addEventListener('click', (event) => {
            event.preventDefault();
            slide(btnDown);
        });
    };
    mainDown();


});