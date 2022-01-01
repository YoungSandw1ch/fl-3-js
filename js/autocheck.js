// const productName = "Droid";
// const pricePerItem = 3500;

// const message = `You picked ${productName}, price per item is ${pricePerItem} credits`;
// console.log(message);

// const pricePerDroid = 800;
// const orderedQuantity = 6;
// const deliveryFee = 50;
// const totalPrice = pricePerDroid * orderedQuantity + deliveryFee;
// const message = `You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`
// console.log(message);

/* Напиши скрипт обработки покупки в магазине.

- Баланс пользователя хранится в переменной balance
- Сумма покупки хранится в переменной payment
- Перед проверкой вывести сообщение:
«Общая стоимость заказа [число] кредитов. Проверяем кол-во доступных средств на счету»

- Если сумма покупки не превышает баланс:
- Вычесть из баланса сумму покупки
- Вывести сообщение «На счету осталось [число] кредитов»
- Если сумма покупки превышает баланс:
- Вывести сообщение «На счету недостаточно средств для проведения операции!»
- В конце вывести сообщение «Операция завершена»
*/

// let balance = 10000;
// const payment = 2000;
// 'Все хорошо, снимаем деньги... Спасибо за покупку!'

// let balance = 10000;
// const payment = 2000;

// const message = `Общая стоимость заказа ${payment} кредитов. Проверяем кол-во доступных средств на счету`
// console.log(message);

// if(payment <= balance) {
//   balance -= payment;
//   console.log("Все хорошо, снимаем деньги... Спасибо за покупку!");
//   console.log(`На счету осталось ${balance} кредитов`);
// } else {
//   console.log(`На счету недостаточно средств для проведения операции!`);
// }

// console.log("Операция завершена")

/*
Напиши скрит подсчёта суммы покупки со скидкой в зависимости от потраченной суммы за всё время (партнёрская программа).

- Общая сумма потраченного хранится в переменной totalSpent
- Сумма текущего платежа хранится в переменной payment
- Скидка хранится в переменной discount

- Если потрачено от [100 до 1000) - бронзовый партнёр, скидка 2%
- Если потрачено от [1000 до 5000) - серебрянный партрёр, скидка 5%
- Если потрачено больше [5000 - золотой партрёр, скидка 10%
- Если потрачено меньше 100) - не партнёр, скидка 0%

- В результате вывести сообщение
«Оформляем заказ на сумму [сумма] со скидкой [скидка]%»
*/

// const totalSpent = 2000;
// let payment = 500;
// let discount = 0;

// 'Бронзовый партнер, скидка 2%'
// 'Серебрянный партнер, скидка 5%'
// 'Золотой партнер, скидка 10%'
// 'У вас еще нет партнерской скидки'

// if(totalSpent < 100) {
//   discount = 0;
//   console.log('У вас еще нет партнерской скидки');
// } else if(totalSpent >= 100 && totalSpent < 1000) {
//   discount = 0.02;
//   console.log('Бронзовый партнер, скидка 2%');
// } else if(totalSpent >= 1000 && totalSpent < 5000) {
//   discount = 0.05;
//   console.log('Серебрянный партнер, скидка 5%');
// } else{
//   discount = 0.1;
//   console.log('Золотой партнер, скидка 10%');
// }

// console.log(`Оформляем заказ на сумму ${payment -= (payment * discount)} со скидкой ${discount * 100}%`);

// let cost;
// const subscription = "premium";

// switch (subscription) {
//   case "free":
//     cost = 0;
//     break;

//   case "pro":
//     cost = 100;
//     break;

//   case "premium":
//     cost = 500;
//     break;

//   default:
//     console.log("Invalid subscription type");
// }

// console.log(cost);

// const target = 3;
// let sum = 0;

// for (let i = 0; i <= target; i += 1) {
//   sum += i;
// }

// console.log(sum);

// const max = 10;
// for (let i = 0; i < max; i += 1) {
//   console.log(`${max} % ${i} = `, max % i);
// }

// for (let i = 0; i <= 5; i += 1) {
//   console.log(i);

//   if (i === 3) {
//     console.log("Нашли число 3, прерываем выполнение цикла");
//     break;
//   }
// }

// console.log("Лог после цикла");

// let num = 1;

// for (let i = 0; i < 100; i += 5) {
//   num += i;
//   console.log(i);
//   console.log("value: ", num);
// }

// console.log("end");

// задача количество работников со случайной зарплатой от 500 до 5000
// узнать их сумарную зарплату

// const employers = 10;
// let totalSalary;
// let salary = (Math.random() * (5000 - 500) + 1).toFixed(0);

// totalSalary = employers * salary;
// console.log(totalSalary);

// решение через цыкл

// const minSalary = 500;
// const maxSalary = 5000;
// const employers = 5;
// let totalSalary = 0;
// let salary ;

