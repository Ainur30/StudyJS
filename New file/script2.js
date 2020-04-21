'use strict';
const body = document.querySelector('body');
const weekDay = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
let date = new Date();
if (date.getHours() > 0 && date.getHours() < 6) {
    body.textContent = 'Доброй ночи!';
} else if (date.getHours() > 6 && date.getHours() < 12) {
    body.textContent = 'Доброе утро!';
} else if (date.getHours() > 12 && date.getHours() < 18) {
    body.textContent = 'Добрый день!';
} else if (date.getHours() > 18) {
    body.textContent = 'Добрый вечер!';

}
const p = document.createElement('p');
let toDay = date.getDay();
p.textContent = `Сегодня: ${weekDay[toDay]}`;
body.append(p);
const p1 = document.createElement('p');
let time = date.toLocaleTimeString('en');
p1.textContent = `Текущее время: ${time}`;
body.append(p1);
const dayLeft = Math.ceil(((Date.parse('1 january 2021')) - Date.now()) / 3600000 / 24);
let p2 = document.createElement('p');
p2.textContent = `До Нового года осталось ${dayLeft} дня!`;
body.append(p2);