//===========================================================
//===========================================================

//============= namespace import.========================

// import * as methods from './storage.js';
// console.log(methods);
// console.log(methods.load);

//=============named import to object with dectruct=========

// import { load, save, remove } from './storage.js';
// console.log(save);
// console.log(load);
// console.log(remove);

//----------------------------------------------------------
//----пример как нужно експортировать файлы
//----из другого модуля

// export const save = (key, value) => {
//   try {
//     const strValue = JSON.stringify(value);
//     localStorage.setItem(key, strValue);
//   } catch (error) {
//     console.error('Set state error ', error.message);
//   }
// };

//---перед каждым файлом нужно добавить export
//----------------------------------------------------------
//===============named export as object=====================

// import { remove } from './storage.js';
// console.log(remove);

//---или не указывать перед файлом export но передать как
//---деструктуризированый обьект

// const remove = key => {
//   try {
//     localStorage.removeItem(key);
//   } catch (error) {
//     console.error('Remove state error: ', error.message);
//   }
// };

// export { remove };

//----------------------------------------------------------

//===============export default==============================
//---когда нужно експортировать 1 сущность (функцию....)

// import remove from './storage.js';
// console.log(remove);

//---пример експорта-----------------------------------------

// export default remove = key => {
//   try {
//     localStorage.removeItem(key);
//   } catch (error) {
//     console.error('Remove state error: ', error.message);
//   }
// };
//===========================================================
