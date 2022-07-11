// class Car {
//   // Change code below this line
//   static MAX_PRICE = 50000;
//   #price;

//   constructor({ price }) {
//     this.#price = price;
//   }

//   get price() {
//     return this.#price;
//   }

//   set price(newPrice) {
//     if (Car.MAX_PRICE >= newPrice) {
//       this.#price = newPrice;
//     }
//   }
//   // Change code above this line
// }

// const audi = new Car({ price: 35000 });
// console.log(audi.price); // 35000
// console.log(audi);

// audi.price = 49000;
// console.log(audi.price); // 49000

// audi.price = 51000;
// console.log(audi.price); // 49000

//================================================================
// class User {
//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }
// // Change code below this line
// class Admin extends User {
//   static AccessLevel = {
//     BASIC: 'basic',
//     SUPERUSER: 'superuser',
//   };
// }
//================================================================
// class User {
//   email;

//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }
// class Admin extends User {
//   // Change code below this line

//   static AccessLevel = {
//     BASIC: 'basic',
//     SUPERUSER: 'superuser',
//   };

//   constructor({ email, accessLevel }) {
//     super(email);
//     this.accessLevel = accessLevel;
//   }
//   blacklistedEmails = [];

//   blacklist(email) {
//     this.blacklistedEmails.push(email);
//   }

//   isBlacklisted(email) {
//     return this.blacklistedEmails.includes(email);
//   }

//   // Change code above this line
// }

// const mango = new Admin({
//   email: 'mango@mail.com',
//   accessLevel: Admin.AccessLevel.SUPERUSER,
// });

// console.log(mango);

// console.log(mango.email); // "mango@mail.com"
// console.log(mango.accessLevel); // "superuser"

// mango.blacklist('poly@mail.com');
// console.log(mango.blacklistedEmails); // ["poly@mail.com"]
// console.log(mango.isBlacklisted('mango@mail.com')); // false
// console.log(mango.isBlacklisted('poly@mail.com')); // true
// //================================================================

//==========================Блоггер===============================
// class Blogger {
//   constructor({ email, age, numberOfPosts, topics }) {
//     this.email = email;
//     this.age = age;
//     this.numberOfPosts = numberOfPosts;
//     this.topics = topics;
//   }

//   getInfo() {
//     return `User ${this.email} is ${this.age} years old and has ${this.numberOfPosts} posts`;
//   }

//   updatePostCount(value) {
//     this.numberOfPosts += value;
//   }
// }

// const mango = new Blogger({
//   email: 'mango@mail.com',
//   age: 24,
//   numberOfPosts: 20,
//   topics: ['tech', 'cooking'],
// });
// console.log(mango.getInfo()); // User mango@mail.com is 24 years old and has 20 posts
// mango.updatePostCount(5);
// console.log(mango.getInfo()); // User mango@mail.com is 24 years old and has 25 posts

// const poly = new Blogger({
//   email: 'poly@mail.com',
//   age: 19,
//   numberOfPosts: 17,
//   topics: ['sports', 'gaming', 'health'],
// });
// console.log(poly.getInfo()); // User poly@mail.com is 19 years old and has 17 posts
// poly.updatePostCount(4);
// console.log(poly.getInfo()); // User poly@mail.com is 19 years old and has 21 posts
//================================================================

//================================================================
//================================================================
/*
 *======================Example 2 - Хранилище======================
 */
// class Storage {
//   constructor(items = []) {
//     this.items = items;
//   }

//   getItems() {
//     return this.items;
//   }

//   addItem(item) {
//     this.items.push(item);
//   }

//   removeItem(item) {
//     // this.items.splice(this.items.indexOf(item), 1);
//     this.items = this.items.filter(e => e !== item);
//   }
// }

// const storage = new Storage(['🍎', '🍋', '🍇', '🍑']);

// const items = storage.getItems();
// console.table(items); // [ '🍎', '🍋', '🍇', '🍑' ]

// storage.addItem('🍌');
// console.table(storage.items); // [ '🍎', '🍋', '🍇', '🍑', '🍌' ]

// storage.removeItem('🍋');
// console.table(storage.items); // [ '🍎', '🍇', '🍑', '🍌' ]
/*
 *============================Example 3 - User====================
 */
// class User {
//   #login;
//   #email;
//   constructor({ login, email }) {
//     this.#login = login;
//     this.#email = email;
//   }

//   get login() {
//     return this.#login;
//   }

//   set login(newLogin) {
//     this.#login = newLogin;
//   }

//   get email() {
//     return this.#email;
//   }

//   set email(newEmail) {
//     this.#email = newEmail;
//   }
// }

// const mango = new User({
//   login: 'Mango',
//   email: 'mango@dog.woof',
// });

// console.log(mango.login); // Mango
// mango.login = 'Mangodoge';
// console.log(mango.login); // Mangodoge

// const poly = new User({
//   login: 'Poly',
//   email: 'poly@mail.com',
// });

// console.log(poly.login); // Poly
// poly.login = 'Polycutie';
// console.log(poly.login); // Polycutie
/*
 *=================================================================
 */
/*
 *=================================================================
 */
/*
 *=================================================================
 */
/*
 *=================================================================
 */
/*
 *=================================================================
 */
/*
 *=================================================================
 */
/*
 *=================================================================
 */
/*
 *=================================================================
 */
/*
 *=================================================================
 */
/*
 *=================================================================
 */
/*
 *=================================================================
 */
/*
 *=================================================================
 */
/*
 *=================================================================
 */
/*
 *=================================================================
 */
