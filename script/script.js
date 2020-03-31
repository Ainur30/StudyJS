"use strict";
let money = 250,
    Income = "music",
    addExpenses = "интернет, такси, коммуналка",
    deposit = true,
    mission = 500000,
    period = 11;

function showTypeOf(data){
    console.log(`${data}: ${typeof(data)}`);
}
showTypeOf(money);
showTypeOf(Income);
showTypeOf(deposit);

let NewArr = addExpenses.toLowerCase().split(",");
console.log(NewArr);


money = +prompt ("Ваш месячный доход?", "");
addExpenses = prompt("Перечислите возможные расходы за рассчитываемый период через запятую",'');
deposit = confirm('Есть ли у вас депозит в банке?', '');

let expenses1 = prompt("Введите обязательную статью расходов?", ''),
    amount1 = +prompt("Во сколько это обойдется?", ''),
    expenses2 = prompt("Введите обязательную статью расходов?", ''),
    amount2 = +prompt("Во сколько это обойдется?", '');


function getExpensesMonth(){
    return amount1 + amount2;
}
console.log(getExpensesMonth());

function getAccumulatedMonth (){
    return money - getExpensesMonth();
}
console.log(getAccumulatedMonth ());

let accumulatedMonth = getAccumulatedMonth();
function getTargetMonth (){
    console.log(mission/accumulatedMonth);
}

let budgetDay = Math.ceil(accumulatedMonth/30);
console.log(`Бюджет на день: ${budgetDay}`);

function inComeStatus(){
    if (budgetDay >= 1200) {
        console.log("У вас высокий уровень дохода");
    } else if (budgetDay >= 600) {
            console.log("У вас средний уровень дохода");
        } else if (budgetDay > 0 & budgetDay < 600) {
                console.log("К сожалению у вас доход ниже среднего");
             } else if (budgetDay < 0) {
                 console.log("Что-то пошло не так");
             } else {
                 console.log("У вас дохода нет");
             }  
}
inComeStatus();


