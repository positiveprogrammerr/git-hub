console.log("This is a log");
console.error("This is an error");
console.warn("This is a warning");

const myName = 'Hamid';
const hello = `Hello ${myName}`;

console.log(myName.length);

console.log(hello);

const s = 'technology, hello';

console.log(s.split(','));

const numbers = new Array(1, 2, 3, 4, 5, 6);

const fruit = ['apples', 'oranges', 'pears'];

fruit[3] = 'grapes';
fruit.push('mangos'); // adds at the end of the array
fruit.unshift('bananas'); // adds baginning of the array
fruit.pop(); // removes last item in the array

console.log(fruit);

const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    hobbies: ['music', 'movies', 'sports'],
    address: {
        street: '50 main st',
        city: 'Boston',
        state: 'MA'
    }
}

const {
    firstName,
    lastName,
    address: {
        city
    }
} = person;
//^ --- In Java ---  
// String firstName = person.firstName;
// String lastName = person.lastName;
// String city = person.address.city;

person.email = "johndoe@gmail.com";



const todos = [{
        id: 1,
        text: 'Take out trash',
        isCompleted: true
    },
    {
        id: 2,
        text: 'Meeting with boss',
        isCompleted: true
    },
    {
        id: 3,
        text: 'Dentist appt',
        isCompleted: false
    }
];

const todoJSON = JSON.stringify(todos);

for (let i = 0; i < todos.length; i++) {
    // console.log(todos[i].text)
}

for (let todo of todos) {
    // console.log(todo.text);
}
// console.log(todoJSON);

// forEach
todos.forEach(function (todo) {
    // console.log(todo.text);
});

// map
const todoText = todos.map(function (todo) {
    return todo.text;
});

// filter and map 
const todoCompleted = todos.filter(function (todo) {
    return todo.isCompleted === true;
}).map(function (todo) {
    return todo.text;
});

var age = 20;
const carColor = age => age >= 20 ? 'Black' : 'White';

console.log(carColor(21)); // Output will be 'Black'

function suggestCar(age) {
    const carColor = age >= 20 ? 'Black' : 'White';
    return `Based on your age of ${age}, we suggest a ${carColor} car for you.`;
}

console.log(suggestCar(25)); // Output: "Based on your age of 25, we suggest a Black car for you."
console.log(suggestCar(18)); // Output: "Based on your age of 18, we suggest a White car for you."


const result = (a, b = 3) => console.log(a + b);
const singleResult = a => console.log(a + 5)


// Constructor function for creating Person objects
function Person(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
}

Person.prototype.getFullName = function () {
    return `${this.firstName} ${this.lastName}`;
}

Person.prototype.getAge = function () {
    return `${this.age}`;
}

class Person {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    getFullName() {
        return this.getFullName;
    }
    getAge() {
        return this.getAge;
    }
}



// Creating instances of Person objects
let person1 = new Person("John", "Doe", 30);
let person2 = new Person("Alice", "Smith", 25);
// Accessing properties and methods of the objects

console.log(person1.fullName()); // Output: "John Doe"
console.log(person2.age); // Output: 25