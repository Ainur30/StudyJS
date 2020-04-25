window.addEventListener('DOMContentLoaded', function () {
    'use strict';
    const sliding = (elem) => {
        if (elem.href === undefined) { return; }
        let elems = elem.href.split('#')[1];
        document.querySelector(`#` + elems).scrollIntoView({
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

    countTimer('27 april 2020');

    const toggleMenu = () => {
        const btnMenu = document.querySelector('.col-3'),
            body = document.querySelector('body'),
            menu = document.querySelector('menu');

        const showMenu = () => {
            menu.classList.toggle('active-menu');
            if (!menu.style.transform || menu.style.transform === `translate(-100%)`) {
                menu.style.transform = `translate(0)`;
            } else {
                menu.style.transform = `translate(-100%)`;
            }
        };


        body.addEventListener('click', (event) => {
            let target = event.target;

            if (target.closest('.col-3')) {
                showMenu();
                return;
            }

            if (target.tagName === 'A' && target.className !== 'close-btn' &&
                target.className !== 'portfolio-btn next' &&
                target.className !== 'portfolio-btn prev') {
                event.preventDefault();
                sliding(target);
                menu.style.transform = `translate(-100%)`;
                return;
            }

            if ((target.closest('.menu') === null && target.closest('menu') === null) || target.className ===
                `close-btn`) {
                menu.style.transform = `translate(-100%)`;
                return;
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

    const mainDown = () => {
        const btnDown = document.querySelector('a[href="#service-block"]');
        btnDown.addEventListener('click', (event) => {
            event.preventDefault();
            sliding(btnDown);
        });
    };
    mainDown();

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


    //slider
    const slider = () => {
        const slide = document.querySelectorAll('.portfolio-item'),
            btn = document.querySelectorAll('.portfolio-btn'),
            dotsCont = document.querySelector('.portfolio-dots'),
            slider = document.querySelector('.portfolio-content');
        const dots = () => {
            for (let i = 0; i < slide.length; i++) {
                let dot = document.createElement('li');
                dot.classList.add('dot');
                dotsCont.append(dot);
            }
        };
        dots();
        let dot = document.querySelectorAll('.dot');
        dot[0].classList.add('dot-active');

        const prevSlide = (elem, index, strClass) => {
            elem[index].classList.remove(strClass);
        };
        const nextSlide = (elem, index, strClass) => {
            elem[index].classList.add(strClass);
        };
        let currentSlide = 0,
            interval;

        const autoPlaySlide = () => {
            prevSlide(slide, currentSlide, 'portfolio-item-active');
            prevSlide(dot, currentSlide, 'dot-active');
            currentSlide++;
            if (currentSlide >= slide.length) {
                currentSlide = 0;
            }
            nextSlide(slide, currentSlide, 'portfolio-item-active');
            nextSlide(dot, currentSlide, 'dot-active');
        };

        const startSlide = (time = 3000) => {
            interval = setInterval(autoPlaySlide, time);

        };

        const stopSlide = () => {
            clearInterval(interval);
        };
        slider.addEventListener('mouseover', (event) => {
            if (event.target.matches('.portfolio-btn') || event.target.matches('.dot')) {
                stopSlide();
            }

        });
        slider.addEventListener('mouseout', (event) => {
            if (event.target.matches('.portfolio-btn') || event.target.matches('.dot')) {
                startSlide(1000);
            }

        });

        slider.addEventListener('click', (event) => {
            event.preventDefault();
            let target = event.target;

            if (!target.matches('.portfolio-btn, .dot')) {
                return;
            }
            prevSlide(slide, currentSlide, 'portfolio-item-active');
            prevSlide(dot, currentSlide, 'dot-active');

            if (target.matches('#arrow-right')) {
                currentSlide++;
            } else if (target.matches('#arrow-left')) {
                currentSlide--;
            } else if (target.matches('.dot')) {
                dot.forEach((elem, index) => {
                    if (target === elem) {
                        currentSlide = index;
                    }
                });
            }
            if (currentSlide >= slide.length) {
                currentSlide = 0;
            }
            if (currentSlide < 0) {
                currentSlide = slide.length - 1;
            }
            nextSlide(slide, currentSlide, 'portfolio-item-active');
            nextSlide(dot, currentSlide, 'dot-active');
        });

        startSlide(1000);
    };

    slider();

});