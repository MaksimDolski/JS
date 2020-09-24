function Cat(name, age) {
    this.name = name;
    this.age = age;
    this.run = function() {
        console.log("1");
    }
}

let cat1 = new Cat("Mia", 2);
console.log(cat1);