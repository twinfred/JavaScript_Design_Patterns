const macBook = {
  color: 'silver',
  turnOn() {
    console.log('turning on...');
  },
  turnOff() {
    console.log('turning off...');
  }
}

const myComputer = Object.create(macBook, { owner: { value: 'Tim'} });

myComputer.turnOn();
console.log(`We turned your computer on, ${myComputer.owner}`);
console.log(myComputer.__proto__ === macBook);