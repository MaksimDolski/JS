// функция конструктор обозначается с большой буквы

function Room(name, area, age) {
  this.name = name;
  this.area = area;
  this.age = age;

  this.showInfo = function () {
    console.log(`Type of room: ${this.name}, 
      area: ${this.area}, 
      age: ${this.age}`);
  }
}

var room1 = new Room("Guest", 15, 25);
room1.showInfo();

// new 
function Room2(name) {
  this.area = 12;
  this.name = name;
}

var guestRoom = new Room2("Guest");

console.log(guestRoom);

приватные или публияные свойства и методы

function Room(name, area, number) {
  var quantity = 3;
  this.name = name;
  this.area = area;
  this.number = number;

  showInfo = () => {
    return `Type of room: ${this.name}, area: ${this.area}`;
  }

  this.getFullDiscription = () => {
    var info = showInfo();
    console.log(`${info}. It's ${this.number} of ${quantity} room.`);
  }
}

const room1 = new Room("Guest", 15, "1-st");
room1.getFullDiscription();

let user = {
  firstName: "John",
  lastName: "Smith",
  getFullName: function () {
    console.log(`Full name: ${this.firstName} ${this.lastName}`);
  }
}
user.getFullName();

let user = {
  firstName: "John",
  lastName: "Smith",
  getFullName: function () {
    let self = this; // без этого не не будет работать or "that"

    setTimeout(function () {
      console.log(`Fullname: ${self.firstName} ${self.lastName}`);
    }, 2000);
  }
};

user.getFullName();






//END