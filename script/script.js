"use strict";
let isNumber = function(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
};

let money,
    start = function(){
    do { money = prompt("Ваш месячный доход?");} 
    while (!isNumber(money));
    };
start(); 

let appData = {

    income: {},
    addIncome: [],
    expenses: {},
    addExpenses: [],
    budget: money,
    deposit: true,
    mission: 500000,
    period: 11,
    asking: function(){ 
            let sum = 0, question, expenses1, expenses2;
            let addExpenses = prompt("Перечислите возможные расходы за рассчитываемый период через запятую!");
            appData.addExpenses = addExpenses.toLowerCase().split(",");
            appData.deposit = confirm('Есть ли у вас депозит в банке?');
            
            for(let i = 0; i < 2; i++){

                question = prompt('Введите обязательную статью расходов?');
            
                do{
                    sum = prompt('Во сколько это обойдется?', 2000);
                }
                while(!isNumber(sum));   
                appData.expenses[question] = Number(sum);

            }
    },
    budgetDay: 0,
    budgetMonth: 0,
    expensesMonth: 0,
    getExpensesMonth: function (){
        for (let key in appData.expenses) {
            
            appData.expensesMonth += appData.expenses[key];
   
        }
        console.log(appData.expensesMonth);
        return appData.expensesMonth;
    },
    getBudget: function (){

        appData.budgetDay =  (money - appData.expensesMonth)/30;
        appData.budgetMonth = (money - appData.expensesMonth);
        


   },
   getTargetMonth: function (){

        return ((appData.mission/appData.budgetMonth) < 0) ?  console.log('Цель не будет достигнута') : 
        console.log(`Цель будет достигнута за: ${Math.ceil(`${appData.mission/appData.budgetMonth}`)} месяц`);
    }, 
    inComeStatus: function (){
        
        if (appData.budgetDay >= 1200) {
            console.log("У вас высокий уровень дохода");
        } else if (appData.budgetDay >= 600) {
                console.log("У вас средний уровень дохода");
            } else if (appData.budgetDay > 0 & appData.budgetDay < 600) {
                    console.log("К сожалению у вас доход ниже среднего");
                 } else if (appData.budgetDay < 0) {
                     console.log("Что-то пошло не так");
                 } else {
                     console.log("У вас дохода нет");
                 }  
    },
   
};
appData.asking();

let expensesMonth = appData.getExpensesMonth();

let Month = appData.getBudget();

let targetMonth = appData.getTargetMonth();



let comeStatus = appData.inComeStatus();
for (let key in appData) {
    console.log(`Наша программа включает в себя данные: ${key} значение: ${appData[key]}`);
}
