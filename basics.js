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

// const ul = document.querySelector('.people');
// let people = ['tom', 'matt', 'kait', 'mer', 'ryan', 'cassie'];

// let html = ``;

// people.forEach((person) => {
//   // CREATE HTML TEMPLATE FOR EACH PERSON
//   html += `<li style='color: purple'>${person}</li>`;
// });

// ul.innerHTML = html;

// JAVASCRIPT CORE BASICS AGAIN LOL
//CHAPTER 2

// // template strings
// const title = 'Best reads of 2020';
// const author = 'Tom';
// const likes = 30;
// // concatenation

// let result =
//   'The Blog called ' + title + ' by ' + author + ' has ' + likes + ' likes';
// console.log(result);
// // template string way or template literal
// let result2 = `The Blog called ${title} by ${author} has ${likes} likes!`;
// console.log(result2);
// // creating html templates

// let html = `
// <h2>${title}</h2>
// <p>${author}</p>
// <span>This blog has ${likes} likes</span>`;

// console.log(html);

/// ARRAYS

// let ninjas = ['Tom', 'Ryu', 'Chun-li'];

// console.log(ninjas);

// console.log(ninjas[1]);

// ninjas[1] = 'Ken';
// console.log(ninjas[1]);

// let ages = [25.3, 35, 55];
// console.log(ages[2]);

// let random = ['tom', 'sean', 30, 20];
// console.log(random);

// console.log(ninjas.length);

// ARRAY METHODS
//let result = ninjas.join('-');

//let result = ninjas.indexOf('Ryu');
//let result = ninjas.concat(['Bill', 'Ryan']);
// let result = ninjas.push('Ken');
// result = ninjas.pop();
// console.log(ninjas);

/// NULL AND UNDEFINED

// let age = null;
// console.log(age, age + 3, `the age is ${age}`);

// BOOLEANS AND COMPARISONS
// console.log(true, false, 'true', 'flase');
// METHODS CAN RETURN BOOLEANS

// let email = 'tonw268@gmail.com';
// let names = ['tom', 'mario', 'toad'];

// let result = email.includes('@');

// let result1 = names.includes('mario');
// console.log(result1);

// console.log(result);

// COMPARISON OPERATORS

// let age = 25;

// console.log(age == 25);
// console.log(age == 30);
// console.log(age != 30);
// console.log(age > 20);

/// SECTION 3 CONTROL FLOW

// FOR LOOPS

// for (let i = 0; i < 5; i++) {
//   console.log('in loop', i);
// }

// console.log('loop finished');

// const names = ['tom', 'matt', 'kaitlynn', 'mer', 'tony'];

// for (let i = 0; i < names.length; i++) {
//   //console.log(names[i]);
//   let html = `<div>${names[i]}</div>`;
//   console.log(html);
// }

/// WHILE LOOPS
// const names = ['tom', 'mario', 'lugi'];
// // let i = 0;
// // while (i < 5) {
// //   console.log('in loop:', i);
// //   i++;
// // }

// let i = 0;
// while (i < names.length) {
//   console.log(names[i]);
//   i++;
// }

// DO WHILE LOOPS
// let i = 2;
// do {
//   console.log('val of i is', i);
//   i++;
// } while (i < 5);

// IF STATEMENT

// const age = 25;
// if (age > 20) {
//   console.log('You are over 20 years old');
// }

// const ninjas = ['tom', 'sean', 'ryu', 'mario'];

// if (ninjas.length > 3) {
//   console.log('You have 4 ninjas');
// }

// const password = 'p@ssword';

// if (password.length >= 8) {
//   console.log('that password is long enough');
// }

// ELSE IF STATEMENTS

// const password = 'p@ssword1234';
// if (password.length >= 12) {
//   console.log('that password is mighty strong');
// } else if (password.length >= 8) {
//   console.log('that password is long enough');
// } else {
//   console.log('Your password is not long enough');
// }

// LOGICAL OPERATORS - OR || AND &&

// const password = 'password';
// if (password.length >= 12 && password.includes('@')) {
//   console.log('that password is mighty strong');
// } else if (password.length >= 8 || password.includes('@')) {
//   console.log('that password is strong enough');
// } else {
//   console.log('Your password is not strong enough');
// }

