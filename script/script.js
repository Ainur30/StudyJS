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
console.log(`Период равен: ${period} месяцев`);
console.log(`цель заработать: ${mission} рублей/долларов/гривен/юани`);

let NewArr = addExpenses.toLowerCase().split(",");
console.log(NewArr);

let budgetDay = money/30;
console.log("Бюджет на месяц: ", budgetDay);

money = +prompt ("Ваш месячный доход?", "");
addExpenses = prompt("Перечислите возможные расходы за рассчитываемый период через запятую",'');
deposit = confirm('Есть ли у вас депозит в банке?', '');

let expenses1 = prompt("Введите обязательную статью расходов?", ''),
    expenses2 = prompt("Введите обязательную статью расходов?", ''),
    amount1 = +prompt("Во сколько это обойдется?", ''),
    amount2 = +prompt("Во сколько это обойдется?", ''),
    budgetMonth;

budgetMonth = money - (amount1 + amount2);
console.log(`Бюджет на месяц: ${budgetMonth}`);

let monthForMission = Math.ceil(mission/budgetMonth);
console.log(`Цель будет достигнута за: ${monthForMission}`);

budgetDay = budgetMonth/30;
console.log(`Ваш бюджет на день: ${Math.floor(budgetDay)}`);

if (budgetDay >= 1200) {
    console.log("У вас высокий уровень дохода");
} else if (budgetDay >= 600) {
        console.log("У вас средний уровень дохода");
    } else if (budgetDay > 0 & budgetDay < 600) {
            console.log("К сожалению у вас доход ниже среднего");
         }
         
if (budgetDay < 0) {
    console.log("Что-то пошло не так");
}
if (budgetDay === 0) {
    console.log("У вас нет дохода");
}
 






