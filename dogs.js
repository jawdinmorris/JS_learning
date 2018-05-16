const dog = {
  init: function(name) {
    this.name = name
  },
  speak: function() {
    console.log(`Woof my name is ${this.name}`);
  }
}

const jordan = Object.create(dog);
jordan.init('Jordan');
jordan.speak();


function Dog(name, location) {
  this.name = name;
  this.location = location;
}

Dog.prototype.speak = function() {
  console.log(`Woof my name is ${this.name}`);
  console.log(`Woof my location is ${this.location}`);
}

Dog.prototype.setLocation = function(location) {
  this.location = location;
}

jack = new Dog("Jack", "Brisbane");
console.log(jack);


class Cat {
  constructor(name, location) {
    this.name = name;
    this.location = location;
  }
  speak() {
    console.log(`Woof my name is ${this.name}`);
    console.log(`Woof my location is ${this.location}`);
  }
  setLocation(location) {
    this.location = location;
  }
}

bean = new Cat("Bean", "Brisbane");
console.log(bean);
