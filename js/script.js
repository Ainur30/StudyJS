"use strict";
/*
let hEnd, mEnd, sEnd, s = "", m = "", y = "",
    h = "", minute = "", seconds = "",
    day=new Date(),
  month = ["Января", "Февраля", "Марта", "Апреля", "Мая", "Июня", "Июля", "Августа", "Сентября",
   "Октября", "Ноября", "Декабря"],
  weekday = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
let sec = day.getSeconds();
let hour = day.getHours();
let min = day.getMinutes();


function getHendItem(){
if (hour.toString().slice(-1) >= 2 && hour.toString().slice(-1) <= 4 ){
  hEnd = "а";
  
} else if (hour.toString().slice(-1) >= 5 && hour.toString().slice(-1) <= 9){
  hEnd = "ов";
  
} else  {
  hEnd = "";
  
} 
 if ( min.toString().slice(-1) >= 2 && min.toString().slice(-1)  <= 4){
  mEnd = "ы";
} else if (min.toString().slice(-1) === 0 || (min.toString().slice(-1) >= 5 && min.toString().slice(-1) <= 9)){
  mEnd = "";
} else  {
  mEnd = "а";
}
if ( sec.toString().slice(-1) >= 2 && sec.toString().slice(-1)  <= 4){
  sEnd = "ы";
} else if (sec.toString().slice(-1) === 0 ||(sec.toString().slice(-1) >= 5 && sec.toString().slice(-1) <= 9)){
  sEnd = "";
} else  {
  sEnd = "а";
}
return;
}
getHendItem();

document.write("Сегодня " + weekday[day.getDay()] +", "+ 
day.getDate() + " " + month[day.getMonth()] +" "+ day.getFullYear()+" года, " + day.getHours() + 
` час${hEnd} ` + day.getMinutes() + ` минут${mEnd} ` + day.getSeconds() + ` секунд${sEnd} `+ "<br>");
function formatDate() {

   let r = day.getDate();
  if ( r < 10) {s = '0';}

  let w = day.getMonth() + 1;
  if (w < 10) {m = '0';}

  let q = day.getHours();
  if (q < 10) {h = '0';}
  let o = day.getMinutes();
  if (o < 10) {min = '0';}
  let d = day.getSeconds();
  if (d < 10) {seconds = '0';}
  

  return;
}
formatDate();
function zero_first_format(value)
    {
        if (value < 10)
        {
            value='0'+value;
        }
        return value;
    }

    /* функция получения текущей даты и времени 
    function date_time()
    {
        var current_datetime = new Date();
        var day = zero_first_format(current_datetime.getDate());
        var month = zero_first_format(current_datetime.getMonth()+1);
        var year = current_datetime.getFullYear();
        var hours = zero_first_format(current_datetime.getHours());
        var minutes = zero_first_format(current_datetime.getMinutes());
        var seconds = zero_first_format(current_datetime.getSeconds());

        return day+"."+month+"."+year+" "+hours+":"+minutes+":"+seconds;
    }

     выводим текущую дату и время на сайт в блок с id "current_date_time_block" 
    document.getElementById('current_date_time_block').innerHTML = date_time();
setInterval(function () {
  document.getElementById('current_date_time_block2').innerHTML = date_time();
}, 1000);

document.write(`${s}${day.getDate()}.${m}${day.getMonth()+1}.${day.getFullYear()} - 
${h}${day.getHours()}:${minute}${day.getMinutes()}:${seconds}${day.getSeconds()}`);
*/
