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
    if (!r.status) throw new Error(r.status);

    return r.json();
  });
}

function createListMarkup(users) {
  return users.map(createUserMarkup).join('');
}

function createUserMarkup(user) {
  const markup = [];

  for (let [key, value] of Object.entries(user)) {
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
