"use strict";

let a = 10;
let b = 20;

a = b;
a = 30;

console.log(a,b);

// Original object
let originalObject = {
    name: "John",
    age: 30,
    hobbies: ["reading", "traveling"]
};

// Copying the original object to a new variable
let copiedObject = originalObject;

// Modifying the copied object
copiedObject.name = "Jane";
copiedObject.hobbies.push("cooking");

// Checking the original object
console.log(originalObject);


console.log(person,animal);