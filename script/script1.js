"use strict";


let start = document.getElementById('start');
let incomePlus = document.querySelector('.income_add');
let expensesPlus = document.querySelector('.expenses_add');
let checkBox = document.querySelector('#deposit-check');
let additionalIncomeItem = document.querySelectorAll('.additional_income-item');
let budgetMonth = document.querySelectorAll(`[class$="-value"]`);
let salaryAmount = document.querySelector('.salary-amount');
let incomeTitle = document.querySelector('[class="income-title"');
let incomeAmount = document.querySelector('.income-amount');
let expensesTitle = document.querySelector('[class="expenses-title"]');
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
let expensesAmount = document.querySelector(`[class ='expenses-amount']`);
let cancel = document.querySelector('#cancel');
let periodAmount = document.querySelector('.period-amount');

const AppData = function(){

    this.inComeMonth = 0;
    this.income = {};
    this.addIncome = [];
    this.expenses = {};
    this.addExpenses = [];
    this.budget = 0;
    this.deposit = true;
    this.percentDeposit = 0;
    this.moneyDeposit = 0;
    this.period = 11;
    this.budgetDay = 0;
    this.budgetMonth = 0;
    this.expensesMonth = 0;

};



AppData.prototype.start = function(){
        
    this.budget = +salaryAmount.value;
    this.getExpenses();
    this.getIncome();
    this.getIncomeMonth();
    this.getExpensesMonth();
    this.getAddExpenses();
    this.getAddIncome();
    this.getBudget();
    this.turnOff();
    this.showResult();
       

    };
AppData.prototype.ountPeriod = function(){

    incomePeriodValue.value = this.budgetMonth * periodSelect.value;
    return incomePeriodValue.value;

};
AppData.prototype.showResult = function(){

    budgetMonthValue.value = this.budgetMonth ;
    budgetDayValue.value = Math.ceil(this.budgetDay);
    expensesMonthValue.value = this.expensesMonth;
    additionalExpensesValue.value = this.addExpenses.join(', ');
    additionalIncomeValue.value = this.addIncome.join(', ');
    targetMonthValue.value = Math.ceil(this.getTargetMonth());
    incomePeriodValue.value = this.calcSavedMoney();
    this.ountPeriod();
                
};
AppData.prototype.addExpensesBlock = function(){

    let cloneExpensesItem = expensesItems[0].cloneNode(true);
    expensesItems[0].parentNode.insertBefore(cloneExpensesItem, expensesPlus);
    expensesItems = document.querySelectorAll('.expenses-items');

    if (expensesItems.length === 2){

        let elem1 = expensesItems[1].querySelector('.expenses-title');
        elem1.placeholder = "";
        elem1.value = "";
        let elem2 = expensesItems[1].querySelector('.expenses-amount');
        elem2.placeholder = "";
        elem2.value = "";

    }
    if (expensesItems.length === 3){

        let elem1 = expensesItems[2].querySelector('.expenses-title');
        elem1.placeholder = "";
        elem1.value = "";
        let elem2 = expensesItems[2].querySelector('.expenses-amount');
        elem2.placeholder = "";
        elem2.value = "";

        }

        let inputName = document.querySelectorAll('.expenses-title');
        inputName.forEach((event)=>{
            event.addEventListener('input', (event)=>{
                event.target.value = event.target.value.replace(/([A-Z])|(\d)/gi, '');
            });
        });
        let inputName2 = document.querySelectorAll(`.expenses-amount`);
        inputName2.forEach((event)=>{
            event.addEventListener('input', (event)=>{
                event.target.value = event.target.value.replace(/\D/gi,'');
            });
        });
        if (expensesItems.length === 3){
            expensesPlus.style.display = 'none';
        }

    };
AppData.prototype.getExpenses = function(){
    let _this = this;
    expensesItems.forEach(function(item){
            
        let itemExpenses = item.querySelector('.expenses-title').value;
        let cashExpenses = item.querySelector('.expenses-amount').value;
        if (itemExpenses !== '' && cashExpenses !== ''){
                
            _this.expenses[itemExpenses] = cashExpenses;

        }
    });
};
AppData.prototype.addIncomeBlock = function(){

    let cloneIncomeItem = incomeItems[0].cloneNode(true);
    incomeItems[0].parentNode.insertBefore(cloneIncomeItem, incomePlus);
    incomeItems = document.querySelectorAll('.income-items');
        

    if (incomeItems.length === 2){

        let elem1 = incomeItems[1].querySelector('.income-title');
        elem1.placeholder = '';
        elem1.value = '';
        let elem2 = incomeItems[1].querySelector('.income-amount');
        elem2.placeholder = '';
        elem2.value = '';

    }
    if (incomeItems.length === 3){
        
        let elem1 = incomeItems[2].querySelector('.income-title');
        elem1.placeholder = '';
        elem1.value = '';
        let elem2 = incomeItems[2].querySelector('.income-amount');
        elem2.placeholder = '';
        elem2.value = '';

    }
    let inputName = document.querySelectorAll('.income-title');
    inputName.forEach((event)=>{
        event.addEventListener('input', (event)=>{
        
            event.target.value = event.target.value.replace(/([A-Z])|(\d)/gi, '');

    });
    });
    let inputName2 = document.querySelectorAll(`.income-amount`);
    inputName2.forEach((event)=>{
        event.addEventListener('input', (event)=>{
            
            event.target.value = event.target.value.replace(/\D/gi,'');
        
        });
    });

    if (incomeItems.length === 3){
        incomePlus.style.display = 'none';
    }
};

