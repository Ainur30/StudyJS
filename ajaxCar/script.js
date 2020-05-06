document.addEventListener('DOMContentLoaded', () => {
    'use strict';

    const select = document.getElementById('cars'),
        output = document.getElementById('output');
    
    const sendForm = (url)=>{
        return new Promise((resolve, reject) => {
            const request = new XMLHttpRequest();
            request.open('GET', url);
            request.addEventListener('readystatechange', () => {
                if (request.readyState !== 4){
                    return;
                }
                if (request.status === 200) {
                    const data = JSON.parse(request.responseText);
                    resolve(data);
                } else {
                    reject(request.statusText);
                }
            });
            request.send();
        });
    };
  
    select.addEventListener('change', () => {
        const outPut = (data)=>{
            data.cars.forEach(item => {
                if (item.brand === select.value) {
                    const { brand, model, price } = item;
                    output.innerHTML = `Тачка ${brand} ${model} <br>
                Цена: ${price}$`;
                }
            });
    
        };
        const error = (eror)=>{
            output.innerHTML = 'Ошибка';
    
        };
        const urll = "./cars.json";
        sendForm(urll).then(outPut)
            .catch(error);
        
    });

});