const myUsers = {
  userList: []
}

const myAwaitFunction = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users')
  const jsondata = await response.json()
  return jsondata;
}

const my2ndAsyncFunction = async () => {
  const myUsers = await myAwaitFunction()
  myUsers.forEach(user => {
    console.log(user.name);
  });
}

my2ndAsyncFunction();
console.log('myUsers: ', myUsers);