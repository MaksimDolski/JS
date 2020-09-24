let $start = document.querySelector('#start');
let $game = document.querySelector('#game')
let $time = document.querySelector('#time')
let btn = document.querySelector('.btn')
let $timeHeader = document.querySelector('#time-header')
let $resultHeader = document.querySelector('#result-header')
let $result = document.querySelector('#result')
let $gameTime = document.querySelector('#game-time')

function show($el) {
    $el.classList.remove('hide')
}

function hide($el) {
    $el.classList.add('hide')
}


let isGameStarted = false

let score = 0

$start.addEventListener('click', startGame)
$game.addEventListener('click', handleBoxClick)
$gameTime.addEventListener('input', setGameTime)


function startGame() {
    setGameTime()
    score = 0
    $gameTime.setAttribute('disabled', 'true')
    $timeHeader.style.display = 'block'
    hide($resultHeader)
    isGameStarted = true
    hide(btn)
    $game.style.backgroundColor = "white"

    let interval = setInterval(function() {
        let time = parseFloat($time.textContent) // $time.textContent - текст, который прописан в span, это строковое значение, поэтому парсим строчку с плавующей точкой
        if (time <= 0) {
            clearInterval(interval)
            endGame()
        } else {
            $time.textContent = (time - 0.1).toFixed(1) // 0.1 - это 100 мс, toFixed(1) - возвращает одну цифру после запятой
        }
    }, 100)

    renderBox()
}

function setGameTime() {
    let time = +$gameTime.value // '+' = 'parseInt' - приводим к числу
    $time.textContent = time.toFixed(1)
}

function setGameScore() {
    $result.textContent = score.toString()
}

function endGame() {
    isGameStarted = false
    setGameScore()
    $gameTime.removeAttribute('disabled')
    show(btn)
    $game.innerHTML = ''
    $game.style.backgroundColor = 'lightgray'
    $timeHeader.style.display = 'none'
    $resultHeader.classList.remove('hide')
}

function renderBox() {
    $game.innerHTML = '' // удаляем все div после каждого клика на него
    let box = document.createElement('div')
    let boxSize = getRandom(20, 60)
    let gameSize = $game.getBoundingClientRect()
    let maxTop = gameSize.height - boxSize
    let maxLeft = gameSize.width - boxSize
    box.style.height = box.style.width = boxSize + 'px'
    box.style.position = 'absolute'
    box.style.top = getRandom(0, maxTop) + 'px'
    box.style.left = getRandom(0, maxLeft) + 'px'
    box.style.backgroundColor = randomColor()
    box.style.cursor = 'pointer'
    box.setAttribute('data-box', 'true')

    $game.insertAdjacentElement('afterbegin', box) // добавляет div box в game

}

function handleBoxClick(event) {
    if (!isGameStarted) { // false
        return
    }

    if (event.target.dataset.box) { // в DOM будет уже не data-box, а просто box. идёт проверка на привязку 'data-'
        score++
        renderBox()
    }
}

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min) + min)
}

function randomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * letters.length)];
    }
    return color;
}