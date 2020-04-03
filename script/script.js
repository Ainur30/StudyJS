"use strict";
function game() {
    let rand = Math.floor(1 + Math.random() * 100);

    return function checkNumber(){
        let guessNumber = prompt("Угадай число от 1 до 100");
      

        if (isNaN(guessNumber) || guessNumber === ""){
            alert("Введи число!");
            checkNumber();

        }

        if (guessNumber === null || guessNumber === rand) {
        return;
        }

        if (Number(guessNumber) > rand) {
            alert('Загаданное число меньше');
            checkNumber();
        
        } else if (Number(guessNumber) < rand) {
            alert('Загаданное число больше');
            checkNumber();
        
    }
   
};
}

let startGame = game();
startGame();
console.dir(startGame);