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

let expenses = []; 
function getExpensesMonth(){
    let sum = 0;
    for (let i = 0; i < 2; i++){

        expenses[i] = prompt("Введите обязательную статью расходов?");
        sum = prompt("Во сколько это обойдется?");
        while (!isNumber(sum)){
            sum = prompt("Во сколько это обойдется?");
        }
        sum = Number(sum);
        sum += sum;
    }
    console.log(expenses);
    return sum;

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


