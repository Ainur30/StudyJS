"use strict";
let elems = document.querySelector('.books'),
    book = document.querySelectorAll('.book'),
    body = document.querySelector('body');
    console.log(book);
elems.prepend(book[4]);
elems.prepend(book[0]);
elems.prepend(book[1]);
book[4].after(book[3]);
book[5].after(book[2]);
body.setAttribute("style", "background-image:url(./image/adv.jpg)" );
console.log(body);
let theTag = book[4].querySelector('h2');
let ssylka = theTag.querySelector('a');
ssylka.textContent = 'Книга 3. this и Прототипы Объектов';
console.log(ssylka);
let rek = document.querySelector('.adv');
rek.remove();
let theTerm = book[0].querySelector('ul');
let theTerm1 = theTerm.querySelectorAll('li');

theTerm1[10].before(theTerm1[2]);
theTerm1[9].before(theTerm1[7]);
theTerm1[3].before(theTerm1[6]);
theTerm1[1].after(theTerm1[3]);
theTerm1[4].before(theTerm1[8]);

 theTerm = book[5].querySelector('ul');
 theTerm1 = theTerm.querySelectorAll('li');
 
 theTerm1[1].after(theTerm1[9]);
 theTerm1[9].after(theTerm1[3]);
 theTerm1[4].after(theTerm1[2]);
 theTerm1[2].after(theTerm1[6]);
 theTerm1[6].after(theTerm1[7]);

 let newChapter = book[2].querySelector('ul');
 let n = document.createElement('li');
 newChapter.append(n);
 n.textContent = 'Глава 8: За пределами ES6';
 console.log(newChapter);
 let chapters = newChapter.querySelectorAll(['li']);
 console.log(chapters);
 chapters[8].after(chapters[10]);
 




