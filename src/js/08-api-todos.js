const URL = 'https://633d710af2b0e623dc73e57a.mockapi.io/api/v1/todos/';

export function fetchTodos() {
  return fetch(URL).then(r => r.json());
}

export function createTodo(data) {
  return fetch(URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  }).then(r => r.json());
}

export function deleteTodo(id) {
  return fetch(`${URL}${id}`, {
    method: 'DELETE',
  });
}

export function updateTodo(id, data) {
  return fetch(`${URL}${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
}
