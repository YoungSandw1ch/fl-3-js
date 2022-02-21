/*
 *====================================================
 */
// let str = 'Любо, братцы, любо!';

// console.log(str.match(/любо/gi));
/*
 *====================================================
 */
// // без флага g
// console.log('We will, we will'.replace(/we/i, 'I')); // I will, we will

// // с флагом g
// console.log('We will, we will'.replace(/we/gi, 'I')); // I will, I will
// console.log('We will, we will'.replace(/l/gi, '')); // We wi, we wi
/*
 *====================================================
 */
// console.log('Люблю HTML'.replace(/HTML/, '$& и JavaScript')); // Люблю HTML и JavaScript
// console.log('Люблю HTML'.replace(/ю/gi, '$& и JavaScript')); // Лю и JavaScriptблю и JavaScript HTML
// console.log('Люблю HTML'.replace(/HTML/, '$`и JavaScript'));
// console.log('Люблю HTML CSS'.replace(/HTML/, "$' и JavaScript"));
/*
 *====================================================
 */
// const getTime = str => str.match(/\b\d\d:\d\d\b/);
// const getTime = str => str.match(/\b\d{2}:\d{2}\b/);

// console.log(getTime('Завтрак в 09:00 в комнате 123:456'));
// console.log(getTime('Завтрак в 09:00 в комнате 123:456'));
/*
 *====================================================
 */
// const regExp = /Java[^script]/;

// console.log('Java'.match(regExp)); //null
// console.log('JavaScript'.match(regExp)); //JavaS
/*
 *====================================================
 */
// let regexp = /\d{2}[:-]\d{2}/g;
// console.log('Завтрак в 09:00. Ужин в 21-30'.match(regexp)); // 09:00, 21-30
/*
 *=========================!!!!=======================
 */
// const str =
//   '09.00 - завтрак. Ужин в 21-30. Стоимость завтрака $10.59, ужина - $12.99';
// const regExp = /\d{2}[.-]\d{2}/g;
// const regExp2 = /2[0-3]/g;

// console.log(str.match(regExp));
// console.log(str.match(regExp2));
/*
 *========================!!!=========================
 */
// let str = '+7(903)-123-45-67';
// let str2 = 'https://www.codewars.com/dashboard';
let str2 = 'codewars.com/dashboard';

// let str2 = 'https://www.codewars-wars.com/dashboard';
// let regExp = /[./]?([\w-]+\.)/g;
// console.log(str2.match(regExp));

const regexp = /(?:https\:\/\/)?(?:www\.)?([-\w]+)(?:\.)/;
let result = str2.match(regexp);

console.log(result);
console.log(result[1]);
// console.log(str.match(regexp).join(''));
// console.log(str.replace(/\D/g, ''));
// console.log(str.match(/\d+/g));
// console.log(str2.split('.'));
/*
 *=====================================================
 */
// const domainName = url => {
//   // const regexp = /(?:http\:\/\/)?(?:https\:\/\/)?(?:www\.)?([-a-z0-9]+)(?:\.)/;
//   const regexp = /(?:https?\:\/\/)?(?:www\.)?([-\w]+)(?:\.)/;
//   return url.match(regexp)[1];
// };

// console.log(domainName('http://google.com'));
// console.log(domainName('http://google.co.jp'));
// console.log(domainName('www.xakep.ru'));
// console.log(domainName('http://www.xakep.ru'));
/*
 *=====================================================
 */
// const domainName = url =>
//   url
//     .replace('http://', '')
//     .replace('https://', '')
//     .replace('www.', '')
//     .split('.')[0];

// console.log(domainName('http://google.com'));
// console.log(domainName('http://google.co.jp'));
// console.log(domainName('www.xakep.ru'));
// console.log(domainName('http://www.xakep.ru'));
/*
 *=====================================================
 */
// function domainName(url) {
//   const arr = url.match(/[./]?([\w-]+\.)/g);

//   if (arr[0].includes('www')) {
//     const el = arr[1];
//     return el.slice(0, el.length - 1);
//   } else {
//     const el2 = arr[0];
//     return el2.slice(1, el2.length - 1);
//   }
// }

// console.log(domainName('http://google.com'));
// console.log(domainName('http://google.co.jp'));
// console.log(domainName('www.xakep.ru'));
/*
 *====================================================
 */
// let regexp = /\.{3}/g;
// console.log('Привет!... Как дела?.....'.match(regexp)); // ..., .....
/*
 *====================================================
 */
// let regexp = /\#\w{6}\b/g;
// let regexp1 = /\#[a-z0-9]{6}\b/gi;

// let str =
//   'color:#121212; background-color:#AA00ef bad-colors:f#fddee #fd2 #12345678';

// console.log(str.match(regexp)); // #121212,#AA00ef
// console.log(str.match(regexp1)); // #121212,#AA00ef
/*
 *====================================================
 */
// console.log('123 456'.match(/\d+? \d+?/g)); // 123, 4
/*
 *====================================================
 */
// // let regexp = /<!--[^>]*>/g;
// let regexp = /<!--.*?-->/gs;

// let str = `... <!-- My -- comment
// test --> ..  <!----> ..
// `;

// console.log(str.match(regexp)); // '<!-- My -- comment \n test -->', '<!---->'
/*
 *====================================================
 */
