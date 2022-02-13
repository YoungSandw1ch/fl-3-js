// "use strict"

// let eyeseColor;

// let user;

// let userName = 'Вася';
// user = userName;
// console.log(user);

// let userHeight = 145 / 0;
// console.log(userHeight);

// let userNameV1;
// console.log(typeof userNameV1);

// let userSize = "45" / "8";
// console.log(userSize);

// console.log('35' + - "22");

// console.log('35' * "22");

// console.log('588' >userSize++);

// let usersCounter = 0;
// let newUsers = usersCounter++;
// console.log(newUsers);

// console.log(!false && 11 || 18 && !'');

// const username = "Mango";
// console.log("Username is ", username);

// const message = "JavaScript is awesome!";
// alert(message);

// // Просим клиента подтвердить бронь на отель
// // и сохраняем в переменную результат работы confirm
// const isComing = confirm("Please confirm hotel reservation");
// console.log(isComing);

// function foo() {
//   console.log(this);
// }
// foo();

//===================================================================

// const customer = {
//   firstName: 'Jacob',
//   lastName: 'Mercer',
//   getFullName() {
//     // return `${this.firstName} ${this.lastName}`;
//     return this;
//   },
// };

// console.log(customer.getFullName());

// function makeMessage(callback) {
//   // callback() это вызов метода getFullName без объекта
//   console.log(`Обрабатываем заявку от ${callback()}.`);
// }

// makeMessage(customer.getFullName);

//=====================================================================

// function greetGuest(greeting) {
//   console.log(`${greeting}, ${this.username}.`);
// }

// const mango = {
//   username: 'Манго',
// };
// const poly = {
//   username: 'Поли',
// };

// greetGuest.apply(mango, ['Добро пожаловать', 'наш', 'юный']); // Добро пожаловать, Манго.
// greetGuest.apply(poly, ['С приездом']); // С приездом, Поли.

//=====================================================================

// const counter = {
//   value: 0,
//   increment(value) {
//     console.log('increment -> this', this);
//     this.value += value;
//   },
//   decrement(value) {
//     console.log('decrement -> this', this);
//     this.value -= value;
//   },
// };

// const updateCounter = function (value, operation) {
//   operation(value);
// };

// // console.log(counter.increment(10));
// updateCounter(10, counter.increment.bind(counter));
// updateCounter(5, counter.decrement);

// const array = [1, 1, 1, 2, 3, 2, 4, 5, 5];
// const uniqueArray = [...new Set(array)];
// console.log(uniqueArray);

//=================================================
// const numbers = [2, 1, 3, 7, 10, 4, 5];
// console.log(numbers);

// for (let i = 0; i < numbers.length; i += 1) {
//   for (let j = i + 1; j < numbers.length; j += 1) {
//     const a = numbers[i];
//     const b = numbers[j];
//     const temp = a;

//     if (b < a) {
//       numbers[i] = numbers[j];
//       numbers[j] = temp;
//     }
//   }
// }
// console.log(numbers);

// const langs = ['python', 'javascript', 'c++', 'haskel', 'php', 'ruby'];
// console.log(langs);
// ['c++', 'haskel', 'javascript', 'python', 'php', 'ruby'];
// ['c++', 'haskel', 'javascript', 'php', 'python', 'ruby']
// ['c++', 'haskel', 'javascript', 'python', 'php', 'ruby']

// for (let i = 0; i < langs.length; i += 1) {
//   for (let j = i + 1; j < langs.length; j += 1) {
//     const a = langs[i];
//     const b = langs[j];
//     const temp = a;

//     // first letters
//     if (b[0] < a[0]) {
//       langs[i] = langs[j];
//       langs[j] = temp;
//     }
//   }
// }
// console.log(langs);

// const obj = {
//   1: 1,
//   2: 3,
//   4: 5,
// };
// Object.keys(obj);
// console.log(Object.keys(obj).length);

//===========================================================
// function filterArray(numbers, value) {
//   // Change code below this line
//   const filteredArray = [];

//   for (const number of numbers) {
//     if (number <= value) {
//       continue;
//     }
//     filteredArray.push(number);
//   }
//   return filteredArray;
//   // Change code above this line
// }

// console.log(filterArray([1, 2, 3, 4, 5], 3));
// console.log(filterArray([1, 2, 3, 4, 5], 4));
// console.log(filterArray([1, 2, 3, 4, 5], 5));
// console.log(filterArray([12, 24, 8, 41, 76], 38));
//===========================================================

// let number = 10;
// console.log(number);

// console.log(`number++ `, number++);

// console.log(`number `, number);

// console.log(`++number `, ++number);

//===========================================================
