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

let isNumber = function(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
};


    

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
    
        
        if (salaryAmount.value === ""){
             start.setAttribute('disabled');
             start.disabled = true;
        } else {
            start.disabled = false;
        }
        appData.budget = +salaryAmount.value;
       
        appData.getExpenses();
        appData.getIncome();
        
        appData.getExpensesMonth();
        
        appData.getAddExpenses();
        appData.getAddIncome();
        appData.getBudget();
        appData.showResult();
        },
    showResult: function(){
            budgetMonthValue.value = appData.budgetMonth;
            budgetDayValue.value = Math.ceil(appData.budgetDay);
            expensesMonthValue.value = appData.expensesMonth;
            additionalExpensesValue.value = appData.addExpenses.join(', ');
            additionalIncomeValue.value = appData.addIncome.join(', ');
            targetMonthValue.value = Math.ceil(appData.getTargetMonth());
            incomePeriodValue.value = appData.calcSavedMoney();
            periodSelect.addEventListener('click', function(){
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
    getBudget: function (){
        appData.budgetDay =  (appData.budget - appData.expensesMonth)/30;
        appData.budgetMonth = (appData.budget + appData.inComeMonth - appData.expensesMonth);
    },
    getTargetMonth: function () {

        return targetAmount.value/appData.budgetMonth;

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
        return appData.budgetMonth * periodSelect.value;
    }

   
};


start.addEventListener('click', appData.start);
expensesPlus.addEventListener('click', appData.addExpensesBlock);
incomePlus.addEventListener('click', appData.addIncomeBlock);
period.addEventListener('click', appData.addNewPeriod);
