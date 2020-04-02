"use strict";
function Numb(){
    function randNumber(){
        let rand = 1 + Math.random() * 100;
        return Math.floor(rand);
    }
    return randNumber();
}
 let res = Numb();
    

function checkNumber(count){
   
    
    let guessNumber = prompt("Угадай число от 1 до 100"),
        n = 3,
        replay;
   
    if (isNaN(guessNumber) || guessNumber === ""){
        guessNumber = alert("Введи число!");
        checkNumber(count);
    }

    if (guessNumber === null){
        alert("Конец игры");
        return;
    }

    if (Number(guessNumber) > res ){
        count--;
        alert(`Загаданное число меньше, осталось попыток ${count}`);
        
        if (count === 0) {
            replay = confirm("Попытки закончились, хотите сыграть еще?");
            if (replay === false){
                alert("Конец игры");
                return;
             } else {
                res = Numb();
                checkNumber(10);
            }
        } else {checkNumber(count);}
        

    } else if (Number(guessNumber) < res ){
        count--;
        alert(`Загаданное число больше, осталось попыток ${count}`);
        
        if (count === 0) {
            replay = confirm("Попытки закончились, хотите сыграть еще?");
            if (replay === false){
            alert("Конец игры");
            return ;
             } else {
            res = Numb();
            checkNumber(10);
            }
            } else {checkNumber(count);}
        
    } else if (Number(guessNumber) === res){

        replay = confirm("Поздравляю, Вы угадали!!! Хотели бы сыграть еще?");
        if (replay === false){
            alert("Конец игры");
        } else {
            res = Numb();
            checkNumber(10);
        }
    } 

    
  
}
checkNumber(10);
