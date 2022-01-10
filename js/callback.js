const filter = function (array, callback) {
  const filteredArray = [];

  for (const item of array) {
    const passed = callback(item);

    if (passed) {
      filteredArray.push(item);
    }
  }

  return filteredArray;
};

const callbackGreater = function (value) {
  return value >= 5;
};

const callbackSmaller = function (value) {
  return value <= 5;
};

const callbackTenner = function (value) {
  return value % 10 === 0;
};

console.log(filter([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 1200], callbackGreater));
console.log(filter([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 1200], callbackSmaller));
console.log(
  filter([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 1200], function (value) {
    return value % 10 === 0;
  }),
);

//=====================================================
const fruits = [
  { name: 'apples', quantity: 200, isFresh: true },
  { name: 'grapes', quantity: 150, isFresh: false },
  { name: 'bananas', quantity: 100, isFresh: true },
];

const moreThanQuantity = function (value) {
  return value.quantity >= 120;
};

console.table(filter(fruits, moreThanQuantity));

//====================================================
