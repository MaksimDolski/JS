// В объектно-ориентированном программировании класс – это расширяемый шаблон кода для создания объектов, который устанавливает в них начальные значения (свойства) и реализацию поведения (методы).

class Animal {
  constructor(name, weight) {
    this.name = name;
    this.weight = 1;
  }

  eat() {
    return this.weight = 177;
  }

  log() {
    return this.name + ' ' + this.weight;
  }
} // class Animal

class Dog extends Animal {
  constructor(name, weight) {
    super(name, weight);
    this.weight = 1123;
  }
}

class Cat extends Animal {
  constructor(name, weight) {
    super(name, weight);
    this.lifes = 9;
    this.weight = 12; // полиморфизм, переопределяем общее значение
  }

  log() {
    return super.log() + ' ' + this.lifes;
  }
}

let animals = [];
animals.push(new Dog('Mia'));
animals.push(new Cat('Murzik'));
animals.push(new Cat('Murzik1'));
animals.push(new Cat('Murzik2'));

for (let animal of animals) {
  console.log(animal.log());
  console.log(animal.eat());
}

// можно заменить обычной функцией-конструктор:
function User(name) {
  this.name = name;
}

User.prototype.sayHi = function () {
  console.log(this.name);
}

let user = new User('Maxim');
user.sayHi();


// можно ещё дополнительно делать инкапсуляцию: export and import classes from other classes