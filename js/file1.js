"use strict";
// 1)a
let lang = "en",
    ruWeek = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"],
    enWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

if (lang === "ru") {
    for (let wDay of ruWeek) {
        console.log(wDay);
    }

} else {
    for (let wDay of enWeek ) {
        console.log(wDay);
    }
}

// 1)b
switch (lang) {
    case "en":
        console.log(enWeek);
        break;
    case "ru":
        console.log(ruWeek);
        break;
}

// 1)c
let week = [
    ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"],
    ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
];
let schedule = (lang === "en") ? week[0] : week[1];
console.log(schedule);

// 2 задание 
let namePerson = prompt("Введите свое имя?",'');
let guest = (namePerson === "Артем") ? "Директор" : 
 (namePerson === "Максим") ? "Преподаватель" : "Студент";
 console.log(guest);
