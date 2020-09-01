// Arrays

var a = ["A", "B"];
a[2] = "C";
console.log(a);

// obect in array
var b = ["A", "B", {
  name: "John"
}];
b[6] = 25;
console.log(b); //  ["A", "B", {…}, empty × 3, 25]
length: 7(0, 1, 2, 3, 4, 5, 6 total 7 items)

// значения массива передаются не по ссылке, а по значению
// но значение можно скопировать

let array = [1, 2, 3, 4, 5];
let newArray = array;

array[1] = 777;
console.log(array); // [1, 777, 3, 4, 5]
console.log(newArray); // [1, 777, 3, 4, 5]

// Methoods

// push();
var c = [1, 2, 3, 4, 5];
c.push("6", "7");
console.log(c);

// push(); + for loop:
var array = [];
for (let i = 0; i <= 10; i++) {
  array.push("new index is " + i);
}
console.log(array);

//pop(); - del last item
var array = [1, 2, 3, 4, 5];
var del = array.pop();
console.log(del); // 5
console.log(array); // 1,2,3,4 

// unshift(); + 1 (or more) first
var array = [1, 2, 3, 4, 5];
var value = array.unshift(0, "hi");
console.log(array); // [0, "hi", 1, 2, 3, 4, 5]

// shift(); del 1-st elem
var array = [1, 2, 3, 4, 5, 6];
var value = array.shift();
console.log(array); //  [2, 3, 4, 5, 6]

// join(); array to string 
var array = [1, 2, 3, 4, 5, 6];
var result = array.join("-");
console.log(result); // 1-2-3-4-5-6

//split(); string to array
var array = "1, 2, 3, 4, 5, 6";
var result = array.split();
console.log(result);


// slice(); 
let array = ["Paul", "John", "Bill", "Joe", "Mark"];
let value = array.slice(0, 3);
console.log(value); // ["Paul", "John", "Bill"]

splice();
let array = [1, 2, 3, 4, 5, 6, 7, 8];
let result = array.splice(1, 1); // [2]
console.log(result);

reverse();
let array = [1, 2, 3, 4, 5];
let result = array.reverse();
console.log(result); // [5, 4, 3, 2, 1]

concat();
let array = [1, 2, 3, 4, 5, 6, 7];
let result = array.concat(8, 9, 10);
console.log(result); // 1,2,3,4,5,6,7,8,10

indexOf();
lastIndexOf();
let array = ["one", "one", "two", "three", "four"];
let indexOf = array.indexOf("one");
let lastIndexOf = array.lastIndexOf("one");
console.log(indexOf); // 0
console.log(lastIndexOf); // 1

// Spread
// Конкатенация
let array = ["Angular"];
let newArray = ["React", ...array, "Vue"];
console.log(newArray); // ["React", "Angular", "Vue"]

// Копирование
let array = ["React", "Angular", "Vue"];
let newArray = [...array];
console.log(newArray); // ["React", "Angular", "Vue"]

// деструктуризация массива
let array = ["one", "two", "three"];
let [numOne, numTwo, numThree] = array;
console.log(numOne); // one
console.log(numTwo); // two
console.log(numThree); // three

// example
let one, two, array;
[one, two] = [1, 2];
console.log(one); // 1
console.log(two); // 2

// example
[one, two, ...numbers] = [1, 2, 3, 4, 5];
console.log(one); // 1
console.log(two); // 2
console.log(numbers); // 3, 4, 5