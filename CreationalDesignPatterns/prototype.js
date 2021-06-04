const macBook = {
  color: 'silver',
  turnOn() {
    console.log('turning on...');
  },
  turnOff() {
    console.log('turning off...');
  }
}

// Proper prototype cloning
const myComputer = Object.create(macBook, { owner: { value: 'Tim'} });
console.log(myComputer.__proto__ === macBook);

// Not a prototype copy
const newComputer = {...macBook, owner: 'John'};
console.log(newComputer.__proto__ === macBook);

macBook.power = 'USB-C';

// The protoype gets the new value for 'power'
console.log(myComputer.power);
// But the non-prototype doesn't
console.log(newComputer.power);