 "use strict";
 //mainDown
 const mainDown = () => {
    const btnDown = document.querySelector('a[href="#service-block"]');
    const sliding = (elem) => {
        if (elem.href === undefined) { return; }
        let elems = elem.href.split('#')[1];
        document.querySelector(`#` + elems).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    };
    btnDown.addEventListener('click', (event) => {
        event.preventDefault();
        sliding(btnDown);
    });
};
export default mainDown;