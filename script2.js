"use strict";

function game(){
    let res = Math.floor(1 + Math.random() * 100),
        count = 10;
        

    return function checkNumber(){
        let guessNumber = prompt("Угадай число от 1 до 100"),
        //count = 10,
        replay;
       
   
        if (isNaN(guessNumber) || guessNumber === ""){
        alert("Введи число!");
        checkNumber(count);
        }

        if (guessNumber === null){
        return alert("Конец игры");
      
        }

        if (Number(guessNumber) > res ){
        count--;
        alert(`Загаданное число меньше, осталось попыток ${count}`);
        
        if (count === 0) {
            replay = confirm("Попытки закончились, хотите сыграть еще?");
            if (replay === false){
             return  alert("Конец игры");
               
             } else {
                let startAgain = game();
            startAgain();
                //checkNumber(10);
            }
        } else {checkNumber(count);}
        

        }   else if (Number(guessNumber) < res ){
        count--;
        alert(`Загаданное число больше, осталось попыток ${count}`);
        
        if (count === 0) {
            replay = confirm("Попытки закончились, хотите сыграть еще?");
            if (replay === false){
           
                return alert("Конец игры"); 
             } else {
                let startAgain = game();
                startAgain();
            //checkNumber(10);
            }
            } else {checkNumber(count);}
        
        } else if (Number(guessNumber) === res){

        replay = confirm("Поздравляю, Вы угадали!!! Хотели бы сыграть еще?");
        if (replay === false){
            return alert("Конец игры");
        } else {
            let startAgain = game();
            startAgain();
            //checkNumber(10);
        }
        }    

    

};

}
 let startGame = game();
startGame();
console.dir(startGame);


