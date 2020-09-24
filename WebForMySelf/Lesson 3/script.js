document.querySelector('button').addEventListener('click', function(event) {

    let value = document.querySelector('input').value

    localStorage.setItem('headerText', value)

})

document.addEventListener('DOMContentLoaded', function() {
    // DOMContentLoaded = загружается тогда, когда полностью загружается дом-дерево
    let text = localStorage.getItem('headerText')

    if (text && text.trim()) {
        // если в переменной есть текс и если мы удаляем из него все пробелы и там остаётся текст, тогда true
        document.querySelector('h1').textContent = text
    }

    document.querySelector('h1').textContent = text;

})