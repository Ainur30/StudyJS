"use strict";
let button = document.getElementById('start');
console.log(button);
let plus1 = document.getElementsByTagName('button')[0];
console.log(plus1);
let plus2 = document.getElementsByTagName('button')[1];
console.log(plus2);
let checkBox = document.querySelector('#deposit-check');
console.log(checkBox);
let input = document.querySelectorAll('.additional_income-item');
console.log(input);
/*
let budgetMonth = document.querySelector('.budget_month-value');
console.log(budgetMonth);
let budgetDay = document.querySelector('.budget_day-value');
console.log(budgetDay);
let expensesMonth = document.querySelector('.expenses_month-value');
console.log(expensesMonth);
let additionalIncome = document.querySelector('.additional_income-value');
console.log(additionalIncome);
let additionalExpenses = document.querySelector('.additional_expenses-value');
console.log(additionalExpenses);
let incomePeriod = document.querySelector('.income_period-value');
console.log(incomePeriod);
let targetMonth = document.querySelector('.target_month-value');
console.log(targetMonth);
*/
let budgetMonth = document.querySelectorAll(`[class$="-value"]`);
console.log(budgetMonth);
let salaryAmount = document.querySelector('.salary-amount');
console.log(salaryAmount);
let incomeTitle = document.querySelector('.income-title');
console.log(incomeTitle);
let incomeAmount = document.querySelector('.income-amount');
console.log(incomeAmount);
let additionalIncomeItem1 = document.querySelector('.additional_income-item');
console.log(additionalIncomeItem1);
let additionalIncomeItem2 = document.querySelector('.additional_income-item');
console.log(additionalIncomeItem2);
let expensesTitle = document.querySelector('.expenses-title');
console.log(expensesTitle);
let expensesAmount = document.querySelector('.expenses-amount');
console.log(expensesAmount);
let additionalExpensesItem = document.querySelector('.additional_expenses-item');
console.log(additionalExpensesItem);
let depositAmount = document.querySelector('.deposit-amount');
console.log(depositAmount);
let depositPercent = document.querySelector('.deposit-percent');
console.log(depositPercent);
let targetAmount = document.querySelector('.target-amount');
console.log(targetAmount);
let periodSelect = document.querySelector('.period-select');
console.log(periodSelect);








