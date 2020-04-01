"use strict";
let isNumber = function(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
};

let money;

let start = function(){
    do { money = prompt("Ваш месячный доход?");} 
    while (!isNumber(money));
};
start(); 

let Income = "Фриланс",
    addExpenses = prompt("Перечислите возможные расходы за рассчитываемый период через запятую"),
    deposit = confirm('Есть ли у вас депозит в банке?'),
    mission = 500000,
    period = 11;



function showTypeOf(data){
    console.log(`${data}: ${typeof(data)}`);
}
showTypeOf(money);
showTypeOf(Income);
showTypeOf(deposit);

console.log(addExpenses.toLowerCase().split(","));


let expenses1 = prompt("Введите обязательную статью расходов?"),
    amount1 = prompt("Во сколько это обойдется?", '');
    while(!isNumber(amount1)) {
        amount1 = prompt("Во сколько это обойдется?", '');
    }
let expanses2 = prompt("Введите обязательную статью расходов?"),
    amount2 = prompt("Во сколько это обойдется?", '');
    while(!isNumber(amount1)) {
        amount1 = prompt("Во сколько это обойдется?", '');
    }  
    
function getExpensesMonth(){

   return +amount1 + +amount2;

}

let expensesAmount = getExpensesMonth();
console.log(expensesAmount);

function getAccumulatedMonth (){
    return money - expensesAmount;
    }
console.log(getAccumulatedMonth ());

let accumulatedMonth = getAccumulatedMonth();
function getTargetMonth (){
    return  ((mission/accumulatedMonth) < 0) ?  console.log('Цель не будет достигнута') : 
    console.log(`Цель будет достигнута за: ${Math.ceil(`${mission/accumulatedMonth}`)} месяц`);
} 
getTargetMonth();

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