// LOGICAL NOT (!)

// let user = false;
// if (!user) {
//   console.log('User is not logged in!!');
// }

// BREAK & CONTINUE

// const scores = [50, 90, 0, 25, 100, 30];

// for (let i = 0; i < scores.length; i++) {
//   if (scores[i] == 0) {
//     continue;
//   }
//   console.log('your score: ', scores[i]);

//   if (scores[i] === 100) {
//     console.log('Congrats on the top score');
//     break;
//   }
// }

// SWITCH STATEMENTS
// const grade = 'D';
// switch (grade) {
//   case 'A':
//     console.log('You got and A!');
//     break;
//   case 'B':
//     console.log('You got and B!');
//     break;
//   case 'C':
//     console.log('You got and C!');
//     break;
//   case 'D':
//     console.log('You got and D!');
//     break;
//   case 'E':
//     console.log('You got and E!');
//     break;
//   default:
//     console.log('Not a valid grade');
// }

// FUNCTION & METHODS

// FUNCTION DECLARATIONS & EXPRESSIONS
// FIUNCTION DECLARATION

// function greet() {
//   console.log('hello there');
// }
// greet();
// greet();
// greet();

// /// FUNCTION EXPRESSION

// const speak = function () {
//   console.log('GDay');
// };

// speak();

// ARGUMENTS & PARAMETERS

// const speak = function (name = 'Billy', time = 'night') {
//   console.log(`good ${time} ${name}`);
// };

// speak();
// speak('Tom', 'Afternoon');

// RETURNING VALUES
// const calcArea = function (radius) {
//   let area = 3.14 * radius ** 2;
//   return area;
// };

// const area = calcArea(5);
// console.log(area);

// ARROW FUNCTIONS

// let calcArea = (radius) => {
//   return 3.14 * radius ** 2;
// };

// let area = calcArea(5);

// console.log(` the area is ${area}`);

// FUNCTIONS VS METHODS
// const name = 'Tom';
// // FUNCTIONS
// const greet = () => 'Hello';

// let resultOne = greet();
// console.log(resultOne);
// // METHODS

// let resultTwo = name.toUpperCase();
// console.log(resultTwo);

// FOREACH METHOD AND CALLBACKS

// const myFunc = (callbackFunc) => {
//   // do something
//   let value = 50;
//   callbackFunc(value);
// };

// myFunc((value) => {
//   // do something
//   console.log(value);
// });

// let people = ['tom', 'matt', 'kait', 'mer', 'jay', 'em'];

// const logPerson = (person, index) => {
//   console.log(`${index}- hello ${person}`);
// };

// people.forEach(logPerson);

// CALLBACK FUNCTIONS IN ACTION
// const ul = document.querySelector('.people');
// const people = ['tom', 'matt', 'kait', 'mer', 'jay', 'em'];

// let html = ``;

// people.forEach((person) => {
//   // create html template
//   html += `<li style='color:purple'>${person}</li>`;
// });

// ul.innerHTML = html;

// OBJECT LITERALS

// CREATING OBJECT LITERALS

// let user = {
//   name: 'Tom',
//   age: 32,
//   email: 'tomw268@gmail.com',
//   location: 'MI',
//   blogs: ['why mac & cheese rules', '10 things to make with vegimite'],
// };

// console.log(user.email);

// console.log(user['name']);

// ADDING METHODS
// let user = {
//   name: 'Tom',
//   age: 32,
//   email: 'tomw268@gmail.com',
//   location: 'MI',
//   blogs: ['why mac & cheese rules', '10 things to make with vegimite'],
//   login: function () {
//     console.log('the user logged in');
//   },
//   logout: function () {
//     console.log('the user logged out');
//   },
//   logBlog: function(){
//     console.log
//   }
// };

// user.login();
// user.logout();

// THIS KEYWORD
// let user = {
//   name: 'Tom',
//   age: 32,
//   email: 'tomw268@gmail.com',
//   location: 'MI',
//   blogs: ['why mac & cheese rules', '10 things to make with vegimite'],
//   login() {
//     console.log('the user logged in');
//   },
//   logout() {
//     console.log('the user logged out');
//   },
//   logBlog() {
//     //console.log(this.blogs);
//     console.log('this user has written the following blogs:');
//     this.blogs.forEach((blog) => {
//       console.log(blog);
//     });
//   },
// };