// for (let i = 1; i <= employers; i += 1) {
//   salary = Math.round(Math.random() * (maxSalary - minSalary) + minSalary);
//   // console.log(`Зарплата сотрудника ${i} : `, salary);
//   // console.log(`Сумарная зарплата: `, totalSalary += salary)
// }
// console.log(`Сумарная зарплата: `, totalSalary += salary)

// задача сумма всех четных чисел в промежутке

// const min = 9;
// const max = 21;
// let sum = 0;

// for (let i = min; i <= max; i += 1) {
//   if (i % 2 !== 0) {
//     continue;
//   }
//   sum += i;
// }

// console.log(sum);

//===================================================

// function isNumberInRange(start, end, number) {
//   const isInRange = number >= start && number <= end; // Change this line

//   return isInRange;
// }

//===================================================

// function checkIfCanAccessContent(subType) {
//   const canAccessContent = subType == 'pro' || subType == 'vip'; // Change this line

//   return canAccessContent;
// }

// console.log(checkIfCanAccessContent('pro'));

//===================================================

// function isNumberNotInRange(start, end, number) {
//   const isInRange = number >= start && number <= end;
//   const isNotInRange = !isInRange; // Change this line

//   return isNotInRange;
// }

//===================================================

// function getDiscount(totalSpent) {
//   const BASE_DISCOUNT = 0;
//   const BRONZE_DISCOUNT = 0.02;
//   const SILVER_DISCOUNT = 0.05;
//   const GOLD_DISCOUNT = 0.1;
//   let discount;

//   if (totalSpent >= 50000) {
//     discount = GOLD_DISCOUNT;
//   } else if (totalSpent >= 20000 && totalSpent < 50000) {
//     discount = SILVER_DISCOUNT;
//   } else if (totalSpent >= 5000 && totalSpent < 20000) {
//     discount = BRONZE_DISCOUNT;
//   } else {
//     discount = BASE_DISCOUNT;
//   }

//   return discount;
// }

// console.log(getDiscount(137000));
// console.log(getDiscount(900));

//===================================================
// function checkPassword(password) {
//   const ADMIN_PASSWORD = 'jqueryismyjam';
//   let message;

//   switch (password) {
//     case null:
//       message = 'Canceled by user!';
//       break;
//     case ADMIN_PASSWORD:
//       message = 'Welcome!';
//       break;
//     default:
//       message = 'Access denied, wrong password!';
//   }

//   return message;
// }

// console.log(checkPassword(null));
// console.log(checkPassword('polyhax'));
// console.log(checkPassword('jqueryismyjam'));

//===================================================

// function getShippingCost(country) {
//   let message;
//   let price;

//   switch (country) {
//     case 'China':
//       price = 100;
//       message = `Shipping to ${country} will cost ${price} credits`;
//       break;

//     case 'Chile':
//       price = 250;
//       message = `Shipping to ${country} will cost ${price} credits`;
//       break;

//     case 'Australia':
//       price = 170;
//       message = `Shipping to ${country} will cost ${price} credits`;
//       break;

//     case 'Australia':
//       price = 170;
//       message = `Shipping to ${country} will cost ${price} credits`;
//       break;

//     case 'Jamaica':
//       price = 120;
//       message = `Shipping to ${country} will cost ${price} credits`;
//       break;

//     default:
//       message = 'Sorry, there is no delivery to your country';
//   }

//   return message;
// }

// console.log(getShippingCost('Australia'));
// console.log(getShippingCost('Germany'));
// console.log(getShippingCost('China'));

//===================================================

// function getNameLength(name) {
//   const message = `Name ${name} is ${name.length} characters long`;

//   return message;
// }

// console.log(getNameLength('Supernatural'));

//===================================================

// const courseTopic = 'JavaScript essentials';

// const courseTopicLength = courseTopic.length;
// const firstElement = courseTopic[0];
// const lastElement = courseTopic[courseTopic.length - 1];

//===================================================

// function getSubstring(string, length) {
//   const substring = string.slice(0, length);

//   return substring;
// }
// console.log(getSubstring('Qwertyuiop', 6));

//===================================================

// function formatMessage(message, maxLength) {
//   let result;
//   // Change code below this line
//   result =
//     message.length <= maxLength
//       ? `${message}`
//       : `${message.slice(0, maxLength)}...`;
//   /// Change code above this line
//   return result;
// }

// console.log(formatMessage('1234567890', 8));

//===================================================

// function checkForSpam(message) {
//   let result;

//   result =
//     message.toLowerCase().includes('spam') ||
//     message.toLowerCase().includes('sale');

//   return result;
// }

// console.log(checkForSpam('Latest technology news'));
// console.log(checkForSpam('JavaScript weekly newsletter'));
// console.log(checkForSpam('Get best sale offers now!'));
// console.log(checkForSpam('Trust me, this is not a spam message'));
// console.log(checkForSpam('Amazing SalE, only tonight!'));

//===================================================

// function checkStorage(available, ordered) {

//   if (ordered === 0) {
//     return 'Your order is empty!';
//   }

