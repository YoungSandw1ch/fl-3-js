// const clients = ["Mango", "Ajax", "Poly", "Dodo"];

// for (const client of clients) {
//   console.log(client);
// }




// const string = "javascript rule";

// for (const character of string) {
//   console.log(character);
// }




// const clients = ["Mango", "Poly", "Ajax", "Goro"];
// const clientNameToFind = "Goro";
// let message = "Клиента с таким именем нету в базе данных!";

// for (const client of clients) {
//   if (client === clientNameToFind) {
//     message = "Клиент с таким именем есть в базе данных!";
//     break;
//   }
//   // Если не совпадает, то на этой итерации ничего не делаем
// }

// console.log(message); // Клиент с таким именем есть в базе данных!





// const numbers = [1, 2, 5, 8, 3, 14, 18, 4, 7, 29, 6, 34, 55, 108, 3000, 11, 3456, 320];
// const threshold = 10;

// for (let i = 0; i < numbers.length; i += 1) {
//   // console.log(`счетчик перебора:  ${numbers[i]}`);
//   if (numbers[i] < threshold) {
//       // console.log(`Число меньше ${threshold}`);
//     continue;
//   }

//   console.log(`Числа больше чем ${threshold}: ${numbers[i]}`);
// }




// const a = [1, 3, 8, "poly"];
// console.log(a);
// const b = a;
// console.log(b);
// a.push(3000);
// console.log(a);
// console.log(b);



// let column = 'соединяет элементы массива в строку';
// console.log(column.split(" "));
// column = column.split(" ");
// console.log(column.join("МЛЯ"));
// column = column.join("МЛЯ");


// const name = [1, 2, 1, 2, 4, 6, 8, 9, 2]
// console.log(name.indexOf(10));
// console.log(name.slice(3, 0));