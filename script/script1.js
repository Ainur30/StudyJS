"use strict";

let start = document.getElementById('start');
let incomePlus = document.getElementsByTagName('button')[0];
let expensesPlus = document.getElementsByTagName('button')[1];
let checkBox = document.querySelector('#deposit-check');
let additionalIncomeItem = document.querySelectorAll('.additional_income-item');
let budgetMonth = document.querySelectorAll(`[class$="-value"]`);
let salaryAmount = document.querySelector('.salary-amount');
let incomeTitle = document.querySelector('[class="income-title"');
let incomeAmount = document.querySelector('.income-amount');
let expensesTitle = document.querySelector('[class="expenses-title"');
let expensesItems = document.querySelectorAll('.expenses-items');
let additionalExpensesItem = document.querySelector('.additional_expenses-item');
let depositAmount = document.querySelector('.deposit-amount');
let depositPercent = document.querySelector('.deposit-percent');
let targetAmount = document.querySelector('.target-amount');
let periodSelect = document.querySelector('.period-select');
let budgetMonthValue = document.querySelector('.budget_month-value');
let budgetDayValue = document.querySelector('.budget_day-value');
let expensesMonthValue = document.querySelector('.expenses_month-value');
let additionalExpensesValue = document.querySelector('.additional_expenses-value');
let additionalIncomeValue = document.querySelector('.additional_income-value');
let targetMonthValue = document.querySelector('.target_month-value');
let incomePeriodValue = document.querySelector('.income_period-value');
let incomeItems = document.querySelectorAll('.income-items');
let period = document.querySelector('.period');


let appData = {
    inComeMonth: 0,
    income: {},
    addIncome: [],
    expenses: {},
    addExpenses: [],
    budget: 0,
    deposit: true,
    percentDeposit: 0,
    moneyDeposit: 0,
    period: 11,

    start: function(){

        appData.budget = +salaryAmount.value;
        appData.getExpenses();
        appData.getIncome();
        appData.getIncomeMonth();
        appData.getExpensesMonth();
        appData.getAddExpenses();
        appData.getAddIncome();
        appData.getBudget();
        appData.showResult();
    },

    showResult: function(){

            budgetMonthValue.value = appData.budgetMonth ;
            budgetDayValue.value = Math.ceil(appData.budgetDay);
            expensesMonthValue.value = appData.expensesMonth;
            additionalExpensesValue.value = appData.addExpenses.join(', ');
            additionalIncomeValue.value = appData.addIncome.join(', ');
            targetMonthValue.value = Math.ceil(appData.getTargetMonth());
            incomePeriodValue.value = appData.calcSavedMoney();
            periodSelect.addEventListener('input', function(){
                incomePeriodValue.value = appData.budgetMonth * periodSelect.value;

            });
            
    },
    addExpensesBlock: function(){
            
            let cloneExpensesItem = expensesItems[0].cloneNode(true);
            expensesItems[0].parentNode.insertBefore(cloneExpensesItem, expensesPlus);
            expensesItems = document.querySelectorAll('.expenses-items');
            if (expensesItems.length === 3){
                expensesPlus.style.display = 'none';
            }


    },
    getExpenses: function(){

        expensesItems.forEach(function(item){
            let itemExpenses = item.querySelector('.expenses-title').value;
            let cashExpenses = item.querySelector('.expenses-amount').value;
            if (itemExpenses !== '' && cashExpenses !== ''){
                appData.expenses[itemExpenses] = cashExpenses;

            }
        });
    },
    addIncomeBlock: function(){
        let cloneIncomeItem = incomeItems[0].cloneNode(true);
            incomeItems[0].parentNode.insertBefore(cloneIncomeItem, incomePlus);
            incomeItems = document.querySelectorAll('.income-items');
            if (incomeItems.length === 3){
                incomePlus.style.display = 'none';
            }

    },
    getIncome: function(){

       incomeItems.forEach(function(item){
           let itemIncome = item.querySelector('.income-title').value;
           let cashIncome = item.querySelector('.income-amount').value;
           if (itemIncome !== '' && cashIncome !== ''){
               appData.income[itemIncome] = cashIncome;
           } 
       });
    },
    getAddExpenses: function(){

        let addExpenses = additionalExpensesItem.value.split(',');
        addExpenses.forEach(function(item){

            item = item.trim();
            if (item !== ''){
                appData.addExpenses.push(item);
            }
        });
    },

    getAddIncome: function(){

        additionalIncomeItem.forEach(function(item){

            let itemValue = item.value.trim();
            if (itemValue !== ''){
                appData.addIncome.push(itemValue);
            }

        });
    },
    addNewPeriod: function(){

        let periodAmount = document.querySelector('.period-amount');
        periodAmount.textContent = periodSelect.value;

    },
    checkInput: function(){
        if (salaryAmount.value === ""){

            start.disabled = true;

        } else {

            start.disabled = false;

        }
    },
    budgetDay: 0,
    budgetMonth: 0,
    expensesMonth: 0,
    getExpensesMonth: function (){
        for (let key in appData.expenses) {       
            appData.expensesMonth += +appData.expenses[key];
        }
        return appData.expensesMonth;
    },
    getIncomeMonth: function(){
        for (let key in appData.income) {
            appData.inComeMonth += +appData.income[key];
        }
    },
    getBudget: function (){
        appData.budgetDay =  (appData.budget - appData.expensesMonth)/30;
        console.log(appData.inComeMonth);
        appData.budgetMonth = (appData.budget + appData.inComeMonth - appData.expensesMonth);
    },
    getTargetMonth: function () {

        return targetAmount.value/appData.budgetMonth;

    }, 
    calcSavedMoney: function(){
        return appData.budgetMonth * periodSelect.value;
    }
};

if (salaryAmount.value === ''){
    start.disabled = true;
}
salaryAmount.addEventListener('input', appData.checkInput);
start.addEventListener('click', appData.start);
expensesPlus.addEventListener('click', appData.addExpensesBlock);
incomePlus.addEventListener('click', appData.addIncomeBlock);
period.addEventListener('input', appData.addNewPeriod);