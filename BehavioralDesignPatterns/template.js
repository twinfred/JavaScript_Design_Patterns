
class HouseTemplate {
  constructor(name, address) {
    this.name = name;
    this.address = address;
  }

  buildHouse() {
    this.buildFoundation();
    this.buildPillars();
    this.buildWalls();
    this.buildWindows();
    console.log(`${ this.name } has been built successfully at ${ this.address }`);
  }

  buildFoundation() {
    console.log('Building foundation...');
  }

  buildPillars() {
    throw new Error('You have to build your own pillars');
  }

  buildWalls() {
    throw new Error('You have to build your own walls');
  }

  buildWindows() {
    console.log('Building windows');
  }
}

class WoodenHouse extends HouseTemplate {
  constructor(name, address) {
    super(name, address);
  }

  buildPillars() {
    console.log('Building pillars for a wooden house');
  }

  buildWalls() {
    console.log('Building walls for a wooden house');
  }
}

class BrickHouse extends HouseTemplate {
  constructor(name, address) {
    super(name, address);
  }

  buildPillars() {
    console.log('Building pillars for a brick house');
  }

  buildWalls() {
    console.log('Building walls for a brick house');
  }
}

const woodenHouse = new WoodenHouse('Wooden house', '123 Maple Road');
const brickHouse = new BrickHouse('Brick house', '456 Stone Lane');

woodenHouse.buildHouse();
brickHouse.buildHouse();