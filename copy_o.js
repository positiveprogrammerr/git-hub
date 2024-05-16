"use strict";

let a = 10;
let b = 20;

a = b;
b = 30;

console.log(a,b);

let person = {
    name : "James",
    age : 20,
}

let animal = {
    name : lion,
    age : 50,
}

person = animal;

animal.age = 30;

