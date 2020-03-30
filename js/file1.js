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
        for (let wDay of enWeek ) {
            console.log(wDay);
        }
        break;
    case "ru":
        for (let wDay of ruWeek) {
            console.log(wDay);
        }
    break;
}


// 1)c
 let week = {
    "ru": ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"],
    "en": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
    
};
console.log(week[lang][0]);

// 2 задание 
let namePerson = prompt("Введите свое имя?",'');
let guest = (namePerson === "Артем") ? "Директор" : 
 (namePerson === "Максим") ? "Преподаватель" : "Студент";
 console.log(guest);
