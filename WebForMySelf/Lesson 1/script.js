let carName = 'Ford'
let carYear = 2010
let personYear = 1986

function calculateAge(year) {
    let currentYear = 2020
    let result = currentYear - year
    return result
}

function checkAngLogAge(year, name, compareTo) {
    if (calculateAge(year) < compareTo) {
        console.log('Возраст ' + name + ' меньше ' + compareTo + ' лет')
    } else {
        console.log('Возраст ' + name + ' больше ' + compareTo + ' лет')
    }
}

checkAngLogAge(carYear, 'авто', 100)


let num = 8 / 3
console.log(+(8 / 3).toFixed(2))
console.log(parseFloat(num.toFixed(2)));


let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'hello']

for (let i = 0; i <= arr.length; i++) {
    if (arr[i] % 2 === 0) {
        console.log(arr[i]);
    } else if (typeof arr[i] === 'string') {
        console.log(arr[i]);
    }

}

// DOM

let ul = document.querySelector('ul:nth-of-type(1n)') // 1-st <ul>
console.log(ul);

let div = document.querySelector('div')

div.innerHTML = '<h1 style="color:red;  ">JavaScript</h1>'
console.log(div.innerHTML);

let a = document.querySelector('a')
    // a.innerHTML = '<a href="https://www.google.com" target=_blank title="click me!">Google</a>'
console.log(a.getAttribute('title'));

a.setAttribute('title', 'test')
console.log(a);

a.setAttribute('target', '_blank')
a.setAttribute('href', 'http://www.yandex.ru')
a.textContent = 'Yandex'

// event.stopPropagation() - не сработает по всплытию на следующем элементе
// event.stopImmediatePropagation() - не сработает даже на самом обработчике