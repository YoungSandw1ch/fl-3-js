// const save = (key, value) => {
//   try {
//     const strValue = JSON.stringify(value);
//     localStorage.setItem(key, strValue);
//   } catch (error) {
//     console.error('Set state error ', error.message);
//   }
// };

// const load = key => {
//   try {
//     const value = localStorage.get(key);
//     return value === null ? undefined : JSON.parse(value);
//   } catch (error) {
//     console.error('Get state error: ', error.message);
//   }
// };

// const remove = key => {
//   try {
//     localStorage.removeItem(key);
//   } catch (error) {
//     console.error('Remove state error: ', error.message);
//   }
// };

// export { save, load, remove };
// export default { save, load, remove };
