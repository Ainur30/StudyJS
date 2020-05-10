'use strict';
    // send-ajax-form

    const sendForm = () => {
        
        const errorMessage = 'Что-то пошло не так...',
            successMessage = 'Спасибо! Мы скоро с вами свяжемся!';


        const forms = document.querySelectorAll('form');
        const elem1 = document.getElementById('loader');
        const statusMessage = document.createElement('div');

        statusMessage.style.cssText = `font-size: 2rem;
        color: #fff; `;

        const postData = (body) => {
            
            return fetch('./server.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(body),
                credentials: 'include'
            });
        };

        const addElem = (el) => {
            let elem = el.parentNode;
            console.log(elem);
            let div =  `
            <div class="error" style="color: red;">
            Введи минимум 10 цифр
            </div>
          `;
            el.insertAdjacentHTML('afterEnd', div);
        };
        

        forms.forEach(form => {
            form.addEventListener('input', (event) => {
                let target = event.target;
                if (target.name === 'user_phone') {
                    target.value = target.value.replace(/[^\+\d]/g, '');
                    if (!/^\+?(\d){5,18}$/g.test(target.value)) {
                        target.value = target.value.substring(0, target.value.length - 1);
                    }
                   
                }
                if (target.name === 'user_name' || target.name === 'user_message') {
                    target.value = target.value.replace(/[^а-я ]/gi, '');
                }
            });
           
            form.addEventListener('submit', (event) => {
                event.preventDefault();
                const input = [...event.target.elements].filter((item) => item.name === 'user_phone');
                let inputLength = input[0].value.replace('+', '').length;
                if (inputLength < 10) {
                    input[0].style = 'border: 2px solid red';
                    addElem(input[0]);
                    return;
                } else {
                    input[0].style = 'border: none';
                    
                    let er = document.querySelector('.error');
                    if(er){
                        er.textContent = '';
                    }
                   
                }
                statusMessage.textContent = '';
                let inputs = form.querySelectorAll('input');
                form.appendChild(statusMessage);
                form.append(elem1);
                const formData = new FormData(form);

                elem1.classList.add('loader');
                let body = {};
                for (let val of formData.entries()) {
                    body[val[0]] = val[1];
                }
                const outputData = () => {
                    form.append(statusMessage);
                    elem1.classList.remove('loader');
                    statusMessage.textContent = successMessage;
                    inputs.forEach(elem => elem.value = '');

                };
                const errorData = () => {
                    form.append(statusMessage);
                    elem1.classList.remove('loader');
                    statusMessage.textContent = errorMessage;
                    inputs.forEach(elem => elem.value = '');
                    console.error();
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
    export default sendForm;