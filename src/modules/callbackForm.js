'use strict';

const callbackForm = () => {
    const call = document.querySelector('.call');
    const callbackForm = document.getElementById('callback_form');
    const formWrap = callbackForm.querySelector('.form-wrapper');
    const callbackBtn = call.querySelector('.callback-btn');
    formWrap.classList.add('popup-content1');

    callbackBtn.addEventListener('click', ()=>{
        
        callbackBtn.src = callbackBtn.dataset.popup;
        callbackForm.style.display = 'block';

        callbackForm.addEventListener('click', (event) => {
            let target = event.target;
            if (target.classList.contains('close_icon')) {
               callbackForm.style.display = 'none';
            } else {
                target = target.closest('.popup-content1');
                if (!target) {
                    callbackForm.style.display = 'none';
                }
            }
        });

    });

};
export default callbackForm;