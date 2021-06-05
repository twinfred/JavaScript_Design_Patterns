function Subject() {
  this.observers = [];
}

Subject.prototype = {
  subscribe: function(observer) {
    this.observers.push(observer);

    return this;
  },

  unsubscribe: function(observer) {
    const indexOfObserver = this.observers.indexOf(observer);
    if (indexOfObserver > -1) {
      this.observers.splice(indexOfObserver, 1);
    }

    return this;
  },

  notifyObserver: function(observer) {
    const indexOfObserver = this.observers.indexOf(observer);
    if (indexOfObserver > -1) {
      this.observers[indexOfObserver].notify();
    }

    return this;
  },

  notifyAllObservers: function() {
    this.observers.forEach(observer => {
      observer.notify();
    });

    return this;
  }
}

function Observer(name) {
  this.name = name;
}

Observer.prototype = {
  notify: function() {
    console.log(`Observer ${this.name} has been notified`);
  }
};

const subject = new Subject();

const observer1 = new Observer('user001');
const observer2 = new Observer('user002');
const observer3 = new Observer('user003');
const observer4 = new Observer('user004');
const observer5 = new Observer('user005');

subject.subscribe(observer1).subscribe(observer2).subscribe(observer3).subscribe(observer4).subscribe(observer5);
subject.notifyObserver(observer4);
subject.unsubscribe(observer4);
subject.notifyAllObservers();