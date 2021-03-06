const tweets = [
  { id: '000', likes: 5, tags: ['js', 'nodejs'] },
  { id: '001', likes: 2, tags: ['html', 'css'] },
  { id: '002', likes: 17, tags: ['html', 'js', 'nodejs'] },
  { id: '003', likes: 8, tags: ['css', 'react'] },
  { id: '004', likes: 0, tags: ['js', 'nodejs', 'react'] },
];

//Отобрать все твиты, и посчитать сколько раз они повторялись

// const allTags = tweets.reduce((acc, { tags }) => {
//   // console.log(`tweet: `, tweet);
//   // console.log(`tweet tags: `, tags);
//   // console.log(`acc: `, acc);
//   acc.push(...tags);
//   return acc;
// }, []);

// console.log(`allTags: `, allTags);
// console.table(`allTags: `, allTags);
//========================================================
// const allTags = function (object) {
//   const newArray = [];

//   for (const tweet of tweets) {
//     newArray.push(...tweet.tags);
//   }

//   return newArray;
// };

// const totalTags = allTags(tweets);
// console.log(`totalTags: `, totalTags);

// const numbersOfTags = function (array) {
//   const obj = {};
//   for (const item of array) {
//     if (!obj.hasOwnProperty(item)) {
//       obj[item] = 1;
//     } else {
//       obj[item] += 1;
//     }
//   }

//   return obj;
// };

// console.log(`tagCount: `, numbersOfTags(totalTags));
//======================================================

// const tags = tweets =>
//   tweets.reduce((acc, tweet) => {
//     acc.push(...[tweet.tags]);

//     return acc;
//   }, []);

// // console.log(`tags: `, tags(tweets));
// const allTags = tags(tweets);
// console.log(`allTags: `, allTags);

//========================================================
//========================================================
//========================================================
/*
 * Считаем общее количество часов
 */

const players = [
  { id: 'player-1', name: 'Mango', timePlayed: 310, online: false },
  { id: 'player-2', name: 'Poly', timePlayed: 470, online: true },
  { id: 'player-3', name: 'Kiwi', timePlayed: 230, online: true },
  { id: 'player-4', name: 'Ajax', timePlayed: 150, online: false },
  { id: 'player-5', name: 'Chelsey', timePlayed: 80, online: true },
];

//---количество времени общее наиграное
const totalTime = players.reduce((acc, player) => acc + player.timePlayed, 0);
// console.log(totalTime);

//---игроки наигравшие больше 250
// const HARD_TIME = 250;
// const hardCorePlayers = players.filter(player => player.timePlayed > HARD_TIME);
// console.table(hardCorePlayers);

//---имена всех пользователей
// const playersName = players.map(player => player.name);
// console.log(`playersName: `, playersName);

//---найти пользователя
// const playerToFind = 'player-4';
// const findPlayer = players.find(player => playerToFind === player.id);
// console.log(`findPlayer: `, findPlayer);

//---пользователи онлайн
// const onlinePlayers = players.filter(player => player.online);
// console.log(`onlinePlayers: `, onlinePlayers);

//---пользователи офлайн
// const offlinePlayers = players.filter(player => !player.online);
// console.log(`offlinePlayers: `, offlinePlayers);

//---найти пользователя по имени
// const findName = players.find(player => player.name === 'Kiwi');
// console.log(`findName: `, findName);

//---увеличим время игроков на 50
// console.table(players);
// const playersPlusTime = players.map(player => {
//   return { ...player, timePlayed: player.timePlayed + 50 };
// });
// console.table(playersPlusTime);

//========================================================

// const planets = ['Earth', 'Mars', 'Venus', 'Jupiter'];

// const planetsLengths = planets.map(planet => planet.length);

// console.log(planetsLengths);

//========================================================

