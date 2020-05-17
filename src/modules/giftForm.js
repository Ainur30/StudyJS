'use strict';

const giftForm = () => {
    /*
    const thanks = document.getElementById('thanks'),
        formContent = thanks.querySelector('.form-content');
    thanks.style.display = 'block';
    formContent.innerHTML = `<h4>Ошибка!</h4>
    <p>Ваша заявка не отправлена. <br> Попробуйте еще раз.</p>
    <button class="btn close-btn">OK</button>`;
    */
    try {
        const fixedGift = document.querySelector('.fixed-gift');
        const gift = document.getElementById('gift');
        const popupContent = gift.querySelector('.form-wrapper');
        popupContent.classList.add('popup-content');
        fixedGift.addEventListener('click', () => {
            fixedGift.style.display = 'none';
            gift.style.display = 'block';

            gift.addEventListener('click', (event) => {

                let target = event.target;
                if (target.classList.contains('close_icon')) {
                    gift.style.display = 'none';
                } else {
                    target = target.closest('.popup-content');
                    if (!target) {
                        gift.style.display = 'none';
                    }
                }
            });
        });
    } catch {
    
    }
};

export default giftForm;