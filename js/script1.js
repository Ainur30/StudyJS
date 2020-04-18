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
        this.k = 1;
        
    }
    start(){

        this.budget = +salaryAmount.value;
        this.getExpInc();
        this.getIncomeMonth();
        this.getExpensesMonth();
        this.getAddExpInc();
        //this.getAddExpenses();
        //this.getAddIncome();
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

    addExpIncBlock(){
      
        let _this = this;
    
        if (_this.className === 'btn_plus expenses_add'){
            
            let cloneExpensesItem = expensesItems[0].cloneNode(true);
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
           

        } else if (_this.className === 'btn_plus income_add'){
            let cloneIncomeItem = incomeItems[0].cloneNode(true);
            incomeItems[0].parentNode.insertBefore(cloneIncomeItem, incomePlus);
            for(let i = 0; i < cloneIncomeItem.childNodes.length; i++){
                cloneIncomeItem.childNodes[i].value = '';
                cloneIncomeItem.childNodes[i].placeholder = '';
            }
            incomeItems = document.querySelectorAll('.income-items');
            if (incomeItems.length === 3){
                incomePlus.style.display = 'none';
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

        }
       
       

        
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
    
    getAddExpInc(){
        additionalIncomeItem.forEach((item) => {
        
            let itemValue = item.value.trim();    
            if (itemValue !== ''){
    
               this.addIncome.push(itemValue);
    
           }
    
        });  

        let addExpenses = additionalExpensesItem.value.split(',');
        addExpenses.forEach((item) => {

            item = item.trim();
            if (item !== ''){

                this.addExpenses.push(item);

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

        let leftElem = document.querySelector('.data');
        let inputs = leftElem.querySelectorAll('[type ="text"]');
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
        this.k = 1;
      
        for (let key in this.expenses){
            
            delete this.expenses[key];

        }
        
        for (let key in this.income){
                
            delete this.income[key];

        }

    }
    eventListeners(event){
        
        salaryAmount.addEventListener('input', this.checkInput);
        start.addEventListener('mouseover', this.checkInput.bind(this));
        start.addEventListener('click', this.startObject.bind(this));
        expensesPlus.addEventListener('click', this.addExpIncBlock);
        incomePlus.addEventListener('click', this.addExpIncBlock);
        period.addEventListener('input', this.addNewPeriod);
        periodSelect.addEventListener('input',  this.ountPeriod.bind(this));
    
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
     
        cancel.addEventListener('click', this.startReset.bind(this));

    }
}
    
   

const appData = new AppData();
appData.eventListeners();

