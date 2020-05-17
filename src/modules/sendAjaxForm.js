
const sendAjaxForm = () => {
    const forms = document.querySelectorAll('form'),
        element = document.createElement('div'),
        loader = document.querySelector('.load'),
        thanks = document.getElementById('thanks'),
        bannerForm = document.getElementById('banner-form'),
        formContent = thanks.querySelector('.form-content'),
        errorMessage = 'Что-то пошло не так...',
        successMessage = 'Спасибо! Мы скоро с вами свяжемся!';


    const postData = (body) => {
        return fetch('./server.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body),
            credentials: 'include',
            mode: 'cors'
        });
    };
    forms.forEach(form => {
        if (form.id !== 'footer_form') {
            let button = form.querySelector('button');
            let input = form.querySelectorAll('input');
            button.addEventListener('mouseover', () => {
                input.forEach((elem) => {
                    if (elem.type === 'checkbox') {
                        if (elem.checked === false) {
                            addElem(elem);
                        }
                    }
                });
            });
            button.addEventListener('mouseout', () => {
                let er = document.querySelector('.error');

                if (er) {
                    er.remove();
                }

            });
        }
        form.addEventListener('input', (event) => {
            let target = event.target;
            if (target.name === 'phone') {
                if (target.style) {
                    target.style.border = 'none';
                }
                target.value = target.value.replace(/[^\+\d]/g, '');
                if (!/^\+?(\d){0,18}$/g.test(target.value)) {
                    target.value = target.value.substring(0, target.value.length - 1);
                }

            }

            if (target.name === 'name') {
                target.value = target.value.replace(/[^а-я ]/gi, '');
            }
        });
        const addElem1 = (el) => {
            let er = document.querySelector('.error1');
            if (er) {
                er.remove();
            }
            let div = `<p class="error1" style="color: red;">Введите минимум 11 цифр!</p>`;
            el.parentNode.insertAdjacentHTML('afterend', div);
        };
        const addElem = (el) => {
            let er = document.querySelector('.error');

            if (er) {
                er.remove();
            }
            let div = `<p class="error" style="color: red;">Обязательное поле!</p>`;
            el.parentNode.insertAdjacentHTML('beforeend', div);
        };
        form.addEventListener('submit', (event) => {
            event.preventDefault();
            let inputs = form.querySelectorAll('input');
            const input1 = [...event.target.elements].filter((item) => item.type === 'checkbox');
            console.log(input1[0].checked === false);
            if (input1[0].checked === false) {
                return;
            }
            const input = [...event.target.elements].filter((item) => item.name === 'phone');
            let inputLength = input[0].value.replace('+', '').length;
            if (inputLength < 11) {
                input[0].setAttribute('style', 'border: 2px solid red');
                if (event.target.id !== 'banner-form') {
                    addElem1(input[0]);
                }
                return;
            } else {
                input[0].setAttribute('style', 'border: none');
                let er = document.querySelector('.error');
                if (er) {
                    er.textContent = '';
                }
            }
            loader.style.display = 'block';
            const formData = new FormData(form);
            let body = {};
            for (let val of formData.entries()) {
                body[val[0]] = val[1];
            }
            const outputData = () => {
                loader.style.display = 'none';
                thanks.style.display = 'block';
                formContent.innerHTML = `<h4>Спасибо!</h4>
                <p>Ваша заявка отправлена. <br> Мы свяжемся с вами в ближайшее время.</p>
                <button class="btn close-btn">OK</button>`;
                inputs.forEach(elem => {
                    elem.value = '';
                    if (elem.checked) {
                        elem.checked = false;
                    }
                }
                );

                thanks.addEventListener('click', (event) => {
                    let target = event.target;
                    if (target.classList.contains('close_icon') || target.classList.contains('close-btn')) {
                        thanks.style.display = 'none';
                    } else {
                        target = target.closest('.popup-content');
                        if (!target) {
                            thanks.style.display = 'none';
                        }
                    }
                });
            };
            const errorData = () => {
                loader.style.display = 'none';
                thanks.style.display = 'block';
                formContent.innerHTML = `<h4>Ошибка!</h4>
                    <p>Ваша заявка не отправлена. <br> Попробуйте еще раз</p>
                    <button class="btn close-btn">OK</button>`;
                inputs.forEach(elem => {
                    elem.value = '';
                    if (elem.checked) {
                        elem.checked = false;
                    }
                }
                );

                thanks.addEventListener('click', (event) => {
                    let target = event.target;
                    if (target.classList.contains('close_icon') || target.classList.contains('close-btn')) {
                        thanks.style.display = 'none';
                    } else {
                        target = target.closest('.popup-content');
                        if (!target) {
                            thanks.style.display = 'none';
                        }
                    }
                });
            };
            postData(body)
                .then((response) => {
                    if (response.status !== 200) {
                        throw new Error('status network not 200');
                    }
                    outputData();
                })
                .catch(errorData);
        });
    });
};
export default sendAjaxForm;