// let regexp = /<[a-z].*?>/g;
// let regexp = /<\w.*?>/g;
// let regexp = /<[^>]+>/g;

// let str = '<> <a href="/"><input type="radio" checked> <b>';

// console.log(str.match(regexp)); // '<a href="/">', '<input type="radio" checked>', '<b>'
/*
 *====================================================
 */
// console.log('Gogogo now!'.match(/(go)+/i)); // "Gogogo"
/*
 *====================================================
 */
// let regexp = /(\w+\.)+\w+/g;
// let regexp = /([\w-]+\.)+\w+/g;

// console.log('site.com my.site.com'.match(regexp)); // site.com,my.site.com
// console.log('site.com my-site.com'.match(regexp)); // site.com,my.site.com
/*
 *====================================================
 */
// let results = '<h1> <h2>'.matchAll(/<(.*?)>/gi);

// // results - не массив, а перебираемый объект
// console.log(results); // [object RegExp String Iterator]
// console.log(results[0]); // undefined (*)

// results = Array.from(results); // превращаем в массив

// console.log(results);
// console.log(results[0] + 'dwqfwq');
// console.log(results[0]); // <h1>,h1 (первый тег)
// console.log(results[1]); // <h2>,h2 (второй тег)

// console.log(
//   results.map(ar => {
//     return ar[0];
//   }),
// );
/*
 *======================Задачи========================
 */
// const regexp = /#([a-z0-9]{3}){1,2}\b/gi;
// const regexp = /#(\w{3}\b|\w{6}\b)/g;
// let str = 'color: #3f3; and: #abcd; background-color: #AA00ef; and: #abcd';

// console.log(str.match(regexp)); // #3f3 #AA00ef
/*
 *====================================================
 */
//Напишите регулярное выражение, которое ищет любые
// десятичные числа, включая целочисленные, с плавающей точкой и отрицательные.

// let regexp = /[-\d]+\.?\d*/g;
// let regexp = /-?\d+(\.\d+)?/g;

// let str = '-1.5 0 2 -123.4.';

// console.log(str.match(regexp)); // -1.5, 0, 2, -123.4
/*
 *====================================================
 */

// const parse = str => {
//   // return str.match(/[-?\d+(\.\d+)-+*/]+/g);//херня
//   // return str.match(/[-\d(\.\d+)-+*/]+/g);//херня

//   // return str.match(/[-+*/.0-9]+/g);//работает но херня
//   const regexp = /(-?\d+(?:\.\d+)?)\s*([-+*\/])\s*(-?\d+(?:\.\d+)?)/;
//   let result = str.match(regexp);

//   result.shift();

//   return result;
// };

// // console.log(parse(' 135.2 + -3.47899'));
// console.log(parse('1.2 + 12'));

// // let [a, op, b] = parse('1.2 * 3.4');
// // let [a, op, b] = parse(' -3 / -6 ');
// // let [a, op, b] = parse(' -1.2 + 3.4');
// // let [a, op, b] = parse(' 135.2 + -3.47899');
// let [a, op, b] = parse('1.2 + 12.44');

// console.log(a); // 1.2
// console.log(op); // *
// console.log(b); // 3.4
/*
 *====================================================
 */
// function parse(expr) {
//   let regexp = /(-?\d+(?:\.\d+)?)\s*([-+*\/])\s*(-?\d+(?:\.\d+)?)/;

//   let result = expr.match(regexp);

//   if (!result) return [];
//   result.shift();

//   return result;
// }

// console.log(parse('-1.23 * 3.45')); // -1.23, *, 3.45

// let [a, op, b] = parse('-1.23 * 3.45');

// console.log(a); // 1.2
// console.log(op); // *
// console.log(b); // 3.4
/*
 *====================================================
 */
// const parse = expr => {
//   const regexp = /(-?\d+(\.*\d+)?)\s([-*+/])\s(-?\d+(\.\d+)?)/;
//   const result = expr.match(regexp);
//   return result[0].split(' ');
// };

// console.log(parse('-1.2 * 3.4'));
// // console.log(parse('-1 * 3'));
// let [a, op, b] = parse('-1.2 * 3.4');
// // let [a, op, b] = parse('-1 * 3');

// console.log(a); // 1.2
// console.log(op); // *
// console.log(b); // 3.4
/*
 *====================================================
 */
// let regexp = /^([a-f0-9]{2}\:){5}[a-f0-9]{2}$/i;

// console.log(regexp.test('01:32:54:67:89:AB')); // true

// console.log(regexp.test('0132546789AB')); // false (нет двоеточий)

// console.log(regexp.test('01:32:54:67:89')); // false (5 чисел, должно быть 6)

// console.log(regexp.test('01:32:54:67:89:ZZ')); // false (ZZ в конце строки)
/*
 *====================================================
 */
/*
 *====================================================
 */
/*
 *====================================================
 */

/*
 *====================================================
 */
/*
 *====================================================
 */

/*
 *====================================================
 */
/*
 *====================================================
 */
/*
 *====================================================
 */
/*
 *====================================================
 */
/*
 *====================================================
 */
/*
 *====================================================
 */
/*
 *====================================================
 */
/*
 *====================================================
 */
/*
 *====================================================
 */
/*
 *====================================================
 */
/*
 *====================================================
 */
/*
 *====================================================
 */
