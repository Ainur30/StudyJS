   "use strict";
   //check inputs
   const checkInputs = () => {
    const calc = document.getElementById('calc');

    calc.addEventListener('input', (event) => {
        let target = event.target;
        if (target.tagName === 'INPUT'){
            target.value = target.value.replace(/\D/g, '');
        }
    });

};
export default checkInputs;