//   if (ordered > available) {
//     return 'Your order is too large, not enough goods in stock!';
//   }

//   return 'The order is accepted, our manager will contact you';
// }

//===================================================
// const fruits = ['apple', 'plum', 'pear', 'orange'];
// fruits[1] = 'peach';
// fruits[3] = 'banana';

// console.table(fruits);
//===================================================

// const fruits = ['apple', 'peach', 'pear', 'banana'];
// const fruitsArrayLength = fruits.length;
// console.log(fruitsArrayLength);

//===================================================
// function getExtremeElements(array) {
//   array.splice(1, array.length - 2);
//   return array;
// }
// console.log(getExtremeElements([1, 2, 3, 4, 5]));
// console.log(getExtremeElements(['Earth', 'Mars', 'Venus']));
// console.log(getExtremeElements(['apple', 'peach', 'pear', 'banana']));
//===================================================

// function splitMessage(message, delimeter) {
//   let words;
//   // Change code below this line
//   words = message.split(delimeter);
//   // Change code above this line
//   return words;
// }
// console.log(splitMessage('full stuck is unbeliveble', ' '));

//===================================================

// function calculateEngravingPrice(message, pricePerWord) {
//   let totalPrice = message.split(' ').length * pricePerWord;
//   return totalPrice;
// }
// console.log(calculateEngravingPrice('JavaScript is in my blood', 10));
// console.log(calculateEngravingPrice('JavaScript is in my blood', 20));
// console.log(calculateEngravingPrice('Web-development is creative work', 40));

//===================================================

// function slugify(title) {
//   return title.toLowerCase().split(' ').join('-');
// }
// console.log(slugify('i love to train with friend'));

//===================================================

// function makeArray(firstArray, secondArray, maxLength) {
//   if (firstArray.concat(secondArray).length > maxLength) {
//     return firstArray.concat(secondArray).slice(0, maxLength);
//   }
//   return firstArray.concat(secondArray);
// }
//---------варианты---------------
// function makeArray(firstArray, secondArray, maxLength) {
//   let newArray = firstArray.concat(secondArray);
//   return newArray.length > maxLength ? newArray.slice(0, maxLength) : newArray;
// }

// console.log(makeArray(['Mango', 'Poly'], ['Ajax', 'Chelsea'], 3));
// console.log(makeArray(['Mango'], ['Ajax', 'Chelsea', 'Poly', 'Houston'], 3));
// console.log(makeArray(['Earth', 'Jupiter'], ['Neptune', 'Uranus', 'Venus'], 0));
// console.log(makeArray(['Earth', 'Jupiter'], ['Neptune', 'Uranus'], 4));

//===================================================

// function calculateTotal(number) {
//   let totalNumbers = 0;
//   for (let i = 0; i <= number; i += 1) {
//     totalNumbers += i;
//   }
//   return totalNumbers;
// }
// console.log(calculateTotal(1));
// console.log(calculateTotal(3));
// console.log(calculateTotal(24));
//===================================================

// function findLongestWord(string) {
//   const array = string.split(' ');
//   let longestWord = array[0];

//   for (const word of array) {
//     longestWord = longestWord.length > word.length ? longestWord : word;
//   }

//   return longestWord;
// }
// console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));
// console.log(findLongestWord('Google do a roll'));
// console.log(findLongestWord('May the force be with you'));

//===================================================

// function filterArray(numbers, value) {
//   const bigNumberArray = [];

//   for (const number of numbers) {
//     if (number > value) {
//       bigNumberArray.push(number);
//     }
//   }

//   return bigNumberArray;
// }
// console.log(filterArray([1, 2, 3, 4, 5], 3));
// console.log(filterArray([12, 24, 8, 41, 76], 20));

//===================================================

// function getCommonElements(array1, array2) {
//   const array3 = [];

//   for (const item of array1) {
//     if (array2.includes(item)) {
//       array3.push(item);
//     }
//   }

//   return array3;
// }

// console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]));
// console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]));

//===================================================

// function getEvenNumbers(start, end) {
//   const filteredArray = [];

//   for (let i = start; i <= end; i += 1) {
//     if (i % 2 === 0) {
//       filteredArray.push(i);
//     }
//   }

//   return filteredArray;
// }
// console.log(getEvenNumbers(6, 12));

//===================================================

// function includes(array, value) {
//   for (const item of array) {
//     if (item === value) {
//       return true;
//     }
//   }

//   return false;
// }

// console.log(includes([1, 2, 3, 4, 5], 3));
// console.log(
//   includes(['Earth', 'Mars', 'Venus', 'Jupiter', 'Saturn'], 'Uranus'),
// );
// console.log(
//   includes(['Earth', 'Mars', 'Venus', 'Jupiter', 'Saturn'], 'Jupiter'),
// );

//===================================================
//===================================================
//===================================================
//===================================================
//===================================================
//===================================================
//===================================================
//===================================================
//===================================================
//===================================================
//===================================================
//===================================================
