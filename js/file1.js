"use strict";
function checkStr(str) {
    if (!(typeof(str) === "string")) {
        str = "Не строка!";
    } else if (str.trim().length > 30) {
        str = str.trim().slice(0, 30) + "...";
    } else {
        str = str.trim();
    }
    return str;
 }
 
alert(checkStr("str"));
  

