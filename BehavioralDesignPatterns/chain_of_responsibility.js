const ATM = function() {
  this.withdrawl = function(amount) {
    console.log(`Requesting to withdrawl $${amount.toFixed(2)}`);

    if (amount % 1 !== 0) {
      console.log('Sorry, this ATM can\'t dispense coins. Please request another amount.');
      return;
    }

    const dispenseOutput = {};

    // chain or responsibility function
    function get(bill) {
      dispenseOutput[bill] = Math.floor(amount / bill);
      amount -= dispenseOutput[bill] * bill;
      
      return { get };
    }

    get(100).get(50).get(20).get(10).get(5).get(1);

    this.dispense(dispenseOutput);
  };

  this.dispense = function(bills) {
    console.log('--- Dispensing cash ---')
    Object.entries(bills).forEach(([key, value]) => {
      console.log(`- Dispensing ${value} $${key} bills`);
    });
  }
};

const myATM = new ATM();

myATM.withdrawl(126.10);
myATM.withdrawl(1287);
myATM.withdrawl(879);