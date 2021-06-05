import axios from 'axios';

function getUsers() {
  return facade.get('https://jsonplaceholder.typicode.com/users');
}

function getUserById(id) {
  return facade.get('https://jsonplaceholder.typicode.com/users', { id });
}

const facade = {
  get: function(url, params) {
    return axios({
      url,
      params,
      method: 'GET'
    }).then(res => res.data);
  }
};

async function getData() {
  try {
    console.time('getUsers took');
    const users = await getUsers();
    console.timeEnd('getUsers took');
    console.log(`There are ${users.length} users`);

    console.time('getUserById took');
    const user1 = await getUserById(1);
    console.timeEnd('getUserById took');
    console.log(user1);
  } catch (error) {
    console.log(error);
  }
}

getData();