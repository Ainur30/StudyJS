"use strict";


const start = document.getElementById('start');
const incomePlus = document.querySelector('.income_add');
const expensesPlus = document.querySelector('.expenses_add');
const checkBox = document.querySelector('#deposit-check');
const additionalIncomeItem = document.querySelectorAll('.additional_income-item');
const budgetMonth = document.querySelectorAll(`[class$="-value"]`);
const salaryAmount = document.querySelector('.salary-amount');
const incomeTitle = document.querySelector('[class="income-title"');
const incomeAmount = document.querySelector('.income-amount');
const expensesTitle = document.querySelector('[class="expenses-title"]');
let expensesItems = document.querySelectorAll('.expenses-items');
const additionalExpensesItem = document.querySelector('.additional_expenses-item');
const depositAmount = document.querySelector('.deposit-amount');
const depositPercent = document.querySelector('.deposit-percent');
const targetAmount = document.querySelector('.target-amount');
const periodSelect = document.querySelector('.period-select');
const budgetMonthValue = document.querySelector('.budget_month-value');
const budgetDayValue = document.querySelector('.budget_day-value');
const expensesMonthValue = document.querySelector('.expenses_month-value');
const additionalExpensesValue = document.querySelector('.additional_expenses-value');
const additionalIncomeValue = document.querySelector('.additional_income-value');
const targetMonthValue = document.querySelector('.target_month-value');
const incomePeriodValue = document.querySelector('.income_period-value');
let incomeItems = document.querySelectorAll('.income-items');
const period = document.querySelector('.period');
const expensesAmount = document.querySelector(`[class ='expenses-amount']`);
const cancel = document.querySelector('#cancel');
let periodAmount = document.querySelector('.period-amount');

class AppData {

