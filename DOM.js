// DOM
// отображение документа в виде множества объектов с которыми можно взаимодействовать с помощью JavaScript

// Для парных тегов:
document.querySelector("p").innerHTML = "buy"; // перезаписали свойство внутри тега <h1>hi</h1> => "<h1>buy</h1>;
document.querySelector("p").innerText += " hi"; // дозаписали свойство, если напишем <h1>Hi</h1>, то отобразится на странице вместе с тегами
document.querySelector("p").outerHTML = "blalalala"; // перезаписывает свойства вместе с тегами - <h1>hi</h1> => "balalala"; можно поменять параграф на обзац вместе с текстом и тд


// Для парных тегов с позиционированием:
document.querySelector("div").insertAdjacentHTML("beforebegin", 2222);

// Для непарных тегов:
document.querySelector("link").href = "style2.css"; // можно поменять css файл
document.querySelector("input").value = "hello again";
document.querySelector("input").type = "date";


// END