// const book = {
//   title: 'The Last Kingdom',
//   author: 'Bernard Cornwell',
//   genres: ['historical prose', 'adventure'],
//   rating: 8.38,
// };

// for (const key in book) {
//   // Ключ
//   console.log(key);
//   // Значение свойства с таким ключом
//   console.table(book[key]);
// }

//=========================================================

// const books = [
//   {
//     title: 'The Last Kingdom',
//     author: 'Bernard Cornwell',
//     rating: 8.38,
//   },
//   {
//     title: 'На берегу спокойных вод',
//     author: 'Роберт Шекли',
//     rating: 8.51,
//   },
//   {
//     title: 'Сон смешного человека',
//     author: 'Федор Достоевский',
//     rating: 7.75,
//   },
// ];

// for (const book of books) {
//   // Объект книги
//   console.log(book);
//   // Название
//   console.log(book.title);
//   // Автор
//   console.log(book.author);
//   // Рейтинг
//   console.log(book.rating);
// }
//=========================================================

// const friends = [
//   { name: 'Mango', online: false },
//   { name: 'Kiwi', online: true },
//   { name: 'Poly', online: false },
//   { name: 'Ajax', online: true },
// ];

// const getOnlineFriends = function (allFriends) {
//   const onlineFriends = [];

//   for (const friend of allFriends) {
//     if (friend.online === true) {
/*
 * ===if (friend.online === true) тоже самое что просто if (friend.online)
 */
//       onlineFriends.push(friend.name);
//     }
//   }

//   return onlineFriends;
// };

// console.log(getOnlineFriends(friends));
//=========================================================
// const getOnlineFriends = function (allFriends) {
//   const onlineFriends = [];

//   for (const friend of allFriends) {
//     if (friend.online) {
//       onlineFriends.push(friend);
//     }
//   }

//   return onlineFriends;
// };

// console.log(getOnlineFriends(friends));
//=========================================================
//=========================================================
//=========================================================

/*
 * Работем с коллекцией товаров в корзине:
 * - getItems()
 * - add(product)
 * - remove(productName)
 * - clear()
 * - countTotalPrice()
 * - increaseQuantity(productName)
 * - decreaseQuantity(productName)
 *
 * { name: '🍎', price: 50 }
 * { name: '🍇', price: 70 }
 * { name: '🍋', price: 60 }
 * { name: '🍓', price: 110 }
 */

// const cart = {
//   items: [],
//   getItems() {
//     return this.items;
//   },
//   add(product) {
//     const { items } = this;

//     for (const item of items) {
//       if (product.name === item.name) {
//         item.quantity += 1;
//         return;
//       }
//     }

//     const productWithQuantity = { ...product, quantity: 1 };
//     items.push(productWithQuantity);
//   },
//   remove(productName) {
//     const { items } = this;

//     for (let i = 0; i < items.length; i += 1) {
//       const item = items[i];

//       if (productName === item.name) {
//         items.splice(i, 1);
//         break;
//       }
//     }
//   },
//   clear() {
//     this.items = [];
//   },
//   countTotalPrice() {
//     let totalPrice = 0;
//     const { items } = this;

//     for (const { price, quantity } of items) {
//       totalPrice += price * quantity;
//     }
//     return totalPrice;
//   },
//   increaseQuantity(productName) {
//     const { items } = this;

//     for (const item of items) {
//       if (item.name === productName) {
//         item.quantity += 1;
//         return;
//       }
//     }
//   },
//   decreaseQuantity(productName) {
//     const { items } = this;

//     for (const item of items) {
//       if (item.name === productName) {
//         item.quantity -= 1;
//         if (item.quantity === 0) {
//           this.remove(productName);
//           return;
//         }
//       }
//     }
//   },
// };

// console.table(cart.getItems());

// cart.add({ name: '🍎', price: 50 });
// cart.add({ name: '🍋', price: 60 });
// cart.add({ name: '🍇', price: 70 });
// cart.add({ name: '🍋', price: 60 });
// cart.add({ name: '🍓', price: 110 });
// cart.add({ name: '🍓', price: 110 });
// cart.add({ name: '🍓', price: 110 });

// console.table(cart.getItems());
// console.log(cart.getItems());

// cart.remove('🍎');
// console.table(cart.getItems());

// cart.clear();
// console.table(cart.getItems());

// cart.increaseQuantity('🍎');
// cart.increaseQuantity('🍋');
// cart.increaseQuantity('🍇');
// cart.increaseQuantity('🍇');
// cart.increaseQuantity('🍇');
// cart.increaseQuantity('🍇');

// console.table(cart.getItems());

// cart.decreaseQuantity('🍋');
// cart.decreaseQuantity('🍋');
// console.table(cart.getItems());

// console.log('Total: ', cart.countTotalPrice());

//=========================================================

