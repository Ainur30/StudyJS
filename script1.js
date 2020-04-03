"use strict";
/*
let isNumber = function(n) {
    return isNaN(n) && n.trim() === "";
};
*/

function checkNumber() {
    let guessNumber = prompt("Угадай число от 1 до 100");
   

    function randNumber(){
        let rand = 1 + Math.random() * 100;
        return Math.floor(rand);
    }
    if (isNaN(guessNumber) || guessNumber.trim() === ""){
        guessNumber = alert("Введи число!");
        checkNumber();

    }

    if (guessNumber === null || guessNumber === randNumber()) {
        return;
    }

    if (Number(guessNumber) > randNumber()) {
        guessNumber = alert('Загаданное число меньше');
        checkNumber();
        
    } else if (Number(guessNumber) < randNumber()) {
        guessNumber = alert('Загаданное число больше');
        checkNumber();
        
    }
   
}
checkNumber();