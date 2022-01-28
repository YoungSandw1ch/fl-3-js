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
