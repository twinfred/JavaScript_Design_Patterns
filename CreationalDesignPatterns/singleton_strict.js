const Database = (function () {
  let instance;

  function createDatabaseInstance() {
    return new Object('Database Instance');
  }

  function getDatabaseInstance() {
    if (!instance) {
      instance = createDatabaseInstance();
    }

    return instance;
  }

  return { getDatabaseInstance }
})();

const databaseInstance1 = Database.getDatabaseInstance();
const databaseInstance2 = Database.getDatabaseInstance();

console.log(databaseInstance1 === databaseInstance2);