"use strict";
//1 задание
let arr = ["244", "344", "544", "254", "467", "789", "241"];
function filterRange(arr) {
    return arr.filter(item => (item[0] === "2" || item[0] === "4"));
    }
 let filtered = filterRange(arr);
 console.log(filtered);


//2 задание
StartAgain:
for (let i = 2; i <= 100; i++) { 

  for (let j = 2; j < i; j++) { 
    if (i % j === 0) {
        continue StartAgain;
    }
  }

  console.log(`Делители числа ${i}: 1 и ${i}`); 
}