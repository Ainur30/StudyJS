  "use strict";
  // toggle popup
  const togglePopUp = () => {
    const popup = document.querySelector('.popup'),
        popupBtn = document.querySelectorAll('.popup-btn');


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
export default togglePopUp;