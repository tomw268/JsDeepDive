// let hello = 'Hello World!!!';
// console.log(hello);

// // 3 ways to declare variables
// // var is global scop
// var a = 1;

// a = 2;
// console.log(a);

// // let b = 3;
// // b = 4;
// // console.log(b);

// // consts and let are block scope
// const c = 1;
// console.log(c);

// // if statements

// if (true) {
//   var b = 2;
// }
// console.log(b);

// REMEBER TO USE MORE LET AND CONSTS, TRY TO NOT MAKE YOUR CODE FLEXIABLE

// BOLLean Expression

// let a = 5 > 6;
// console.log(a);

// // math expression

// let b = 5 + 10;

// console.log(b);

// CONDITIONALS

// if (5 > 6) {
//   console.log('this is true');
// } else if (5 < 6) {
//   console.log('this is true');
// } else {
//   console.log('this is false');
// }

// // the switch statement

// const a = 3;
// switch (a) {
//   case 1:
//     console.log('A equals 1');
//     break;
//   case 2:
//     console.log('A equals 2');
//     break;
//   case 3:
//     console.log('A equals 3');
//     break;
//   default:
//     break;
// }

// LOOPS

// let x = 0;
// while (x <= 10) {
//   console.log(x);
//   x++;
// }

// for (let x = 0; x <= 10; x++) {
//   console.log(x);
// }

// FUNCTIONS

// const fireBall = (pwr) => {
//   console.log(pwr + ' FireBall !!!!');
// };

// fireBall(150);
// fireBall(250);
// fireBall(350);
// fireBall(600);

// // getting a random number
// let num = Math.random();
// console.log(num);

// LOOPS

// let counter = 0;

// while (counter < 10) {
//   console.log(counter);
//   counter += 1;
// }

// for (let counter = 0; counter < 10; counter++) {
//   console.log(counter);
// }

// ARRAYS

// const myArray = [5, 'cheese', true];

// console.log(myArray);
// console.log(myArray[0]);
// console.log(myArray[1]);
// console.log(myArray[2]);

//// OBJECTS

// const myObject = {
//   name: 'Tom Walker',
//   age: 32,
//   from: 'The murder mitten',
// };
// console.log(myObject);
// console.log(myObject.name);
// console.log(myObject.age);
// console.log(myObject.from);

/// FUNCTIONS

// const myFunction = (name, lastName) => {
//   console.log(name, lastName);
// };

// myFunction('Tom', 'Walker');

// const myFunc = () => {
//   return 'I was Baked';
// };
// console.log(myFunc().split('').join(' ').toLocaleUpperCase());

// const myFunc = (num1, num2) => {
//   return num1 + num2;
// };

// console.log(myFunc(10, 52));

// RECURSION
// function calls itself with a loop

// const myFunc = (num) => {
//   for (i = 0; i < num; i++) {
//     console.log(i);
//   }
// };

// myFunc(9);

// LOOPING WITH RECURSION, IF YOU WANT TO NOT CREATE A INFINATE LOOP MAKE SURE ITS CHECKING IF IT IS EQUAL TO SOMETHING
// const myFunc = (num) => {
//   if (num === 0) {
//     return 0;
//   } else {
//     console.log(num);
//     myFunc(num - 1);
//   }
// };
// myFunc(9);

// RETURNING MULTI VALUES

// const myFunc = ([item, ...theRest]) => {
//   if (theRest.length >= 0) {
//     return true;
//   } else {
//     console.log(item);
//     myFunc(theRest);
//   }
// };

// myFunc([1, 2, 3, 4, 5, 6]);

// PASSING FUNCTIONS AS A PARAM

// const myFunc = (aFunc) => {
//   aFunc();
// };

// myFunc(() => {
//   console.log('Im Alive!!!!');
// });

//// FUNCTIONS AGAIN

// FUNCTIONS DECLARTION

// let greet = () => {
//   console.log('Hello There');
// };

// /// FUNCTION EXPRESSION
// const speak = function () {
//   console.log('Good Day!');
// };

// // CALLING A FUNCTION
// // greet();
// // greet();
// // greet();
// // greet();
// speak();
// speak();
// speak();

/// passing values into a function
// // this name is a paramater
// const speak = (name, time) => {
//   console.log(`good ${time} ${name}`);
// };
// const speak = (name = 'lugi', time = 'night') => {
//   console.log(`good ${time} ${name}`);
// };
// // this is know as an argument
// speak('Tom', 'morning');

/// RETURNING VALUES

// const calcArea = (radius) => {
//   return 3.14 * radius ** 2;
// };

// const area = calcArea(5);
// console.log(area);

/// ARROW FUNCTIONS

// const calcArea = (radius) => {
//   return 3.14 * radius ** 2;
// };

// const area = calcArea(5);
// console.log('area is:', area);

// const greet = () => {
//   return 'Hello World';
// };

// const hello = greet();
// console.log(hello);

// const bill = (products, tax) => {
//   let total = 0;
//   for (let i = 0; i < products.length; i++) {
//     total += products[i] + products[i] * tax;
//   }
//   return total;
// };

// const cost = bill([6, 3, 4], 0.6);

// console.log(cost);

///FUNCTIONS
// const greet = () => 'hello';
// let resultOne = greet();
// console.log(resultOne);

// /// METHODS

// const name = 'Tom';
// let resultTwo = name.toUpperCase();
// console.log(resultTwo);

// CALLBACKS AND FOREACH
// const myFunc = (callbackFunc) => {
//   let value = 50;
//   callbackFunc(value);
// };
// myFunc(value=>{
//   console.log(value);
// });

// let people = ['tom', 'matt', 'kait', 'mer', 'ryan', 'cassie'];
// // foreach iterates over an array
// const logPerson = (person, index) => {
//   console.log(`${index} Hello ${person}`);
// };
// people.forEach(logPerson);

// GET A REF TO THE 'UL'

const ul = document.querySelector('.people');
let people = ['tom', 'matt', 'kait', 'mer', 'ryan', 'cassie'];

let html = ``;

people.forEach((person) => {
  // CREATE HTML TEMPLATE FOR EACH PERSON
  html += `<li style='color: purple'>${person}</li>`;
});

ul.innerHTML = html;
