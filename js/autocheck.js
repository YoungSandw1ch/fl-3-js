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





