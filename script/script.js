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
    percentDeposit: 0,
    moneyDeposit: 0,
    mission: 500000,
    period: 11,
    asking: function(){ 
            if (confirm('Есть ли у вас дополнительный источник заработка?')){

                let itemIncome = prompt('Какой у вас дополнительный заработок?', 'Таксую');
                while (isNumber(itemIncome) || itemIncome.trim() ===""){
                    itemIncome = prompt('Какой у вас дополнительный заработок?', 'Таксую');
                }
            
                let cashIncome = prompt('Сколько в месяц вы на этом зарабатываете?', 10000);
                while (!isNumber(cashIncome)){
                    cashIncome = prompt('Сколько в месяц вы на этом зарабатываете?', 10000);
                }
                appData.income[itemIncome] = cashIncome;
            }

            let sum = 0, question;
             appData.addExpenses = prompt("Перечислите возможные расходы за рассчитываемый период через запятую!");
            while (isNumber(appData.addExpenses) || appData.addExpenses.trim() === "" ){
                appData.addExpenses = prompt("Перечислите возможные расходы за рассчитываемый период через запятую!");
            }
            appData.addExpenses = appData.addExpenses.toLowerCase().split(",");
            
            appData.deposit = confirm('Есть ли у вас депозит в банке?');
            
            for(let i = 0; i < 2; i++){

                question = prompt('Введите обязательную статью расходов?');
                while(isNumber(question) || question.trim() === ""){
                    question = prompt('Введите обязательную статью расходов?');
                }
            
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
        appData.budgetDay =  (appData.budget - appData.expensesMonth)/30;
        appData.budgetMonth = (appData.budget - appData.expensesMonth);
    },
    getTargetMonth: function () {

        return ((appData.mission/appData.budgetMonth) < 0) ?  console.log('Цель не будет достигнута') : 
        console.log(`Цель будет достигнута за: ${Math.ceil(`${appData.mission/appData.budgetMonth}`)} месяц`);
    }, 
    getStatusIncome: function (){
        
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
    getInfoDeposit: function(){
        if(appData.deposit){
            appData.percentDeposit = prompt('Какой годовой процент?', '10');
            while (!isNumber(appData.percentDeposit)){
                 appData.percentDeposit = prompt('Какой годовой процент?', '10');
                }
            
            appData.moneyDeposit = prompt('Какая сумма заложена?', 10000);
            while (!isNumber(appData.moneyDeposit)){
                appData.moneyDeposit = prompt('Какая сумма заложена?', 10000);
               }
        }
    },
    calcSavedMoney: function(){
        return appData.budgetMonth * appData.period;
    }

   
};
appData.asking();
appData.getExpensesMonth();
appData.getBudget();
appData.getTargetMonth();
appData.getStatusIncome();
for (let key in appData) {
    console.log(`Наша программа включает в себя данные: ${key}`);
}


appData.getInfoDeposit();
console.log(appData.percentDeposit, appData.moneyDeposit, appData.calcSavedMoney());


function transform(){
    
    return appData.addExpenses.map((key) => key.trim())
    .map((key) =>
           key.slice(0, 1).toUpperCase() + key.slice(1)).join(', ');
}
console.log(transform());

