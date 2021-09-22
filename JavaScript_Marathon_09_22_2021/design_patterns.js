import "./styles.css";
import axios from "axios";

export default function App() {
  // Factory Pattern ----------
  // Building an Employee Factory

  // Employee Factory
  function EmployeeFactory() {
    this.createEmployeeType = function (type, name) {
      switch (type) {
        case "senior developer":
          return new SeniorDeveloper(name);
          break;
        case "developer manager":
        default:
          return new DeveloperManager(name);
          break;
      }
    };
  }

  const SeniorDeveloper = function (name) {
    this.name = name;
    this.writeCode = function () {
      console.log(this.name + " is writing code");
    };
  };

  const DeveloperManager = function (name) {
    this.name = name;
    this.manageDevs = function () {
      console.log(this.name + " managing devs");
    };
  };

  // Create the Employees using the Factory
  const factory = new EmployeeFactory();
  const employees = [];

  employees.push(factory.createEmployeeType("senior developer", "Tracy"));
  employees.push(factory.createEmployeeType("developer manager", "Tara"));
  employees.push(factory.createEmployeeType("senior developer", "Tim"));
  employees.push(factory.createEmployeeType("developer manager", "Tanya"));

  // console.log(employees[0].writeCode());

  // Decorator Pattern ----------
  // Building Superheroes

  // General Superhero Object
  const SuperHero = function (name) {
    this.name = name;
    this.isSuper = true;
  };

  // Create some individual super heroes using that object
  const wonderWoman = new SuperHero("Wonder Woman");
  const captainMarvel = new SuperHero("Captain Marvel");
  const superMan = new SuperHero("Super Man");

  // Decorate the indivual super heroes
  wonderWoman.whipAttack = function () {
    console.log(this.name + " is doing a whip attack");
  };

  captainMarvel.travelThroughTime = function () {
    console.log(this.name + " is traveling through time");
  };

  superMan.fly = function () {
    console.log(this.name + " is flying");
  };

  // wonderWoman.whipAttack()
  // captainMarvel.travelThroughTime()
  // superMan.fly()

  // Command Pattern ----------
  // Building a Calculator

  // Methods Object
  const calculatorMethods = {
    add: function (x, y) {
      return x + y;
    },
    subtract: function (x, y) {
      return x - y;
    },
    multiply: function (x, y) {
      return x * y;
    },
    divide: function (x, y) {
      return x / y;
    }
  };

  // Calculator Object that calls the methods by passing in parameters
  const calculator = {
    excute: function (method, num1, num2) {
      if (!(method in calculatorMethods)) return null;

      return calculatorMethods[method](num1, num2);
    }
  };

  // console.log(calculator.excute("add", 2, 5));
  // console.log(calculator.excute("subtract", 2, 5));
  // console.log(calculator.excute("multiply", 2, 5));
  // console.log(calculator.excute("divide", 2, 5));

  // Singleton Pattern ----------
  // Building a Single Database Instance

  // Singleton object database
  const DatabaseObject = function () {
    this.name = "My Database";
    this.id = Math.floor(Math.random() * 1000);
  };

  const Database = (function () {
    let instance;

    function createInstance() {
      return new DatabaseObject();
    }

    function getInstance() {
      if (!instance) {
        instance = createInstance();
      }

      return instance;
    }

    return {
      get: getInstance
    };
  })();

  const db1 = Database.get()
  const db2 = Database.get();

  //console.log(db1, db2);
  //console.log(db1 === db2);

  // Facade Pattern ----------
  //Building an API Facade

  // ---- FACADE ---- //
  const facade = {
    get: function(url, params) {
      return axios({
        url,
        params,
        method: 'GET'
      }).then(res => res.data);
    }
  }
  // ---- FACADE ---- //

  function getUsers() {
    return facade.get('https://jsonplaceholder.typicode.com/users');
  }

  function getUserById(id) {
    return facade.get('https://jsonplaceholder.typicode.com/users', {id});
  }

  async function test() {
    const users = await getUsers();
    console.log(users);

    const user1 = await getUserById(1)
    console.log(user1);
  }

  test();

  // Strategy Pattern ----------
  // Building a Ticketing Strategy

  return (
    <div className="App">
      <h1>Design Patterns in JavaScript</h1>
    </div>
  );
}
