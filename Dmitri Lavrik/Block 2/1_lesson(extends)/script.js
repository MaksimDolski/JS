class Animal {
  constructor(name, x, y) {
    this.name = name;
    this.x = x;
    this.y = y;
    this.weight = 1;
  }

  eat() {
    this.weight++;
  }

  log() {
    console.log(this.name + ' ' + this.weight);
  }
} // class Animal

class Dog extends Animal {

}

class Cat extends Animal {
  constructor(name, x, y) {
    super(name, x, y);
    this.lifes = 9;
    this.weight = 10;

  }
}

let c = new Cat('Murzik1', 12, 1);
let d = new Dog('Murzik2', 1, 1);


d.log();
console.log(c);