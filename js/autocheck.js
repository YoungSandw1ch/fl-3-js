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
//   balance = balance - payment;
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

const totalSpent = 2000;
let payment = 500;
let discount = 0;

// 'Бронзовый партнер, скидка 2%'
// 'Серебрянный партнер, скидка 5%'
// 'Золотой партнер, скидка 10%'
// 'У вас еще нет партнерской скидки'


if(totalSpent <= 100) {
  discount = 0;
} else if(totalSpent >= 100 && totalSpent <= 1000) {
  discount = 2;
} else if(totalSpent >= 1000 && totalSpent <= 5000) {
  discount = 5;
} else{
  discount = 10;
}

console.log(`Оформляем заказ на сумму ${payment} со скидкой ${discount}%`);