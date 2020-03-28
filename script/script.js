let money = 250,
    Income = "music",
    addExpenses = "интернет, такси, коммуналка",
    deposit = true,
    mission = 500000,
    period = 11;
console.log(typeof money);
console.log(typeof Income);
console.log(typeof deposit);
console.log(addExpenses.length);
let NewArr = addExpenses.toUpperCase().split(",");
console.log(NewArr);
let budgetDay = money/30;
console.log(budgetDay);


