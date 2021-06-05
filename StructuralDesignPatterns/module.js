const userApi = () => {
  // private variables
  const users = [];

  // private function
  const addUser = (name) => {
    users.push(name);

    return users[users.length -1];
  }

  // private function
  const getAllUsers = () => {
    return users;
  }

  // private function
  const deleteUser = (name) => {
    const userIndex = users.indexOf(name);

    if (userIndex < 0) {
      throw new Error('User not found');
    }

    users.splice(userIndex, 1);
  }

  // private function
  const updateUser = (name, newName) => {
    const userIndex = users.indexOf(name);

    if (userIndex < 0) {
      throw new Error('User not found');
    }

    users[userIndex] = newName;

    return users[userIndex];
  }

  return {
    // public functions
    add: addUser,
    get: getAllUsers,
    del: deleteUser,
    put: updateUser
  }
}

const api = userApi();

api.add('Tim');
api.add('Hina');
api.add('Yasmeen');
api.add('Neeloo');

console.log(api.get());

api.del('Yasmeen');

console.log(api.get());

api.put('Tim', 'Tim Winfred');

console.log(api.get());