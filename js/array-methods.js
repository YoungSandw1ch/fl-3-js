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
console.log(totalTime);

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
//========================================================
//========================================================
//========================================================
//========================================================
//========================================================
//========================================================
//========================================================
//========================================================
//========================================================
