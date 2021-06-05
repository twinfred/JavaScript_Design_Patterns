const Animal = function(type) {
  this.type = type || 'dog';
}

const dog = new Animal('dog');
const cat = new Animal('cat');

dog.bark = function() {
  console.log('woof woof!');
  return this;
}

cat.meow = function() {
  console.log('meow meooooooow!');
  return this;
}

dog.bark();
cat.meow();