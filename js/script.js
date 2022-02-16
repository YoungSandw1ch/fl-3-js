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

//=================================================

// const getCommonElement = array => {
//   const arrSameNum = [];

//   for (let i = 0; i < array.length; i += 1) {
//     const isDouble = array.indexOf(array[i]) !== i;
//     const isInclude = !arrSameNum.includes(array[i]);

//     if (isDouble && isInclude) {
//       arrSameNum.push(array[i]);
//     }
//   }

//   return arrSameNum;
// };

// const getCommonElement = array => {
//   let arrSameNum = [];

//   for (let i = 0; i < array.length; i += 1) {
//     for (let j = i + 1; j < array.length; j += 1) {

//     }
//   }

//   return arrSameNum;
// };

// console.log(getCommonElement([1, 1, 1, 1, 2, 2, 2, 3, 2, 1, 17, 17, 19]));

//=================================================

// const isFree = deep => {
//   const up = 7;
//   const down = 2;
//   let distance = down;
//   let count = 0;

//   do {
//     distance += up - down;
//     count += 1;
//   } while (distance < deep);

//   return count;
// };

// const isFree = deep => {
//   const up = 7;
//   const down = 2;
//   let distance = down;
//   let count = 0;

//   while (distance < deep) {
//     distance += up - down;
//     count += 1;
//   }

//   return count;
// };

// console.log(isFree(42));
// console.log(isFree(17));
// console.log(isFree(18));

//=================================================
//=================================================
//=================================================
//=================================================

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

/*
 *=================================зацикливание сеттера set============
 */

// class User {
//   email;
//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }
// class ContentEditor extends User {
//   constructor({ email, posts }) {
//     super(email);
//     this.posts = posts;
//   }

//   get posts() {
//     return this.post;
//   }

//   set posts(newPost) {
//     this.post = newPost;
//   }
// }

// class NameOfEditor extends ContentEditor {
//   constructor({ email, posts, name }) {
//     super({ email, posts });
//     this.name = name;
//   }
// }

// const nameEditor = new NameOfEditor({
//   email: 'mango@mail.com',
//   posts: [],
//   name: 'Mango',
// });

// const editor = new ContentEditor({ email: 'mango@mail.com', posts: [] });

// const user = new User('email@mail.com');
// console.log(user);

// console.log(editor);
// console.log(editor.email);
// editor.email = 'poly@mail.com';
// console.log(editor.email);
// editor.post = [1, 2];
// console.log(editor.post);

// console.log(nameEditor);
// nameEditor.posts = [5, 6];
// console.log(nameEditor.posts);
// nameEditor.email = 'user@mail.com';
// console.log(nameEditor.email);
// console.log(nameEditor);

/*
 *=====================================================================
 */
// let total = 0;
// function add(...args) {
//   for (const arg of args) {
//     total += arg;
//   }
//   return total;
// }

// console.log(add(74, 11, 62, 46, 12, 36));
/*
 *=====================================================================
 */
// const changeEven = (numbers, value) =>
//   numbers.map(number => (number % 2 === 0 ? number + value : number));

// console.log(changeEven([17, 24, 68, 31, 42], 100));
/*
 *=====================================================================
 */
// /*
//  * Типов транзацкий всего два.
//  * Можно положить либо снять деньги со счета.
//  */
// const Transaction = {
//   DEPOSIT: 'deposit',
//   WITHDRAW: 'withdraw',
// };

// /*
//  * Каждая транзакция это объект со свойствами: id, type и amount
//  */

// const account = {
//   // Текущий баланс счета
//   balance: 0,

//   // История транзакций
//   transactions: [],

//   /*
//    * Метод создает и возвращает объект транзакции.
//    * Принимает сумму и тип транзакции.
//    */

//   createTransaction(amount, type) {
//     let transaction = {};
//     transaction = {
//       id: this.transactions.length,
//       type,
//       amount,
//     };
//     return transaction;
//   },

//   /*
//    * Метод отвечающий за добавление суммы к балансу.
//    * Принимает сумму танзакции.
//    * Вызывает createTransaction для создания объекта транзакции
//    * после чего добавляет его в историю транзакций
//    */
//   deposit(amount) {
//     this.balance += amount;
//     this.transactions.push(
//       this.createTransaction(amount, Transaction.WITHDRAW),
//     );
//   },

//   /*
//    * Метод отвечающий за снятие суммы с баланса.
//    * Принимает сумму танзакции.
//    * Вызывает createTransaction для создания объекта транзакции
//    * после чего добавляет его в историю транзакций.
//    *
//    * Если amount больше чем текущий баланс, выводи сообщение
//    * о том, что снятие такой суммы не возможно, недостаточно средств.
//    */
//   withdraw(amount) {
//     this.balance -= amount;
//     this.transactions.push(this.createTransaction(amount, Transaction.DEPOSIT));
//   },

