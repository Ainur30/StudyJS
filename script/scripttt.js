"use strict";
let add = ["saas", "fsdsad", "sadsad"];
function transform(){
    
       return add.map((key) =>
        key = key.slice(0, 1).toUpperCase() + key.slice(1))
        .join(', ');
}
alert(transform());