// user.login();
// user.logout();
// user.logBlog();

// OBJECTS IN ARRAYS
// const blogs = [
//   {
//     title: 'Why mac & cheese rules',
//     likes: 30,
//   },
//   {
//     title: '10 things to make with vegimite',
//     likes: 50,
//   },
// ];
// let user = {
//   name: 'Tom',
//   age: 32,
//   email: 'tomw268@gmail.com',
//   location: 'MI',
//   blogs: [
//     {
//       title: 'Why mac & cheese rules',
//       likes: 30,
//     },
//     {
//       title: '10 things to make with vegimite',
//       likes: 50,
//     },
//   ],
//   login() {
//     console.log('the user logged in');
//   },
//   logout() {
//     console.log('the user logged out');
//   },
//   logBlog() {
//     //console.log(this.blogs);
//     console.log('this user has written the following blogs:');
//     this.blogs.forEach((blog) => {
//       console.log(blog.title, blog.likes);
//     });
//   },
// };

// user.login();
// user.logout();
// user.logBlog();

// // THE MATH OBJECT

// console.log(Math);
// console.log(Math.PI);
// console.log(Math.E);

// const area = 7.7;

// console.log(Math.round(area));
// console.log(Math.floor(area));
// console.log(Math.ceil(area));
// console.log(Math.trunc(area));

// // GENERATE RANDOM NUMBERS

// const random = Math.random();
// console.log(random);

// console.log(Math.round(random * 100));

//// THE DOM !!!!
// THE QUERY SELECTOR

// const para = document.querySelector('p');
// console.log(para);

// const paraError = document.querySelector('.error');
// console.log(paraError);

// const allP = document.querySelectorAll('p');
// const errors = document.querySelectorAll('.error');

// allP.forEach((para) => {
//   console.log(para);
// });

// console.log(errors);

// OTHER WAYS TO QUERY THE DOM
// GET ELEMENT BY ID

// const title = document.getElementById('page-title');
// console.log(title);

// // GET ELEMENTS BY CLASS NAME

// const errors = document.getElementsByClassName('error');
// console.log(errors);

// // GET ELEMENTS BY TAG NAME

// const paras = document.getElementsByTagName('p');
// console.log(paras);
// console.log(paras[2]);

// ADDING AND CHANGING PAGE CONTENT

// const firstP = document.querySelector('p');
// // firstP.innerText = 'Hello World, My Name is Tom Walker';

// const paras = document.querySelectorAll('p');

// // paras.forEach((para) => {
// //   para.innerText += ' new Text';
// // });
// const content = document.querySelector('.content');

// //console.log(content.innerHTML);
// //content.innerHTML = '<h2>This is a new H2 </h2>';

// const people = ['tom', 'kait', 'mario'];

// people.forEach((person) => {
//   content.innerHTML += `<p>${person}</p>`;
// });

// GETTING & SETTING ATTRIBUTES

// const link = document.querySelector('a');

// console.log(link.getAttribute('href'));
// link.setAttribute('href', 'https://www.espn.com');
// link.innerText = 'ESPN the Leader in Sports';

// const msg = document.querySelector('p');

// console.log(msg.getAttribute('class'));

// msg.setAttribute('class', 'success');
// msg.setAttribute('style', 'color: green');

// CHANGING CSS STYLES

// const title = document.querySelector('h1');

// //title.setAttribute('style', 'margin: 50px');
// console.log(title.style);

// console.log(title.style.color);

// title.style.margin = '50px';

// title.style.color = 'crimson';

// title.style.fontSize = '50px';

// title.style.margin = '';

// ADDING AND REMOVING CLASSES

// const content = document.querySelector('p');

// console.log(content.classList);

// content.classList.add('error');
// content.classList.remove('error');
// content.classList.add('success');

const paras = document.querySelectorAll('p');

paras.forEach((p) => {
  if (p.textContent.includes('error')) {
    p.classList.add('error');
  }
  if (p.textContent.includes('success')) {
    p.classList.add('success');
  }
});
const title = document.querySelector('.title');
title.classList.toggle('test');
title.classList.toggle('test');
