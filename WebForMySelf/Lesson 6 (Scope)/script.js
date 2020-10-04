// Замыкание - scope

let createCounter = function(counterName) {
    let counter = 0

    return function() {
        console.log(counterName, ++counter)
    }
}

let counterA = createCounter('CounterA')
let counterB = createCounter('CounterB')

// 2-en variant
let createCounter = function() {
    let counter = 0
    return {
        increment: function() {
            counter++
        },
        decrement: function() {
            counter--
        },
        getCounter: function() {
            return counter
        }
    }
}

let counterA = createCounter('CounterA')
let counterB = createCounter('CounterB')

counterA.increment()
counterA.increment()
counterA.increment()
counterA.increment()
counterA.increment()

counterB.decrement()
counterB.decrement()