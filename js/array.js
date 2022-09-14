// const clients = ["Mango", "Ajax", "Poly", "Dodo"];

// for (const client of clients) {
//   console.log(client);
// }

//============================================================================================================

// const string = "javascript rule";

// for (const character of string) {
//   console.log(character);
// }

//============================================================================================================

// const clients = ["Mango", "Poly", "Ajax", "Goro"];
// const clientNameToFind = "Goro";
// let message = "Клиента с таким именем нету в базе данных!";

// for (const client of clients) {
//   if (client === clientNameToFind) {
//     message = "Клиент с таким именем есть в базе данных!";
//     break;
//   }
//   // Если не совпадает, то на этой итерации ничего не делаем
// }

// console.log(message); // Клиент с таким именем есть в базе данных!

//============================================================================================================

// const numbers = [1, 2, 5, 8, 3, 14, 18, 4, 7, 29, 6, 34, 55, 108, 3000, 11, 3456, 320];
// const threshold = 10;

// for (let i = 0; i < numbers.length; i += 1) {
//   // console.log(`счетчик перебора:  ${numbers[i]}`);
//   if (numbers[i] < threshold) {
//       // console.log(`Число меньше ${threshold}`);
//     continue;
//   }

//   console.log(`Числа больше чем ${threshold}: ${numbers[i]}`);
// }

//============================================================================================================

// const a = [1, 3, 8, "poly"];
// console.log(a);
// const b = a;
// console.log(b);
// a.push(3000);
// console.log(a);
// console.log(b);

//============================================================================================================

// let column = 'соединяет элементы массива в строку';
// console.log(column.split(" "));
// column = column.split(" ");
// console.log(column.join("МЛЯ"));
// column = column.join("МЛЯ");

//============================================================================================================

// const name = [1, 2, 1, 2, 4, 6, 8, 9, 2]
// console.log(name.indexOf(10));
// console.log(name.slice(3, 0));

//============================================================================================================

// function add(a, b, c) {
//   let result = a + b * c;
//   console.log(`Addition result equals ${result}`);
// }

// add(15, 27, 10);
// add(10, 20, 30);
// add(5, 10, 15);
// add(500, 10, 117);

//============================================================================================================

// const numbers = [51, 32, 44, 5, 4, 11, 999];

// //создать пемеренную
// let minNumber;
// //создать цикл перебора массива
// for (const number of numbers) {
//   // console.log(number);
//   minNumber = numbers[0];
//   // console.log(minNumber);
//   if (number < minNumber) {
//     minNumber = number;
//   }
// }

// console.log(`Минимальный номер: ${minNumber}`);
//стравнить переменную с каждым элементом масива если меньше присвоить

//вывести меньшее

//============================================================================================================

// const numbers = [1, 51, 32, 44, 5, 4, 11, 999, 1, 9, 1203, 6, 99, 3000, 90, 13];

// //создать пемеренную
// let maxNumber = numbers[0];
// //создать цикл перебора массива
// for (const number of numbers) {
//   if (number > maxNumber) {
//     maxNumber = number;
//   }
// }

// console.log(`Мaксимальный номер: ${maxNumber}`);

//============================================================================================================

// const friends = ['Mango', 'Poly', 'Kiwi', 'Ajax'];

// let string = "";
// for (const friend of friends) {
//   string += friend + ",";
// }

// string = string.slice(0, string.length - 1);
// console.log(string);

// console.log(friends.join(","));

//============================================================================================================

// const string = 'JavaScript';
// let letter;
// let stringNew = '';
// for (const word of string) {
//   // if (word !== word.toLowerCase()) {
//   //   letter = word.toLowerCase();
//   // } else {
//   //   letter = word.toUpperCase();
//   // }

//   // stringNew += letter;

//   stringNew +=
//     word !== word.toLowerCase() ? (letter = word.toLowerCase()) : (letter = word.toUpperCase());
// }
// console.log(stringNew);

//============================================================================================================
// const title = 'Top 10 benefits of React framework';
// const lowerCaseTitle = title.toLowerCase().split(' ').join('-');
// // console.log(lowerCaseTitle);
// // lowerCaseTitle = lowerCaseTitle.split(' ');
// // console.log(lowerCaseTitle);
// // lowerCaseTitle = lowerCaseTitle.join('-');

// console.log(lowerCaseTitle);

//============================================================================================================

// const array1 = [5, 10, 15, 20];
// const array2 = [10, 20, 30];
// let total = 0;
// const totalArray = array1.concat(array2);
// console.log(totalArray);
// for (const number of totalArray) {
//   total += number;
// }
// console.log(total);

//======================================================================

// ======================функции начало=================================

