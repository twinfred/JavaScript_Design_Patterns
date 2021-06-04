function animalFactory() {
  this.createAnimal = function(animalType) {
    let animal;

    switch(animalType) {
      case 'dog':
        animal = new Dog();
        break;
      case 'cat':
        animal = new Cat();
        break;
      case 'horse':
        animal = new Horse();
        break;
      default:
        animal = new Monkey();
        break;
    }

    return animal;
  }
}

const Dog = function() {
  this.makeSound = () => {
    console.log('woof woof!');
  }
}

const Cat = function() {
  this.makeSound = () => {
    console.log('prrr prrr meow!');
  }
}

const Horse = function() {
  this.makeSound = () => {
    console.log('neeeighhh!')
  }
}

const Monkey = function() {
  this.makeSound = () => {
    console.log('ooooh ahh oooh oooh!');
  }
}

const factory = new animalFactory();

const jojo = factory.createAnimal('dog');
jojo.makeSound();

const smokey = factory.createAnimal('cat');
smokey.makeSound();

const princess = factory.createAnimal('horse');
princess.makeSound();

const kong = factory.createAnimal('monkey');
kong.makeSound();