
let num = 266219,
    value = 1;
num = String(num);
for (let i = 0; i<num.length; i++) {
    value *=num[i]; 
}
let val = value ** 4;

console.log(String(val).substr(0,2));

 