// const books = [
//   {
//     title: 'The Last Kingdom',
//     author: 'Bernard Cornwell',
//     rating: 8.38,
//   },
//   {
//     title: 'На берегу спокойных вод',
//     author: 'Роберт Шекли',
//     rating: 8.51,
//   },
// ];

// for (const book of books) {
//   console.log(book.title);
//   console.log(book.author);
//   console.log(book.rating);
// }

// for (const book of books) {
//   const { title, author, rating } = book;

//   console.log(title);
//   console.log(author);
//   console.log(rating);
// }
//=========================================================

// const apartment = {
//   imgUrl: 'https://via.placeholder.com/640x480',
//   descr: 'Spacious apartment in the city center',
//   rating: 4,
//   price: 2153,
//   tags: ['premium', 'promoted', 'top'],
//   owner: {
//     name: 'Henry',
//     phone: '982-126-1588',
//     email: 'henry.carter@aptmail.com',
//   },
// };

// const {
//   tags,
//   owner: { name, phone, email },
// } = apartment;
// const ownerName = name;
// const ownerPhone = phone;
// const ownerEmail = email;
// const numberOfTags = tags.length;
// const firstTag = tags[0];
// const lastTag = tags[tags.length - 1];

// console.log(ownerName);
// console.log(lastTag);
// console.log(ownerEmail);

//=========================================================

// const apartment = {
//   descr: 'Spacious apartment in the city center',
//   rating: 4,
//   price: 2153,
// };
// const keys = [];
// const values = [];

// for (const key in apartment) {
//   keys.push(key);
//   values.push(apartment[key]);
// }

// console.log(keys);
// console.log(values);

//=========================================================

// const keys = [];
// const values = [];
// const advert = {
//   service: 'apt',
//   name: 'leonid',
// };
// const apartment = Object.create(advert);
// apartment.descr = 'Spacious apartment in the city center';
// apartment.rating = 4;
// apartment.price = 2153;

// for (const key in apartment) {
//   if (apartment.hasOwnProperty(key)) {
//     keys.push(key);
//     values.push(apartment[key]);
//   }
// }

// console.log(keys);
// console.log(values);
// console.log(apartment.service);
// console.log(apartment.name);

//=========================================================

// const apartment = {
//   descr: 'Spacious apartment in the city center',
//   rating: 4,
//   price: 2153,
// };
// const values = [];
// const keys = Object.keys(apartment);

// for (const key of keys) {
//   values.push(apartment[key]);
// }

// console.log(keys);
// console.log(values);

//=========================================================

// const products = [
//   { name: 'Radar', price: 1300, quantity: 4 },
//   { name: 'Scanner', price: 2700, quantity: 3 },
//   { name: 'Droid', price: 400, quantity: 7 },
//   { name: 'Grip', price: 1200, quantity: 9 },
// ];

// function getProductPrice(productName) {
//   for (const product of products) {
//     if (product.name === productName) {
//       return product.price;
//     }
//   }

//   return null;
// }

// console.log(getProductPrice('Radar'));
// console.log(getProductPrice('Scanner'));
// console.log(getProductPrice('Scwner'));
// console.log(getProductPrice('Droid'));
// console.log(getProductPrice('Grip'));

//==========НАЙТИ РЕШЕНИЕ ПРОЩЕ И БЫСТРЕЕ==================

// const products = [
//   { name: 'Radar', price: 1300, quantity: 4 },
//   { name: 'Scanner', price: 2700, quantity: 3 },
//   { name: 'Droid', price: 400, quantity: 7 },
//   { name: 'Grip', price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//   const values = [];

//   for (const product of products) {
//     const keys = Object.keys(product);

//     if (keys.includes(propName)) {
//       values.push(product[propName]);
//     }
//   }

//   return values;
// }

// console.log(getAllPropValues('name'));
// console.log(getAllPropValues('quantity'));
// console.log(getAllPropValues('price'));
// console.log(getAllPropValues('category'));

//=========================================================

// const forecast = {
//   today: {
//     low: 28,
//     high: 32,
//     icon: 'https://www.flaticon.com/svg/static/icons/svg/861/861059.svg',
//   },
//   tomorrow: {
//     low: 27,
//     high: 31,
//   },
// };

// const {
//   today: {
//     low: lowToday,
//     high: highToday,
//     icon: todayIcon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg',
//   },
//   tomorrow: {
//     low: lowTomorrow,
//     high: highTomorrow,
//     icon: tomorrowIcon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg',
//   },
// } = forecast;

//=========================================================

// const scores = [89, 64, 42, 17, 93, 51, 26];
// const bestScore = Math.max(...scores);
// const worstScore = Math.min(...scores);

//=========================================================

// const firstGroupScores = [64, 42, 93];
// const secondGroupScores = [89, 14, 51, 26];
// const thirdGroupScores = [29, 47, 18, 97, 81];

// const allScores = [
//   ...firstGroupScores,
//   ...secondGroupScores,
//   ...thirdGroupScores,
// ];
// const bestScore = Math.max(...allScores);
// const worstScore = Math.min(...allScores);

