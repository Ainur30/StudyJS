'use strict';

const freeVisitForm = () => {
    const freeVisit = document.querySelector('.free-visit');
    const a = freeVisit.querySelector('a');
    const freeVisitForm = document.getElementById('free_visit_form');
    const popupContent = freeVisitForm.querySelector('.form-wrapper');
    popupContent.classList.add('popup-content');

    freeVisit.addEventListener('click', (event)=>{
        event.preventDefault();
        a.href = a.dataset.popup;
        freeVisitForm.style.display = 'block';

        freeVisitForm.addEventListener('click', (event) => {
            let target = event.target;
            if (target.classList.contains('close_icon')) {
                freeVisitForm.style.display = 'none';
            } else {
                target = target.closest('.popup-content');
                if (!target) {
                    freeVisitForm.style.display = 'none';
                }
            }
        });
    });
};
export default freeVisitForm;