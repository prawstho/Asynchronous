const users = fetch('https://jsonplaceholder.typicode.com/users')
// this will be pending
console.log(users);

fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json()) // returns a promise
  .then(data => {
    data.forEach(user => {
      console.log(user.name);
    });
  });