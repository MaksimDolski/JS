// let p = document.querySelectorAll('p')

// for (let i = 0; i < p.length; i++) {
//     p[i].addEventListener('click', function(event) {
//         event.target.style.color = 'blue'
//         console.log(event);
//     })
// }

document.getElementById('wrapper').addEventListener('click', function(event) {
    let tagName = event.target.tagName.toLowerCase()

    if (tagName === 'p') {
        event.target.style.color = 'blue';
    }

    if (event.target.classList.contains('color')) {
        event.target.style.color = 'red'
    }
})

// Arrays
let array = [
    { name: 'Max', age: 32 },
    { name: 'Mia', age: 2 },
    { name: 'Julia', age: 29 }
]

let foundPerson = array.find(function(person) {
    return person.age === 32
})
console.log(foundPerson); // Max

let = foundPerson2 = array.filter(function(person) {
    return person.age > 18
})
console.log(foundPerson2);

let date = new Date()