const users = [
  {
    name: 'Moore Hensley',
    email: 'moorehensley@indexia.com',
    eyeColor: 'blue',
    friends: ['Sharron Pace'],
    isActive: false,
    balance: 2811,
    skills: ['ipsum', 'lorem'],
    gender: 'male',
    age: 37,
  },
  {
    name: 'Sharlene Bush',
    email: 'sharlenebush@tubesys.com',
    eyeColor: 'blue',
    friends: ['Briana Decker', 'Sharron Pace'],
    isActive: true,
    balance: 3821,
    skills: ['tempor', 'mollit', 'commodo', 'veniam', 'laborum'],
    gender: 'female',
    age: 34,
  },
  {
    name: 'Ross Vazquez',
    email: 'rossvazquez@xinware.com',
    eyeColor: 'green',
    friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
    isActive: false,
    balance: 3793,
    skills: ['nulla', 'anim', 'proident', 'ipsum', 'elit'],
    gender: 'male',
    age: 24,
  },
  {
    name: 'Elma Head',
    email: 'elmahead@omatom.com',
    eyeColor: 'green',
    friends: ['Goldie Gentry', 'Aisha Tran'],
    isActive: true,
    balance: 2278,
    skills: ['adipisicing', 'irure', 'velit'],
    gender: 'female',
    age: 21,
  },
  {
    name: 'Carey Barr',
    email: 'careybarr@nurali.com',
    eyeColor: 'blue',
    friends: ['Jordan Sampson', 'Eddie Strong'],
    isActive: true,
    balance: 3951,
    skills: ['ex', 'culpa', 'nostrud'],
    gender: 'male',
    age: 27,
  },
  {
    name: 'Blackburn Dotson',
    email: 'blackburndotson@furnigeer.com',
    eyeColor: 'brown',
    friends: ['Jacklyn Lucas', 'Linda Chapman'],
    isActive: false,
    balance: 1498,
    skills: ['non', 'amet', 'ipsum'],
    gender: 'male',
    age: 38,
  },
  {
    name: 'Sheree Anthony',
    email: 'shereeanthony@kog.com',
    eyeColor: 'brown',
    friends: ['Goldie Gentry', 'Briana Decker'],
    isActive: true,
    balance: 2764,
    skills: ['lorem', 'veniam', 'culpa'],
    gender: 'female',
    age: 39,
  },
];

// const getUserNames = users => {
//   return users.map(user => user.name);
// };

// const userNames = getUserNames(users);
// console.log(userNames);

//========================================================

// const getUserEmails = users.map(user => user.email);
// console.log(getUserEmails);

//========================================================

// const books = [
//   {
//     title: 'The Last Kingdom',
//     author: 'Bernard Cornwell',
//     genres: ['adventure', 'history'],
//   },
//   {
//     title: 'Beside Still Waters',
//     author: 'Robert Sheckley',
//     genres: ['fiction', 'mysticism'],
//   },
//   {
//     title: 'Redder Than Blood',
//     author: 'Tanith Lee',
//     genres: ['horror', 'mysticism', 'adventure'],
//   },
// ];

// const allGenres = books.flatMap(book => book.genres);
// console.log(allGenres);

// const uniqueGenres = allGenres.filter(
//   (genre, index, array) => array.indexOf(genre) === index,
// );
// console.log(uniqueGenres);

//========================================================

// const books = [
//   {
//     title: 'The Last Kingdom',
//     author: 'Bernard Cornwell',
//     rating: 8.38,
//   },
//   {
//     title: 'Beside Still Waters',
//     author: 'Robert Sheckley',
//     rating: 8.51,
//   },
//   {
//     title: 'The Dream of a Ridiculous Man',
//     author: 'Fyodor Dostoevsky',
//     rating: 7.75,
//   },
//   { title: 'Redder Than Blood', author: 'Tanith Lee', rating: 7.94 },
//   { title: 'Enemy of God', author: 'Bernard Cornwell', rating: 8.67 },
// ];

// const MIN_RATING = 8;
// const AUTHOR = 'Bernard Cornwell';

// const topRatedBooks = books.filter(book => book.rating >= MIN_RATING);
// console.table(topRatedBooks);

// const booksByAuthor = books.filter(book => book.author === AUTHOR);
// console.table(booksByAuthor);

// const worthRating = books.filter(book => book.rating <= MIN_RATING);
// console.table(worthRating);

//========================================================

// const getUsersWithFriend = (users, friendName) =>
//   users.filter(({ friends }) => friends.includes(friendName));

// console.table(getUsersWithFriend(users, 'Goldie Gentry'));

//========================================================

// const getFriends = users => {
//   const friends = users.flatMap(user => user.friends);
//   return friends.filter(
//     (friend, index, array) => array.indexOf(friend) === index,
//   );
// };

// console.table(getFriends(users));
// console.table(getFriends(users).sort());

//========================================================
// const array = [1, 2, 3, 4, 5];

// function getExtremeElements(array) {
//   // Change code below this line
//   return [array[0], array[array.length - 1]];
//   // array.splice(1, array.length - 2);
//   // return [...array].splice(1, array.length - 2);

//   // return array;

//   // Change code above this line
// }

// console.log(getExtremeElements(array));
//========================================================

// const arr = [1, 2, 3, 4, 5];
// const secondArr = [6, 7, 8, 9];
// const maxLength = 7;

// function makeArray(firstArray, secondArray, maxLength) {
//   // Change code below this line
//   const newArray = [...firstArray, ...secondArray];
//   console.log(newArray);

//   return newArray.length > maxLength ? newArray.slice(0, maxLength) : newArray;
//   // Change code above this line
// }

// console.log(makeArray(arr, secondArr, maxLength));

//========================================================
// const arr = [1, 2, 3, 4, 5];

// function includes(array, value) {
//   // Change code below this line
//   for (const item of array) {
//     if (item === value) {
//       return true;
//     }
//   }
//   return false;
//   // Change code above this line
// }

