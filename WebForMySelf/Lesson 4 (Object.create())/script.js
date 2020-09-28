function Car(name, year) { // созданние нового класса
    this.name = name
    this.year = year
}

Car.prototype.getAge = function() {
    return new Date().getFullYear() - this.year // создание нового объетка
}
Car.prototype.color = 'black'


let ford = new Car('Ford', 2015) // создание нового объетка
ford.color = 'red'
console.log(ford)

let bmw = new Car('BMW', 2019)
console.log(bmw)

// **************************************************************************

// глобальный объкт Object с методом .create()
let audi = Object.create({
    calculateDictancePerYear: function() {
        Object.defineProperty(this, 'distancePerYear', {
            // this - куда добавить
            // distancePerYear - название данного свойства которое хотим определить
            // какой объект хотим добавить в формате объекта 
            value: this.distance / this.age,
            enumerable: true,
            writable: false,
            configurable: false,
        })
    }
}, { // может быть один или два объкта
    name: { // ключ, который описывает свойства
        value: 'Audi',
        enumerable: true, // хотим видеть при перечислении данного объекта, теперь, эти поля будут выделены и активны и их можно свойства можно изменять
        wtitable: false, // не можем изменять имя данной машины 
        configurable: false // не хотим чтобы поля удалялись
    },
    model: {
        value: 'R8',
        enumerable: true,
        wtitable: false,
        configurable: false
    },
    year: {
        value: 2010,
        enumerable: true,
        wtitable: false,
        configurable: false
    },
    distance: {
        value: 120500,
        enumerable: true,
        wtitable: true, // можем изменять дистанцию
        configurable: false
    },
    age: {
        enumerable: true,
        get: function() { // вызывается, когдамы обращаемся к полю age
            console.log('Получаем возраст')
            return new Date().getFullYear() - this.year
        },
        set: function() {
            console.log('Устанавливаем значение')

        }
    }
})

console.log(audi)

for (let key in audi) {
    if (audi.hasOwnProperty(key)) {
        console.log(key, audi[key]) // покажет все ключи и свойтсва __proto__ - calculateDistanePerYear, чтобы не показывал - прописываем.hasOwnPtoperty()
            // audi[key] - значение
    }
}