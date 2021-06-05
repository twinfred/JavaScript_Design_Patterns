function Regal() {
  this.getTicketPrice = function(quantity) {
    return quantity * 11.99;
  }
}

function AMC() {
  this.getTicketPrice = function(quantity) {
    return quantity * 10.99;
  }
}

function Cinemark() {
  this.getTicketPrice = function(quantity) {
    return quantity * 9.99;
  }
}

function TicketPrice() {
  this.theaterChain;

  this.setTheaterChain = function(chain) {
    this.theaterChain = chain;
  }

  this.calculate = function(quantity) {
    return this.theaterChain.getTicketPrice(quantity);
  }
}

const regal = new Regal();
const amc = new AMC();
const cinemark = new Cinemark();

const ticketPrice = new TicketPrice();
ticketPrice.setTheaterChain(regal);
console.log(ticketPrice.calculate(2));

ticketPrice.setTheaterChain(amc);
console.log(ticketPrice.calculate(3));

ticketPrice.setTheaterChain(cinemark);
console.log(ticketPrice.calculate(4));