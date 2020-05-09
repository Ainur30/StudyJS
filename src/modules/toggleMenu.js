 "use strict";
 // toggle menu
 const toggleMenu = () => {
    const body = document.querySelector('body'),
        menu = document.querySelector('menu');

    const sliding = (elem) => {
        if (elem.href === undefined) { return; }
        let elems = elem.href.split('#')[1];
        document.querySelector(`#` + elems).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    };   

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
export default toggleMenu;