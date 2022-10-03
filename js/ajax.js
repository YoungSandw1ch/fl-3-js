// fetch('https://jsonplaceholder.typicode.com/users')
//   .then(response => {
//     if (!response.ok) {
//       throw new Error(response.status);
//     }
//     console.log(response);
//     console.log(response.json());
//     return response.json();
//   })
//   .then(data => {
//     // Data handling
//   })
//   .catch(error => {
//     // Error handling
//   });

// fetch("https://jsonplaceholder.typicode.com/users")

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
    const json = r.json();
    console.log('json: ', json);
    return json;
  });
}

function createListMarkup(users) {
  console.log('listMarcup: ', users.map(createUserMarkup).join(''));
  return users.map(createUserMarkup).join('');
}

function createUserMarkup(user) {
  // console.log('user: ', user);
  // console.log('user: ', Object.entries(user));

  console.log(Object.entries(user));
  for (let [key, value] of Object.entries(user)) {
    value = value?.name || value;
    if (value.city && value.street && value.suite) {
      value = `${value?.city}, ${value?.street}, ${value?.suite}`;
    }
    console.log(value);
    // console.log('key: ', key);
    // console.log('value: ', value);
  }
  // const userEntries = user.map((key, value) => {
  //     console.log('key: ', key);
  //     console.log('value: ', value);
  //     // return `<p><b>${toCapitalize(key)}:</b>${value?.name}</p>`;
  //   })
  //   .join('');

  // console.log('userMarkup', '<li>' + userEntries + '</li>');
  // return '<li>' + userEntries + '</li>';
}

function renderList(markup) {
  refs.userList.insertAdjacentHTML('beforeend', markup);
}

function toCapitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
