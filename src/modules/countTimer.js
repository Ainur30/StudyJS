  "use strict";
  //count timer
  const countTimer = (deadline) => {
    const timeHours = document.querySelector('#timer-hours'),
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
export default countTimer;