// console.log(includes(arr, 4));
//========================================================
// function withdraw(amount, balance) {
//   if (amount === 0) {
//     console.log('Для проведения операции введите сумму больше нуля');
//     return;
//   }

//   if (amount > balance) {
//     console.log('Недостаточно средств на счету');
//     return;
//   }

//   console.log('Операция снятия средств проведена');
// }

// withdraw(0, 300); // "Для проведения операции введите сумму больше нуля"
// withdraw(500, 300); // "Недостаточно средств на счету"
// withdraw(100, 300); // "Операция снятия средств проведена"
//========================================================

// Change code below this line
// function add(...args) {
//   let sum = 0;
//   for (const arg of args) {
//     sum += arg;
//   }
//   return sum;
//   // Change code above this line
// }

// console.log(add(5, 5, 10));
//========================================================

// const bookShelf = {
//   books: ['The last kingdom', 'Haze', 'The guardian of dreams'],
//   updateBook(oldName, newName) {
//     // Change code below this line
//     const { books } = bookShelf;
//     // for (let i = 0; i < books.length; i += 1) {
//     //   console.log(books[i]);
//     //   if (books[i] === oldName) {
//     //     console.log(books[i] === oldName);
//     //     books[i] = newName;
//     //   }
//     // }

//     books.splice(books.indexOf(oldName), 1, newName);

//     return books;
//   },
// };

// console.log(bookShelf.updateBook('Haze', 'Dungeon chronicles'));
//========================================================

// const atTheOldToad = {
//   potions: [
//     { name: 'Speed potion', price: 460 },
//     { name: 'Dragon breath', price: 780 },
//     { name: 'Stone skin', price: 520 },
//   ],
//   // Change code below this line
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
//   },

//   removePotion(potionName) {
//     let isNotRemoved = 1;
//     for (let i = 0; i < this.potions.length; i += 1) {
//       if (this.potions[i].name === potionName) {
//         this.potions.splice(i, 1);
//         isNotRemoved = 0;
//       }
//     }
//     if (isNotRemoved) {
//       return `Potion ${potionName} is not in inventory!`;
//     }
//   },

//   updatePotionName(oldName, newName) {
//     for (const potion of this.potions) {
//       if (potion.name === oldName) {
//         potion.name = newName;
//       }
//     }
//   },
// };

// console.log(atTheOldToad.addPotion({ name: 'Invisibility', price: 620 }));
// console.log(atTheOldToad.addPotion({ name: 'Power potion', price: 270 }));
// console.log(atTheOldToad.addPotion({ name: 'Stone skin', price: 520 }));
// console.log(atTheOldToad.removePotion('Stone skin'));
// console.log(atTheOldToad.updatePotionName('Power potion', 'Polymorth'));
// console.log(atTheOldToad.potions);
//========================================================
// const changeEven = (numbers, value) =>
//   numbers.map(number => {
//     if (number % 2 === 0) {
//       return number + value;
//     } else {
//       return number;
//     }
//   });

// const changeEven = (numbers, value) =>
//   numbers.map(number => (number % 2 === 0 ? number + value : number));

// console.log(changeEven([1, 3, 4, 5, 6, 7, 8], 2));

//========================================================
// class Storage {
//   constructor(items) {
//     this.items = items;
//   }
//   getItems() {
//     return this.items;
//   }
//   addItem(newItem) {
//     this.items.push(newItem);
//   }
//   removeItem(itemToRemove) {
//     this.items.splice(this.items.indexOf(itemToRemove), 1);
//   }
// }

// // Change code above this line
// const storage = new Storage(['Nanitoids', 'Prolonger', 'Antigravitator']);
// console.log(storage);
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
// storage.addItem('Droid');
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
// storage.removeItem('Prolonger');
// console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

//========================================================
// class StringBuilder {
//   constructor(initialValue) {
//     this.value = initialValue;
//   }

//   getValue() {
//     return this.value;
//   }

//   padEnd(str) {
//     this.value += str;
//   }

//   padStart(str) {
//     this.value = str + this.value;
//   }

//   padBoth(str) {
//     this.padStart(str);
//     this.padEnd(str);
//   }
// }

// // Change code above this line
// const builder = new StringBuilder('.');
// console.log(builder.getValue()); // "."
// builder.padStart('^');
// console.log(builder.getValue()); // "^."
// builder.padEnd('^');
// console.log(builder.getValue()); // "^.^"
// builder.padBoth('=');
// console.log(builder.getValue()); // "=^.^="

//========================================================
//========================================================
//========================================================
//========================================================
//========================================================
//========================================================
//========================================================
//========================================================
//========================================================
//========================================================
//========================================================
//========================================================
//========================================================
//========================================================
//========================================================
//========================================================
//========================================================
//========================================================
//========================================================
//========================================================
//========================================================
//========================================================
//========================================================
//========================================================
//========================================================
//========================================================
//========================================================
