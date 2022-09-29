// const promise = new Promise((resolve, reject) => {});

// console.log(promise);

// function makePromise(x, y) {
//   return new Promise((resolve, reject) => {
//     const isDone = Math.random() > 0.5;

//     if (isDone) {
//       resolve(x);
//     }

//     reject(y);
//   });
// }

// console.log(makePromise(100, 50));

// const mdnPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const isDone = Math.random() > 0.5;

//     if (isDone) {
//       resolve(
//         'то что ты передашь то и получить в результате промиса или инфу которую ты запрашивал'
//       );
//     }

//     reject({ 'что то пошло не так, извини братишка': 1, 10: 10 });
//   }, 2000);
// });

// console.log(mdnPromise);
// console.log(
//   mdnPromise.then(value => {
//     console.log(value);
//     return value.split('');
//   })
// );

//========================================================

// function createPromiseFnk(x, y) {
//   return new Promise((resolve, reject) => {
//     const isDone = Math.random() > 0.5;

//     if (isDone) {
//       resolve(x);
//     }

//     reject(y);
//   });
// }

// const promise1 = createPromiseFnk('all system work', 'tobi p... tikai z mista');

//======================================================
// promise1
//   .then(data => {
//     console.log(data);
//     return data;
//   })
//   .then(data => {
//     console.log(data + 'NOrmalno then 2');
//     return 'otrabotal';
//   })
//   .catch(error => console.log(error))
//   .finally(() => console.log('вот и все отработал'));
//======================================================
// promise1
//   .then(
//     result => {
//       console.log('result: ', result);
//       return result;
//     },
//     error => {
//       console.log('error: ', error);
//       return error;
//     }
//   )
//   .finally(() => console.log('done'));
//==========================вынес функции==============
// promise1.then(done, error).finally(finall);

// function done(result) {
//   console.log('result: ', result);
//   return result;
// }

// function error(error) {
//   console.log('error: ', error);
//   return error;
// }

// function finall() {
//   console.log('done');
// }
//==================make dish================

// const makeDish = dishName => {
//   return new Promise((resolve, reject) => {
//     const DELAY = 1000;

//     setTimeout(() => {
//       const passed = Math.random() > 0.5;

//       if (passed) {
//         resolve(`✅ ваше заказ принят ${dishName} готовится`);
//       }

//       reject(`❌ извините ${dishName} закончился`);
//     }, DELAY);
//   });
// };

// makeDish('чебурек').then(orderSucces).catch(orderFailure);

// function orderSucces(succes) {
//   console.log('succes order: ', succes);
// }

// function orderFailure(error) {
//   console.log('sorry: ', error);
// }
//===========================================

// // const cooking = dishName =>
// //   Promise.resolve(`✅ ваше заказ принят ${dishName} готовится`);

// cooking('pizza').then(ordered);

// function cooking(dishName) {
//   return Promise.resolve(`✅ ваше заказ принят ${dishName} готовится`);
// }

// function ordered(value) {
//   console.log('Great to meet you');
//   console.log(value);
// }

//================pokemon==================
//STEP 1

// fetch('https://pokeapi.co/api/v2/pokemon/2')
//   .then(pokemon => console.log(pokemon))
//   .catch(error => console.error());

//STEP 2

// function getPokemonById(id) {
//   fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
//     .then(result => result.json())
//     .then(pokemon => console.log(pokemon))
//     .catch(error => console.error());
// }

// getPokemonById(5);

//STEP 3

getPokemonById(5).then(fetchSucces).catch(fetchError);
getPokemonById(10).then(fetchSucces).catch(fetchError);
getPokemonById(19).then(fetchSucces).catch(fetchError);

function getPokemonById(id) {
  return fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then(result =>
    result.json(),
  );
}

function fetchSucces(data) {
  console.log(`here you pokemon ${data.name.toUpperCase()}`);
  console.log(data);
}

function fetchError(error) {
  console.log('We not now nothing about this pokemon');
  console.log(error);
}
// console.log(getPokemonById(5));
