let person = {
    name: 'Max',
    age: 32,
    job: 'Front-End'
}

// вывод ключей объекта
for (let key in person) {
    if (person.hasOwnProperty(key)) {
        console.log(key, person[key])
    }
}

// более современный метод
let keys = Object.keys(person)
console.log(keys)

// или
Object.keys(person).forEach(function(key) { // этот метод не идёт по __proto__
    console.log(person[key])
})