    constructor(){
        
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
        
    }
    start(){

        this.budget = +salaryAmount.value;
        this.getExpInc();
        this.getIncomeMonth();
        this.getExpensesMonth();
        this.getAddExpenses();
        this.getAddIncome();
        this.getBudget();
        this.turnOff();
        this.showResult();

    }
    ountPeriod(){

        incomePeriodValue.value = this.budgetMonth * periodSelect.value;
        return incomePeriodValue.value;

    }
    showResult(){

        budgetMonthValue.value = this.budgetMonth ;
        budgetDayValue.value = Math.ceil(this.budgetDay);
        expensesMonthValue.value = this.expensesMonth;
        additionalExpensesValue.value = this.addExpenses.join(', ');
        additionalIncomeValue.value = this.addIncome.join(', ');
        targetMonthValue.value = Math.ceil(this.getTargetMonth());
        incomePeriodValue.value = this.calcSavedMoney();
        this.ountPeriod();

    }
    addExpensesBlock(){

        const cloneExpensesItem = expensesItems[0].cloneNode(true);
        expensesItems[0].parentNode.insertBefore(cloneExpensesItem, expensesPlus);
        for(let i = 0; i < cloneExpensesItem.childNodes.length; i++){
            cloneExpensesItem.childNodes[i].value = '';
            cloneExpensesItem.childNodes[i].placeholder = '';
        }
        expensesItems = document.querySelectorAll('.expenses-items');
        if (expensesItems.length === 3){
            expensesPlus.style.display = 'none';
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
       

    

    }
    addIncomeBlock(){

        const cloneIncomeItem = incomeItems[0].cloneNode(true);
        incomeItems[0].parentNode.insertBefore(cloneIncomeItem, incomePlus);
        for(let i = 0; i < cloneIncomeItem.childNodes.length; i++){
            cloneIncomeItem.childNodes[i].value = '';
            cloneIncomeItem.childNodes[i].placeholder = '';
        }
        incomeItems = document.querySelectorAll('.income-items');
        if (incomeItems.length === 3){
            incomePlus.style.display = 'none';
        }
            
        const inputName = document.querySelectorAll('.income-title');
        inputName.forEach((event)=>{
            event.addEventListener('input', (event)=>{
            
                event.target.value = event.target.value.replace(/([A-Z])|(\d)/gi, '');

        });
        });
        const inputName2 = document.querySelectorAll(`.income-amount`);
        inputName2.forEach((event)=>{
            event.addEventListener('input', (event)=>{
                
                event.target.value = event.target.value.replace(/\D/gi,'');
            
            });
        });

    }
    getExpInc(){

        const count = item => {
            const startStr = item.className.split('-')[0];
            const itemTitle = item.querySelector(`.${startStr}-title`).value;
            const itemAmount = item.querySelector(`.${startStr}-amount`).value;
            if (itemTitle !== '' && itemAmount !== ''){

                this[startStr][itemTitle] = itemAmount;

            } 
        };
        incomeItems.forEach(count);
        expensesItems.forEach(count);

    }
    getAddExpenses(){
        const addExpenses = additionalExpensesItem.value.split(',');
        addExpenses.forEach((item) => {

            item = item.trim();
            if (item !== ''){

                this.addExpenses.push(item);

            }
        });

    }
    getAddIncome(){
        
        additionalIncomeItem.forEach((item) => {
        
            const itemValue = item.value.trim();    
            if (itemValue !== ''){
    
               this.addIncome.push(itemValue);
    
           }
    
        });    
    }
    addNewPeriod(){

        periodAmount = document.querySelector('.period-amount');
        periodAmount.textContent = periodSelect.value;

    }
    checkInput(){

        if (salaryAmount.value === ""){

            start.disabled = true;
    
        } else {
    
            start.disabled = false;
    
        }

    }
    getExpensesMonth(){

        for (let key in this.expenses) {

            this.expensesMonth += +this.expenses[key];
    
        }  

    }
    getIncomeMonth(){

        for (let key in this.income) {

            this.inComeMonth += +this.income[key];
    
        }

    }
    getBudget(){

        this.budgetDay =  (this.budget + this.inComeMonth - this.expensesMonth)/30;
        this.budgetMonth = (this.budget + this.inComeMonth - this.expensesMonth);

    }
    getTargetMonth(){

        return targetAmount.value/this.budgetMonth;

    }
    calcSavedMoney(){

        return this.budgetMonth * Number(periodSelect.value);

    }
    startObject(){

        this.start();

    }
    turnOff(){

        const leftElem = document.querySelector('.data');
        const inputs = leftElem.querySelectorAll('[type ="text"]');
        inputs.forEach((elem)=>{
                
            elem.disabled = true;
    
        });
        start.style.display = "none";
        cancel.style.display = 'block';

    }
    startReset(){

        this.reset();

    }
    reset(){

       const leftElem = document.querySelector('.data');
        const rigthElem = document.querySelector('.result');
        const rigthInputs = rigthElem.querySelectorAll('[type ="text"]');
        rigthInputs.forEach((elem)=>{
            
            elem.disabled = false;
            elem.value = '';
    
        });
            
        expensesPlus.style.display = 'block';
        expensesItems = document.querySelectorAll('.expenses-items');
        for (let i = 1; i < expensesItems.length; i++){

            expensesItems[i].remove();
                
        }
            
        const leftInputs = leftElem.querySelectorAll('[type ="text"]');
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

    }
    
   
}
const appData = new AppData();

class EventListeners extends AppData {
    constructor() {
        super();
    }
    eventListeners(){

        salaryAmount.addEventListener('input', appData.checkInput);
        start.addEventListener('mouseover', appData.checkInput);
        start.addEventListener('click', appData.startObject.bind(appData));
        expensesPlus.addEventListener('click', appData.addExpensesBlock);
        incomePlus.addEventListener('click', appData.addIncomeBlock);
        period.addEventListener('input', appData.addNewPeriod);
        periodSelect.addEventListener('input',  appData.ountPeriod.bind(appData));
    
        const inputName = document.querySelectorAll('[placeholder = "Наименование"]');
        inputName.forEach((event)=>{
            event.addEventListener('input', (event)=>{
                event.target.value = event.target.value.replace(/([A-Z])|(\d)/gi, '');
            });
        });
        
        const inputName2 = document.querySelectorAll('[placeholder = "Сумма"]');
        inputName2.forEach((event)=>{
            event.addEventListener('input', (event)=>{
                event.target.value = event.target.value.replace(/\D/gi,'');
            });
        });
     
        cancel.addEventListener('click', appData.startReset.bind(appData));

    }
}
const listener = new EventListeners();
listener.eventListeners();
