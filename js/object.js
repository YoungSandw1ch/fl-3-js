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
//     product.quantity = 1;
//     this.items.push(product);

//     for (const item of cart.items) {
//     }
//     product.quantity = 1;

// console.log(product.name);
// if (product.name === ) {
//   product.quantity += 1;
// }
// else {
// this.items.push(product);
// }
// },

// remove(productName) {
// for (const item of cart.items) {
//   console.log(item);
// }
// const allProductsName = object.values(item);
// this.items.splice(index, 1);
// },

//   clear() {
//     this.items = [];
//   },

//   countTotalPrice() {},
//   increaseQuantity(productName) {},
//   decreaseQuantity(productName) {},
// };

// console.table(cart.getItems());

// cart.add({ name: '🍎', price: 50 });
// cart.add({ name: '🍋', price: 60 });
// cart.add({ name: '🍋', price: 60 });
// cart.add({ name: '🍓', price: 110 });

// console.table(cart.getItems());
// console.log(cart.getItems());

// cart.remove('🍎');
// console.table(cart.getItems());

// cart.clear();
// console.table(cart.getItems());

// cart.increaseQuantity('🍎');
// console.table(cart.getItems());

// cart.decreaseQuantity('🍋');
// cart.decreaseQuantity('🍋');
// console.table(cart.getItems());

// console.log('Total: ', cart.countTotalPrice());
//=========================================================

const books = [
  {
    title: 'The Last Kingdom',
    author: 'Bernard Cornwell',
    rating: 8.38,
  },
  {
    title: 'На берегу спокойных вод',
    author: 'Роберт Шекли',
    rating: 8.51,
  },
];

// for (const book of books) {
//   console.log(book.title);
//   console.log(book.author);
//   console.log(book.rating);
// }

for (const book of books) {
  const { title, author, rating } = book;

  console.log(title);
  console.log(author);
  console.log(rating);
}
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