//   /*
//    * Метод возвращает текущий баланс
//    */
//   getBalance() {
//     return this.balance;
//   },

//   /*
//    * Метод ищет и возвращает объект транзации по id
//    */
//   getTransactionDetails(id) {
//     return this.transactions.find(obj => obj.id === id);
//   },

//   /*
//    * Метод возвращает количество средств
//    * определенного типа транзакции из всей истории транзакций
//    */
//   getTransactionTotal(type) {
//     return this.transactions.reduce(
//       (acc, tr) => (tr.type === type ? acc + tr.amount : acc),
//       0,
//     );
//   },
// };

// account.deposit(1000);
// account.deposit(400);
// account.deposit(4000);
// // console.log(account.getBalance());
// // console.table(account.transactions);
// account.withdraw(700);
// account.withdraw(330);
// account.withdraw(50);
// console.log(account.getBalance());
// console.log(account.transactions);
// // console.log(account.getTransactionDetails(3));
// console.log(account.getTransactionTotal(Transaction.DEPOSIT));
// console.log(account.getTransactionTotal(Transaction.WITHDRAW));
/*
 *===================Example 1 - Деструктуризация====================
 */
// function calcBMI({ weight, height }) {
//   const numericWeight = Number(weight.replace(',', '.'));
//   const numericHeight = Number(height.replace(',', '.'));
//   return Number((numericWeight / numericHeight ** 2).toFixed(1));
// }

// console.log(
//   calcBMI({
//     weight: '88,3',
//     height: '1.75',
//   }),
// );

/*
 *=====================Example 2 - Деструктуризация====================
 */
// function printContactsInfo({ names, phones }) {
//   const nameList = names.split(',');
//   const phoneList = phones.split(',');
//   for (let i = 0; i < nameList.length; i += 1) {
//     console.log(`${nameList[i]}: ${phoneList[i]}`);
//   }
// }

// printContactsInfo({
//   names: 'Jacob,William,Solomon,Artemis',
//   phones: '89001234567,89001112233,890055566377,890055566300',
// });
/*
 *==================Example 3 - Глубокая деструктуризация==============
 */
// function getBotReport({ companyName, bots: { repair, defence } }) {
//   return `${companyName} has ${repair + defence} bots in stock`;
// }

// // Было
// // console.log(getBotReport('Cyberdyne Systems', 150, 50));

// // Ожидается
// console.log(
//   getBotReport({
//     companyName: 'Cyberdyne Systems',
//     bots: {
//       repair: 150,
//       defence: 50,
//     },
//   }),
// ); // "Cyberdyne Systems has 200 bots in stock"
/*
 *==================Example 4 - Деструктуризация=======================
 */

// function getStockReport({ companyName, stock }) {
//   let total = 0;
//   for (const value of Object.values(stock)) {
//     total += value;
//   }
//   return `${companyName} has ${total} items in stock.`;
// }

// console.log(
//   getStockReport({
//     companyName: 'Cyberdyne Systems',
//     stock: {
//       repairBots: 150,
//       defenceBots: 50,
//     },
//   }),
// ); // "Cyberdyne Systems has 200 items in stock"

// console.log(
//   getStockReport({
//     companyName: 'Belacci',
//     stock: {
//       shoes: 20,
//       skirts: 10,
//       hats: 5,
//     },
//   }),
// ); // "Belacci has 35 item in stock"
/*
 *=====================================================================
 */
// function createContact(partialContact) {
//   return {
//     list: 'default',
//     ...partialContact,
//     id: generateId(),
//     createdAt: Date.now(),
//   };
// }

// console.log(
//   createContact({
//     name: 'Mango',
//     email: 'mango@mail.com',
//     list: 'friends',
//   }),
// );
// console.log(
//   createContact({
//     name: 'Poly',
//     email: 'poly@hotmail.com',
//   }),
// );

// function generateId() {
//   return '_' + Math.random().toString(36).substr(2, 9);
// }
/*
 *=====================================================================
 */
const user = {
  name: 'Jacques Gluke',
  tag: 'jgluke',
  location: {
    country: 'Jamaica',
    city: 'Ocho Rios',
  },
  stats: {
    followers: 5603,
    views: 4827,
    likes: 1308,
  },
};

console.log(Object.keys(user));
console.log(Object.keys(user.location));
/*
 *=====================================================================
 */
/*
 *=====================================================================
 */
/*
 *=====================================================================
 */
/*
 *=====================================================================
 */
