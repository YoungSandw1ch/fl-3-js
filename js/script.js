"use strict"

let eyeseColor;

let user;

let userName = 'Вася';
user = userName;
console.log(user);


let userHeight = 145 / 0;
console.log(userHeight);

let userNameV1;
console.log(typeof userNameV1);

let userSize = "45" / "8";
console.log(userSize);


console.log('35' + - "22");

console.log('35' * "22");

console.log('588' >userSize++);

let usersCounter = 0;
let newUsers = usersCounter++;
console.log(newUsers);

console.log(!false && 11 || 18 && !'');


const username = "Mango";
console.log("Username is ", username);


const message = "JavaScript is awesome!";
alert(message);

// Просим клиента подтвердить бронь на отель
// и сохраняем в переменную результат работы confirm
const isComing = confirm("Please confirm hotel reservation");
console.log(isComing);