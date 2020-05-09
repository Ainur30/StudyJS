   "use strict";
   //check inputs
   const checkInputs = () => {
    const calcItems = document.querySelectorAll('.calc-item');

    calcItems.forEach((elem) => {
        elem.addEventListener('keydown', (event) => {
            let target = event.target;
            if (event.keyCode === 69 || event.keyCode > 100) {
                event.preventDefault();
            }
        });

    });

};
export default checkInputs;