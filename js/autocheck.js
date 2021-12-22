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



let balance = 10000;
const payment = 2000; 

const message = `Общая стоимость заказа ${payment} кредитов. Проверяем кол-во доступных средств на счету`
console.log(message);

if(payment <= balance) {
  balance = balance - payment;
  console.log("Все хорошо, снимаем деньги... Спасибо за покупку!");
  console.log(`На счету осталось ${balance} кредитов`);
} else {
  console.log(`На счету недостаточно средств для проведения операции!`);
}

console.log("Операция завершена")