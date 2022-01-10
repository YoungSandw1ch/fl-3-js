// const filter = function (array, callback) {
//   const filteredArray = [];

//   for (const item of array) {
//     const passed = callback(item);

//     if (passed) {
//       filteredArray.push(item);
//     }
//   }

//   return filteredArray;
// };

// const callbackGreater = function (value) {
//   return value >= 5;
// };

// const callbackSmaller = function (value) {
//   return value <= 5;
// };

// const callbackTenner = function (value) {
//   return value % 10 === 0;
// };

// console.log(filter([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 1200], callbackGreater));
// console.log(filter([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 1200], callbackSmaller));
// console.log(
//   filter([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 1200], function (value) {
//     return value % 10 === 0;
//   }),
// );

// //=====================================================
// const fruits = [
//   { name: 'apples', quantity: 200, isFresh: true },
//   { name: 'grapes', quantity: 150, isFresh: false },
//   { name: 'bananas', quantity: 100, isFresh: true },
// ];

// const moreThanQuantity = function (value) {
//   return value.quantity >= 120;
// };

// console.table(filter(fruits, moreThanQuantity));

//====================================================

const pizzaPalace = {
  pizzas: ['Ultracheese', 'Smoked', 'Four meats'],
  order(pizzaName, onSuccess, onError) {
    return !this.pizzas.includes(pizzaName)
      ? console.log(
          onError(
            `There is no pizza with a name ${pizzaName} in the assortment.`,
          ),
        )
      : console.log(onSuccess(pizzaName));
    //   if (this.pizzas.includes(pizzaName)) {
    //     return console.log(onSuccess(pizzaName));
    //   }
    //   return console.log(onError(pizzaName));
  },

  // const passed = this.pizzas.includes(pizzaName);
  // return passed ? onSuccess(pizzaName) : onError(`There is no pizza with a name ${pizzaName} in the assortment.`)
};

// Callback for onSuccess
function makePizza(pizzaName) {
  return `Your order is accepted. Cooking pizza ${pizzaName}.`;
}

// Callback for onError
function onOrderError(error) {
  return `Error! ${error}`;
}

// Method calls with callbacks
pizzaPalace.order('Smoked', makePizza, onOrderError);
pizzaPalace.order('Four meats', makePizza, onOrderError);
pizzaPalace.order('Big Mike', makePizza, onOrderError);
pizzaPalace.order('Vienna', makePizza, onOrderError);
