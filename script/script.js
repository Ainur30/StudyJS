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
                    popup.setAttribute('style', `display: block;transform: translateY(${count}%);`);
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
            const length = slide.length;
            for (let i = 0; i < length; i++) {
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

    // our team
    const teamPhoto = () => {
        const img = document.querySelectorAll('.command__photo');
        img.forEach((elem) => {
            let photo;
            elem.addEventListener('mouseenter', (event) => {
                photo = event.target.src;
                event.target.src = event.target.dataset.img;

            });
            elem.addEventListener('mouseout', (event) => {

                event.target.src = photo;

            });
        });

    };
    teamPhoto();

    const checkInputs = () => {
        let calcItems = document.querySelectorAll('.calc-item');

        calcItems.forEach((elem) => {
            elem.addEventListener('keydown', (event) => {
                let target = event.target;
                if (event.keyCode === 69 || event.keyCode > 100) {
                    event.preventDefault();
                }
            });

        });

    };
    checkInputs();

    //calculator

    const calc = (price = 100) => {
        const calcBlock = document.querySelector('.calc-block'),
            calcType = document.querySelector('.calc-type'),
            calcSquare = document.querySelector('.calc-square'),
            calcDay = document.querySelector('.calc-day'),
            calcCount = document.querySelector('.calc-count'),
            totalValue = document.getElementById('total');
        let interval;

        const countSum = () => {
            let total = 0,
                countValue = 1,
                counter = 0,
                dayValue = 1;
            const typeValue = calcType.options[calcType.selectedIndex].value,
                squareValue = +calcSquare.value;

            if (calcCount.value > 1) {
                countValue += (calcCount.value - 1) / 10;
            }

            if (calcDay.value && calcDay.value < 5) {
                dayValue *= 2;
            } else if (calcDay.value && calcDay.value < 10) {
                dayValue *= 1.5;
            }
            if (typeValue && squareValue) {
                total = price * typeValue * squareValue * countValue * dayValue;
            }
            const getTotal = () => {
                counter += 50;
                totalValue.textContent = counter;
                if (counter >= total) {
                    clearInterval(interval);
                }
            };
            if (total > 0) {
                interval = setInterval(getTotal, 1);
            }
        };
        calcBlock.addEventListener('change', (event) => {
            const target = event.target;
            if (target.matches('select') || target.matches('input')) {
                clearInterval(interval);
                countSum();
            }
        });
    };
    calc();



    // send-ajax-form

    const sendForm = () => {
        const errorMessage = 'Что-то пошло не так...',
            loadMessage = 'Загрузка...',
            successMessage = 'Спасибо! Мы скоро с вами свяжемся!';

        const form = document.getElementById('form1');
        const forms = document.querySelectorAll('form');
        const elem1 = document.getElementById('loader');
        const form1 = document.getElementById('form3');
        const form2 = document.getElementById('form2');
        const statusMessage = document.createElement('div');
        form.append(elem1);
        statusMessage.style.cssText = 'font-size: 2rem;';

        forms.forEach(form => {
            form.addEventListener('input', (event) => {
                let target = event.target;
                if (target.name === 'user_phone') {
                    target.value = target.value.replace(/[^\+\d]/g, '');
                }

                if (target.name === 'user_name' || target.name === 'user_message') {
                    target.value = target.value.replace(/[^а-я ]/gi, '');
                }
            });
        });

        const postData = (body, outputData, errorData) => {
            const request = new XMLHttpRequest();
            request.addEventListener('readystatechange', () => {
                elem1.classList.add('loader');

                if (request.readyState !== 4) {
                    return;
                }

                if (request.status === 200) {
                    outputData();
                } else {
                    errorData(request.status);
                }
            });
            request.open('POST', './server.php');
            request.setRequestHeader('Content-Type', 'application/json');
            request.send(JSON.stringify(body));
        };

        form.addEventListener('submit', (event) => {
            statusMessage.textContent = '';
            event.preventDefault();
            elem1.classList.add('loader');
            let inputs = form.querySelectorAll('input');
            const formData = new FormData(form);
            let body = {};
            formData.forEach((val, key) => {
                body[key] = val;
            });

            postData(body,
                () => {

                    form.append(statusMessage);
                    elem1.classList.remove('loader');
                    statusMessage.textContent = successMessage;
                    inputs.forEach(elem => elem.value = '');

                },
                (error) => {

                    form.append(statusMessage);
                    elem1.classList.remove('loader');
                    statusMessage.textContent = errorMessage;
                    inputs.forEach(elem => elem.value = '');
                    console.error(error);
                }
            );
        });

        form1.addEventListener('submit', (event) => {
            statusMessage.textContent = '';
            event.preventDefault();
            form1.append(elem1);
            form1.append(statusMessage);
            elem1.classList.add('loader');
            statusMessage.setAttribute('style', 'color: white;');
            let inputs = form1.querySelectorAll('input');
            const formData = new FormData(form1);
            let body = {};
            formData.forEach((val, key) => {
                body[key] = val;
            });
            postData(body,
                () => {
                    elem1.classList.remove('loader');
                    statusMessage.textContent = successMessage;
                    inputs.forEach(elem => elem.value = '');
                },
                (error) => {
                    elem1.classList.remove('loader');
                    statusMessage.textContent = errorMessage;
                    inputs.forEach(elem => elem.value = '');
                    console.error(error);
                }
            );
        });

        form2.addEventListener('submit', (event) => {
            statusMessage.textContent = '';
            event.preventDefault();
            form2.append(elem1);
            elem1.classList.add('loader');
            let inputs = form2.querySelectorAll('input');
            const formData = new FormData(form1);
            let body = {};
            formData.forEach((val, key) => {
                body[key] = val;
            });
            postData(body,
                () => {
                    elem1.classList.remove('loader');
                    form2.append(statusMessage);
                    statusMessage.textContent = successMessage;
                    inputs.forEach(elem => elem.value = '');
                },
                (error) => {
                    elem1.classList.remove('loader');
                    form2.append(statusMessage);
                    statusMessage.textContent = errorMessage;
                    inputs.forEach(elem => elem.value = '');
                    console.error(error);
                }
            );
        });
    };
    sendForm();

});

