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

// let regexp = /\d/g;
// let regExp = /\.|\/?\d+\./g;

// console.log(str.match(regexp).join(''));
// console.log(str.replace(/\D/g, ''));
// console.log(str.match(/\d+/g));

// console.log(str2.match(regExp));
// console.log(str2.split('.'));
/*
 *====================================================
 */
// let regexp = /\.{3}/g;
// console.log('Привет!... Как дела?.....'.match(regexp)); // ..., .....
/*
 *====================================================
 */
let regexp = /\#\w{6}\b/g;

let str =
  'color:#121212; background-color:#AA00ef bad-colors:f#fddee #fd2 #12345678';

console.log(str.match(regexp)); // #121212,#AA00ef
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
