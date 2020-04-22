window.addEventListener('DOMContentLoaded', function () {

    'use strict';
    let date = new Date();
    function countTimer() {
        let timeHours = document.querySelector('#timer-hours'),
            timeMinutes = document.querySelector('#timer-minutes'),
            timeSeconds = document.querySelector('#timer-seconds');

        function getTimeRemaining() {
            

            let date = new Date(),
                hours = 23 - date.getHours(),
                minutes = 60 - date.getMinutes(),
                seconds = 60 - date.getSeconds();

            return { seconds, minutes, hours };

        }

        function upDateClock() {
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

            setInterval(upDateClock, 1000);

        }
        upDateClock();

    }

    countTimer();
});