import uuid from './utils.js';

function UserWithLongId() {
  this.id = uuid.generateId();
};

function UserWithShortId() {
  this.id = uuid.generateShortId();
}

const user1 = new UserWithLongId();
console.log(user1.id);

const user2 = new UserWithShortId();
console.log(user2.id);