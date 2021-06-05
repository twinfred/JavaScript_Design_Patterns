const calculationMethods = {
  add: function(x, y) {
    return x + y;
  },
  subtract: function(x, y) {
    return x - y;
  },
  multiply: function(x, y) {
    return x * y;
  },
  divide: function(x, y) {
    return x / y;
  }
};

const calculator = {
  execute: function(method, num1, num2) {
    if (!(method in calculationMethods)) return null;

    return calculationMethods[method](num1, num2);
  }
};

console.log(calculator.execute('add', 1, 2));
console.log(calculator.execute('subtract', 5, 2));
console.log(calculator.execute('multiply', 11, 2));
console.log(calculator.execute('divide', 10, 2));
console.log(calculator.execute('square root', 20));