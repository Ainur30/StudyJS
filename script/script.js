window.addEventListener('DOMContentLoaded', function () {
    'use strict';
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

    countTimer('27 april 2020');

    const toggleMenu = () => {
        const btnMenu = document.querySelector('.col-3'),
            menu = document.querySelector('menu'),
            menuItem = menu.querySelectorAll('ul>li');

        const showMenu = () => {
            menu.classList.toggle('active-menu');
            if (!menu.style.transform || menu.style.transform === `translate(-100%)`) {
                menu.style.transform = `translate(0)`;
            } else {
                menu.style.transform = `translate(-100%)`;
            }
        };

        btnMenu.addEventListener('click', (event) => {
            let target = event.target;

            if (target.closest('.col-3')) {
                showMenu();
                return;
            }

        });
        menu.addEventListener('click', (event) => {
            let target = event.target;
            if (target.classList.contains('close-btn')) {
                showMenu();
            }
            target = target.closest('li');
            if (target) {
                menuItem.forEach((item) => {
                    if (item === target) {
                        showMenu();
                    }
                });
            }

        });

    };
    toggleMenu();

    const togglePopUp = () => {
        const popup = document.querySelector('.popup'),
            popupBtn = document.querySelectorAll('.popup-btn'),
            popUpClose = document.querySelector('.popup-close');

        popup.addEventListener('click', (event) => {
            let target = event.target;
            if (target.classList.contains('popup-close')) {
                popup.style.display = 'none';
            } else {
                target = target.closest('.popup-content');
                if (!target) {
                    popup.style.display = 'none';
                }
            }

        });

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

    };

    togglePopUp();

    //tab

    const tabs = () => {
        const tabHeader = document.querySelector('.service-header'),
            tab = tabHeader.querySelectorAll('.service-header-tab'),
            tabContent = document.querySelectorAll('.service-tab');
        const toggleTabContent = (index) => {
            for (let i = 0; i < tabContent.length; i++) {
                if (index === i) {
                    tab[i].classList.add('active');
                    tabContent[i].classList.remove('d-none');

                } else {
                    tab[i].classList.remove('active');
                    tabContent[i].classList.add('d-none');

                }
            }

        };
        tabHeader.addEventListener('click', (event) => {
            let target = event.target;
            target = target.closest('.service-header-tab');

            if (target) {

                tab.forEach((item, i) => {
                    if (item === target) {
                        toggleTabContent(i);
                    }
                });
            }

        });


    };
    tabs();


});