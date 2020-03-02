// Scope - область видимости:
// Global Scope - глобальная - переменная вне функции;
// Local Scope -  локальная - переменная внутри функции;

var language = "Java Script";
console.log(language);

function show() {
  console.log(language);
}
show();

// контекст context this
var object = {
  language: "Java Script",
  returnLanguage: function () {
    console.log(this.language);
  }
};

object.returnLanguage();

function outer(param) {
  var a = param;

  function nested() {
    console.log(a);
  }
  nested();
}

outer(5);

// new
function grandfather() {
  var name = "John";
  // likes не доступно здесь

  function parent() {
    // name доступно здесь
    // likes не доступно здесь

    function child() {
      // name доступно здесь
      var likes = "JavaScript";
    }
  }
}

// Closure (замыкание)
// это механизм, который позволяет внутренней функции получить доступ к величинам внешней функции (к переменным и агрументам)

function greet(greeting) {
  var name = "John";

  function run() {
    console.log(greeting + " " + name);
  }
  run();
}
greet("Hi");

// ex2
function greet() {
  var name = "John";

  // когда мы что-то вызываем, это нужно обязательно куда-то положить
  return function () {
    console.log("Hi " + name + "!");
  }
}
var result = greet();
result();