// const add = function (a, b) {
//   return a + b;
// };
// const total = add(44, 56);
// console.log(total);

// function add(a, b) {
//   return a + b;
// }
// console.log(add(11, 22));

// const add = (a, b) => {
//   return a + b;
// };
// console.log(add(1, 22));

//====================================================================

// const calculateTotalSum = function (items) {
//   let total = 0;

//   for (const item of items) {
//     total += item;
//   }

//   return total;
// };

// const result = calculateTotalSum([1, 5, 6, 7, 8, 1000]);
// console.log(result);

//====================================================================

// const findLogin = function (allLogins, login) {
//   const message = allLogins.includes(login)
//     ? `Пользователь ${login} найден`
//     : `Пользователь ${login} не найден`;

//   return message;
// };

// const findLogin = function (allLogins, login) {
//   return allLogins.includes(login)
//     ? `Пользователь ${login} найден`
//     : `Пользователь ${login} не найден`;
// };

// const logins = ['asad', 'dwqd', 'dds', 'wtwet', 'gg4g4', 'f', 'ff3'];

// console.log(findLogin(logins, 'f'));

//====================================================================

// const findSmollestNumber = function (numbers) {
//   let minNumber = numbers[0];

//   for (const number of numbers) {
//     if (number < minNumber) {
//       minNumber = number;
//     }
//   }

//   return minNumber;
// };

// console.log(
//   findSmollestNumber([34, 434, 25, 5, 6, 252, 11, 255, 366436, 235, 66]),
// );

//====================================================================

// const changeRegisterCase = function (string) {
//   let invertedRegisterCase = '';
//   let invertedLetter = '';

//   for (const letter of string) {
//     // if (letter !== letter.toLowerCase()) {
//     //   invertedLetter = letter.toLowerCase();
//     // } else {
//     //   invertedLetter = letter.toUpperCase();
//     // }
//     // invertedRegisterCase += invertedLetter;

//     invertedRegisterCase +=
//       letter !== letter.toLowerCase()
//         ? (invertedLetter = letter.toLowerCase())
//         : (invertedLetter = letter.toUpperCase());
//   }

//   return invertedRegisterCase;
// };

// console.log(changeRegisterCase('wdqwSddWdRfF'));
// console.log(changeRegisterCase('EfHjUkkkIIIkkk'));

// ==================вариант-Репеты ===========================

// const changeRegisterCase = function (string) {
//   const letters = string.split('');
//   let invertedString = '';

//   for (const letter of letters) {
//     invertedString +=
//       letter === letter.toLowerCase()
//         ? letter.toUpperCase()
//         : letter.toLowerCase();
//   }

//   return invertedString;
// };

// console.log(changeRegisterCase('FFJJJhHGGyjUIKhGFgYHjKki'));
// console.log(changeRegisterCase('AAAbbbCCCdddd'));

//====================================================================

// const slugify = function (string) {
//   return string.toLowerCase().split(' ').join('-');
// };

// console.log(slugify('Hi my Name is ChaturBatorS'));

//====================================================================

// function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
//   let message;
//   // Change code below this line
//   let totalPrice = pricePerDroid * orderedQuantity;
//   message =
//     totalPrice > customerCredits
//       ? 'Insufficient funds!'
//       : `You ordered ${orderedQuantity} droids, you have ${
//           customerCredits - totalPrice
//         } credits left`;
//   // Change code above this line
//   return message;
// }

// console.log(makeTransaction(3000, 5, 23000));
// console.log(makeTransaction(1000, 3, 15000));
// console.log(makeTransaction(5000, 10, 8000));
// console.log(makeTransaction(2000, 8, 10000));

//====================================================================

// function checkPassword(password) {
//   const ADMIN_PASSWORD = 'jqueryismyjam';
//   let message;

//   if (password == null) {
//     // Change this line
//     message = 'Canceled by user!';
//   } else if (password === ADMIN_PASSWORD) {
//     // Change this line
//     message = 'Welcome!';
//   } else {
//     message = 'Access denied, wrong password!';
//   }

//   return message;
// }
// console.log(checkPassword('jqueryismyjam'));

//====================================================================

// const date = new Date('2030-03-16');
// const date = new Date('2030-03');
// const date = new Date('2030');
// const date = new Date('03/16/2030');
// const date = new Date('2030/03/16');
// const date = new Date('2030/3/16');
// const date = new Date('March 16, 2030');
// const date = new Date('March 16, 2030 14:25:00');
// const date = new Date('2030-03-16 14:25:00');
// const date = new Date('2030-03-16T14:25:00');
// const date = new Date('16 March 2030');
// console.log(date);
