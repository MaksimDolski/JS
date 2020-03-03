// inheritance - наследование
// var person = new Object();
// __proto__ - скрытые свойства 

var person = new Object({
  name: "Maxim",
  age: 20,
  weight: 60,
  greet: function () {
    console.log("Greet!");
  }
});

// add function
Object.prototype.sayHello = function () {
  console.log("Hello!");
}

// add person object data to var second
var second = Object.create(person);
second.name = "Maximus";

// Example:
// Machine - has on() and off() objects;
// TapeRecorder has pause() and __proto__ (from Machine) - on() and off();
// Recorder has pause() and __proto__ (from Machine) - on() and off();

function Machine(product) {
  this.product = product;
}

Machine.prototype.on = function () {
  console.log(`${this.product} is ON!`);
}

Machine.prototype.off = function () {
  console.log(`${this.product} is OFF!`);
}

function TapeRecorder(product) {
  this.product = product;
}

TapeRecorder.prototype = Object.create(Machine.prototype);

//Property Constructor
TapeRecorder.prototype.constructor === Machine // true
TapeRecorder.prototype.constructor === TapeRecorder // false // потому что это свойсто относится к родительскому объекту Machine

TapeRecorder.prototype.constructor = TapeRecorder; // !!!
TapeRecorder.prototype.constructor === Machine // true
TapeRecorder.prototype.constructor === TapeRecorder // true






// END