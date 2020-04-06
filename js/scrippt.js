"use strict";
let week = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];

function getWeekDay(date) {
  week = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];

  return week[date.getDay()];
}

let date = new Date(); 


for (let i = 0; i < week.length; i++){    
    if (getWeekDay(date) === week[i]){
        let day = document.getElementById(`day${i}`);
        day.innerHTML = "<strong>" + week[i] + "</strong>";

     } else { 
    
        let day = document.getElementById(`day${i}`);
        day.innerHTML = week[i] ;
    }
    
 }
    