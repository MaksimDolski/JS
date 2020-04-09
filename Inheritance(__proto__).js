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


// Объектно-ориентированное программирование - ООП - методология, которая позволяет преставить приложение в виде совокупности ОБЪЕКТОВ, взаимодейтсвующих друг с другом.
// 
// Такие объекты создаются с помощью конструкций - классы (classes);


// портатипное наследование
let functionality = {
  open: function () {
    console.log(`${this.room} is open.`);
  }
};

let bathRoom = {
  room: "Bath room"
};

let kitchen = {
  room: "Kitchen"
};

bathRoom.__proto__ = functionality;
kitchen.__proto__ = functionality;

bathRoom.open();
kitchen.open();


// example - using .this inheritance
function Printer(doc) {
  this.document = doc;
  this.print = function () {
    console.log(this.document);
  }
}

var newPrinter = new Printer("Test text");
newPrinter.print(); // Test text

// example - using prototype inheritance
function Printer(doc) {
  this.document = doc;
  Printer.prototype.print = function () {
    console.log(this.document);
  }
}

var newPrinter = new Printer("Test text2");
newPrinter.print();

//inheritance - наследование 

function Machine(product) {
  this.product = product;
}

Machine.prototype = {
  on: function () {
    console.log(`${this.product} is ON`);
  },
  off: function () {
    console.log(`${this.product} is OFF`);
  }
}


function TapeRecorder(product) {
  this.product = product;
}
TapeRecorder.prototype = Object.create(Machine.prototype); // наследование 
const tapeRecorder = new TapeRecorder("Tape Recorder");
tapeRecorder.on();

// new ex
function Machine(product) {
  this.product = product;
}

Machine.prototype = {
  on: function () {
    console.log(`${this.product} is ON`);
  },
  off: function () {
    console.log(`${this.product} is OFF`);
  }
}

function TapeRecorder(product) {
  this.product = product;
}

TapeRecorder.prototype = Object.create(Machine.prototype);
// TapeRecorder.constructor = TapeRecorder;

TapeRecorder.prototype = {
  on: function () {
    console.log(`${this.product} is ON, music is now playing!`);
  },
  pause: function () {
    console.log(`${this.product} on PAUSE!`);
  }
}

const tapeRecorder = new TapeRecorder("Tape Recorder");
const machine = new Machine("Machine");

machine.on();
tapeRecorder.on();

// END