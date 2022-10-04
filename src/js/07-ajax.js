const refs = {
  fetchBtn: document.querySelector('.btn'),
  userList: document.querySelector('.user-list'),
};

refs.fetchBtn.addEventListener('click', () => {
  onUsersFetch()
    .then(createListMarkup)
    .then(renderList)
    .catch(error => console.log(error));
});

function onUsersFetch() {
  return fetch('https://jsonplaceholder.typicode.com/users').then(r => {
    if (!r.ok) throw new Error(r.status);

    return r.json();
  });
}

function createListMarkup(users) {
  return users.map(createUserMarkup).join('');
}

function createUserMarkup(user) {
  const markup = [];

  for (let [key, value] of Object.entries(user)) {
    //if need to ignore id
    if (key === 'id') continue;
    //or write condition, when value is object - skip this value
    value = value?.name || value;
    if (value.city && value.street && value.suite) {
      value = `${value?.city}, ${value?.street}, ${value?.suite}`;
    }

    markup.push(`<p><b>${toCapitalize(key)}: </b>${value}</p>`);
  }

  return '<li>' + markup.join('') + '</li>';
}

function renderList(markup) {
  refs.userList.insertAdjacentHTML('beforeend', markup);
}

function toCapitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

///==============not used function================
// function flattedUserAdressAndCompany(user) {
//   const userObj = {};

//   for (let [key, value] of Object.entries(user)) {
//     value = value?.name || value;
//     if (value.city && value.street && value.suite) {
//       value = `${value?.city}, ${value?.street}, ${value?.suite}`;
//     }
//     userObj[key] = value;
//   }

//   console.log(userObj);
//   return userObj;
// }

//=====================URLSearchParams=================

// const searchParams = new URLSearchParams({
//   _limit: 7,
//   _sort: 'name',
// });

// console.log(searchParams);
// console.log(searchParams.toString());

// const url = `https://jsonplaceholder.typicode.com/users?${searchParams}`;

// console.log(url);

//=======================================================

const poke = fetch('https://pokeapi.co/api/v2/pokemon/1');

poke
  .then(r => r.json())
  .then(pokemon => {
    console.log(pokemon);
  })
  .catch(error => {
    console.log(error);
  });
