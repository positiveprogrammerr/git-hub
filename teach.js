// var:

// JavaScript-da o'zgaruvchilarni e'lon qilish uchun ishlatiladi.
// var bilan e'lon qilingan o'zgaruvchilar funksiya yoki global miqyosda bo'ladi.
// Ular qayta e'lon qilinishi va qayta tayinlanishi mumkin.
// Ular o'z doirasining eng yuqori qismiga ko'tarilgan.

// Example of var declaration
var x = 5;

x = 10;
function example() {
    var y = 10;
    console.log(x); // Output: 5
}
console.log(x); // Error: y is not defined

// Block-scoped:
if (true) {
    let x = 5;
    console.log(x); // Output: 5
}
console.log(x); // Error: x is not defined


// Unblock-scoped:
if (true) {
    var y = 10;
    console.log(y); // Output: 10
}
console.log(y); // Output: 10



// const:

// ES6 da kiritilgan.(ECMAScript 2015).
// Qiymati qayta tayinlanmaydigan konstantalarni e'lon qilish uchun foydalaniladi.
// Ular let kabi blokli.
// Ularni qayta tayinlash yoki qayta e'lon qilish mumkin emas.


// Example of const declaration
const PI = 3.14;
console.log(PI); // Output: 3.14
// PI = 3.14159; // Error: Assignment to constant variable


//let:

// ES6 da (ECMAScript 2015) taqdim etilgan.
// Blok-ko'lamli o'zgaruvchilarni e'lon qilish uchun foydalaniladi.
// Ular qayta tayinlanishi mumkin, lekin qayta e'lon qilinmaydi.
// Ular o'z ko'lamining yuqori qismiga ko'tarilmaydi.

// Example of let declaration
let a = 5;

if (true) {
    let b = 10;
    console.log(a); // Output: 5
}
// console.log(b); // Error: b is not defined






// Number: Represents numeric values
let num = 10;

// String: Represents textual data
let str = "Hello, World!";

// Boolean: Represents true or false values
let isTrue = true;

// Undefined: Represents the absence of a value or uninitialized variable
let x; // x is undefined

// Null: Represents the intentional absence of any object value
let y = null;

// Symbol (ES6): Represents unique identifiers
const sym = Symbol('description');

// Object: Represents a collection of key-value pairs
let obj = {
    key1: 'value1',
    key2: 'value2'
};

// Function: A callable object that executes a block of code
function add(a, b) {
    return a + b;
}

// Displaying values
// console.log("Number:", num);
// console.log("String:", str);
// console.log("Boolean:", isTrue);
// console.log("Undefined:", x);
// console.log("Null:", y);
// console.log("Symbol:", sym);
// console.log("Object:", obj);
// console.log("Result of add function:", add(5, 3));