AppData.prototype.getIncome = function(){
    let _this = this;
    
    incomeItems.forEach(function(item){
           
        let itemIncome = item.querySelector('.income-title').value;
        let cashIncome = item.querySelector('.income-amount').value;
        if (itemIncome !== '' && cashIncome !== ''){

            _this.income[itemIncome] = cashIncome;

        } 

    });

};
AppData.prototype.getAddExpenses = function(){
        
    let _this = this;
    let addExpenses = additionalExpensesItem.value.split(',');
    addExpenses.forEach(function(item){

        item = item.trim();
        if (item !== ''){

            _this.addExpenses.push(item);

        }
    });
};

AppData.prototype.getAddIncome = function(){
    let _this = this;
    additionalIncomeItem.forEach(function(item){
        
        let itemValue = item.value.trim();    
        if (itemValue !== ''){

            _this.addIncome.push(itemValue);

       }

    });
};
AppData.prototype.addNewPeriod = function(){

    periodAmount = document.querySelector('.period-amount');
    periodAmount.textContent = periodSelect.value;

};
AppData.prototype.checkInput = function(){
    
    if (salaryAmount.value === ""){

        start.disabled = true;

    } else {

        start.disabled = false;

    }
};

AppData.prototype.getExpensesMonth = function (){
        
    for (let key in this.expenses) {

        this.expensesMonth += +this.expenses[key];

    }  
       
};
AppData.prototype.getIncomeMonth = function(){

    for (let key in this.income) {

        this.inComeMonth += +this.income[key];

    }

};
AppData.prototype.getBudget = function (){

    this.budgetDay =  (this.budget - this.expensesMonth)/30;
    this.budgetMonth = (this.budget + this.inComeMonth - this.expensesMonth);

};
AppData.prototype.getTargetMonth = function() {

    return targetAmount.value/this.budgetMonth;

}; 
AppData.prototype.calcSavedMoney = function(){

    return this.budgetMonth * Number(periodSelect.value);

};
AppData.prototype.startObject = function(){
    
    this.start();

};
AppData.prototype.turnOff = function(){

    let leftElem = document.querySelector('.data');
    let inputs = leftElem.querySelectorAll('[type ="text"]');
    inputs.forEach((elem)=>{
            
        elem.disabled = true;
   
    });
    start.style.display = "none";
    cancel.style.display = 'block';

};

AppData.prototype.startReset = function(){
     
        this.reset();

};
AppData.prototype.reset = function(){
        
    let leftElem = document.querySelector('.data');
    let rigthElem = document.querySelector('.result');
    let rigthInputs = rigthElem.querySelectorAll('[type ="text"]');
    rigthInputs.forEach((elem)=>{
          
        elem.disabled = false;
        elem.value = '';
   
    });
        
    expensesPlus.style.display = 'block';
    expensesItems = document.querySelectorAll('.expenses-items');
    for (let i = 1; i < expensesItems.length; i++){

        expensesItems[i].remove();
            
    }
        
    let leftInputs = leftElem.querySelectorAll('[type ="text"]');
    leftInputs.forEach((elem)=>{

        elem.disabled = false;
        elem.value = '';
   
    });
    start.style.display = "block";
    cancel.style.display = 'none';
    periodSelect.value = '1';
    periodAmount.textContent = periodSelect.value;

    incomePlus.style.display = 'block';
    incomeItems = document.querySelectorAll('.income-items');
    for (let i = 1; i < incomeItems.length; i++){

        incomeItems[i].remove();
            
    }
    this.budget = 0;
    this.budgetDay = 0;
    this.budgetMonth = 0;
    this.expensesMonth = 0;
    this.inComeMonth = 0;
    expensesMonthValue.value = 0;
    budgetMonthValue.value = 0;
    budgetDayValue.value = 0;
    this.addIncome.length = 0;
    this.addExpenses.length = 0;
    for (let key in this.expenses){
        
        delete this.expenses[key];

    }
    for (let key in this.income){
            
        delete this.income[key];

    }
};


    
let appData = new AppData();

AppData.prototype.eventListeners = function(){

    salaryAmount.addEventListener('input', appData.checkInput);
    start.addEventListener('mouseover', appData.checkInput);
    start.addEventListener('click', appData.startObject.bind(appData));
    expensesPlus.addEventListener('click', appData.addExpensesBlock);
    incomePlus.addEventListener('click', appData.addIncomeBlock);
    period.addEventListener('input', appData.addNewPeriod);
    periodSelect.addEventListener('input',  appData.ountPeriod.bind(appData));

    let inputName = document.querySelectorAll('[placeholder = "Наименование"]');
    inputName.forEach((event)=>{
        event.addEventListener('input', (event)=>{
            event.target.value = event.target.value.replace(/([A-Z])|(\d)/gi, '');
        });
    });
    
    let inputName2 = document.querySelectorAll('[placeholder = "Сумма"]');
    inputName2.forEach((event)=>{
        event.addEventListener('input', (event)=>{
            event.target.value = event.target.value.replace(/\D/gi,'');
        });
    });
 
    cancel.addEventListener('click', appData.startReset.bind(appData));
 
};
appData.eventListeners();