//=================СОВПАДЕНИЯ======================

// function findMatches(array, ...args) {
//   const matches = [];

//   for (const arg of args) {
//     if (array.includes(arg)) {
//       matches.push(arg);
//     }
//   }

//   return matches;
// }

//=========================================================
// const bookShelf = {
//   books: ['The last kingdom', 'Haze', 'The guardian of dreams'],
//   updateBook(oldName, newName) {
//     this.books.splice(this.books.indexOf(oldName), 1, newName);
//     return this.books;
//   },
// };

// console.table(bookShelf.updateBook('Haze', 'Dungeon chronicles'));

//=========================================================

// const atTheOldToad = {
//   potions: ['Speed potion', 'Dragon breath', 'Stone skin'],
//   removePotion(potionName) {
//     // Change code below this line
//     const { potions } = atTheOldToad;
//     if (potions.includes(potionName)) {
//       potions.splice(potions.indexOf(potionName), 1);
//     }
//     return potions;
//     // Change code above this line
//   },
// };

// console.log(atTheOldToad.removePotion('Dragon breath'));
// console.log(atTheOldToad.removePotion('Speed potion'));

//===================авто проверка 41 3 часть===============

// const atTheOldToad = {
//   potions: [
//     { name: 'Speed potion', price: 460 },
//     { name: 'Dragon breath', price: 780 },
//     { name: 'Stone skin', price: 520 },
//   ],

//   getPotions() {
//     return this.potions;
//   },
//   addPotion(newPotion) {
//     for (const potion of this.potions) {
//       if (potion.name === newPotion.name) {
//         return `Error! Potion ${newPotion.name} is already in your inventory!`;
//       }
//     }

//     this.potions.push(newPotion);
//     return this.potions;
//   },
//   removePotion(potionName) {
//     const { potions } = atTheOldToad;

//     for (let i = 0; i < potions.length; i += 1) {
//       let item = potions[i];
//       if (item.name === potionName) {
//         potions.splice(i, 1);
//         return potions;
//       }
//     }

//     return `Potion ${potionName} is not in inventory!`;
//   },
//   updatePotionName(oldName, newName) {
//     const { potions } = atTheOldToad;

//     for (const potion of potions) {
//       if (potion.name === oldName) {
//         potion.name = newName;
//         return potions;
//       }
//     }
//     return `Potion ${oldName} is not in inventory!`;
//   },
// };

// console.table(atTheOldToad.getPotions());
// console.table(atTheOldToad.addPotion({ name: 'Stone skin', price: 240 }));
// console.table(atTheOldToad.addPotion({ name: 'Invisibility', price: 620 }));
// console.table(atTheOldToad.addPotion({ name: 'Dragon breath', price: 700 }));
// console.table(atTheOldToad.updatePotionName('Dragon breath', 'Polymorth'));
// console.table(atTheOldToad.removePotion('Speed potion'));
// console.table(atTheOldToad.removePotion('Dragon breath'));

//=========================================================
// Change code below this line
// const getTotalBalanceByGender = (users, gender) => [...users]
// .filter(user => user.gender === gender)
// .reduce((acc, user) => acc + user.balance, 0);
// // Change code above this line
//=========================================================
//Потрібно створити функцію яка буде приймати 2 параметри
//1 параметр це масив всіх юзерів
//2 параметр це масив з іменами чоловічими
// -----Повертає----
// 1 індекси чоловічих імен в масив mensIndex
// 2 індекси жіночих імен в масив womensIndex
// 3 імена в масив womens

// const users = [
//   'Artem',
//   'Anna',
//   'Larisa',
//   'Maksim',
//   'Svetlana',
//   'David',
//   'Roman',
//   'Olga',
// ];
// const mensIndex = [];
// const womensIndex = [];
// const mens = ['Artem', 'Maksim', 'David', 'Roman'];
// const womens = [];

// function sortUsers(users, mens) {
//   for (let i = 0; i < users.length; i += 1) {
//     const isMan = mens.includes(users[i]);
//     if (isMan) {
//       mensIndex.push(i);
//     } else {
//       womensIndex.push(i);
//       womens.push(users[i]);
//     }
//   }
// }

// const sortUsers = (users, mens) => {
//   for (const user of users) {
//     if (mens.includes(user)) {
//       mensIndex.push(users.indexOf(user));
//     } else {
//       womensIndex.push(users.indexOf(user));
//       womens.push(user);
//     }
//   }
// };

// sortUsers(users, mens);
// console.log(mensIndex);
// console.log(womensIndex);
// console.log(womens);
//=========================================================

//=========================================================
//=========================================================
//=========================================================
//=========================================================
//=========================================================
//=========================================================
//=========================================================
//=========================================================
//=========================================================
//=========================================================
//=========================================================
//=========================================================
//=========================================================
//=========================================================
