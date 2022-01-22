const tweets = [
  { id: '000', likes: 5, tags: ['js', 'nodejs'] },
  { id: '001', likes: 2, tags: ['html', 'css'] },
  { id: '002', likes: 17, tags: ['html', 'js', 'nodejs'] },
  { id: '003', likes: 8, tags: ['css', 'react'] },
  { id: '004', likes: 0, tags: ['js', 'nodejs', 'react'] },
];

//Отобрать все твиты, и посчитать сколько раз они повторялись

// const allTags = tweets.reduce((acc, tweet) => {
//   // console.log(tweet);
//   // console.log(acc);
//   return { ...acc, ...tweet.tags };
// }, {});

// console.log(allTags);

const allTags = function (object) {
  const newArray = [];

  for (const tweet of tweets) {
    newArray.push(...tweet.tags);
  }

  return newArray;
};

const totalTags = allTags(tweets);
console.log(totalTags);

const numbersOfTags = function (array) {
  const obj = {};
  for (const item of array) {
    obj[item] = 0;

    if (obj[item]) {
      obj[item] += 1;
    }
  }

  return obj;
};

console.log(numbersOfTags(totalTags));
