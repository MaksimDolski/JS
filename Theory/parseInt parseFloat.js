// Глобальные функции
// - isNan, isFinite 
// - parseInt, parseFloat 
// - encodeURI, encodeURIComponent 
// - decoreURI, decoreURIComponent

isNan(NaN); // true
isNan("NaN"); //true
Number.isNan("Nan"); // false проверят значение по типу, более строгое значение чем isNan

isNaN(true); // false
isNaN(null); // false
isNan(10); // false

isFinite(); // является ли значение конечным числом
Number.isFinite(444) - // true
  isFinite("0") // true
Number.isFinite("0") // false

parseInt(); // преобразовывает строку в число, выводит первое число которое видит
parseInt("10px", 10); // 10
parseInt("15 * 3", 10); // 15
parseInt("1.3", 10); // 1
parseInt("my17px"); // Nan  

parseFloat() - // преобразовывает строку в число
  parseFloat("3.14") // 3.14
parseInt("3.14") // 3

encodeURI(); // кодирует код и корректно отображается. 
// не кодирует символы: ; , / ? : @ & = + $ #
encodeURI("google.com/result with blablabla"); // google.com/result%with blablabla

encodeURIComponent() // кодирует всё ; , / ? : @ & = + $ # 