// https://www.youtube.com/watch?v=T5aYe8ABiIU&list=PLM7wFzahDYnGiAEISqw1Lal_T9heUvbar&index=21
//Стилизация
console.log('Hello');
//Стилизуем вывод в консоль
console.log('%c Hello', 'color: orange; background: cyan; font-weight: bold; text-transform: uppercase; padding: 10px; margin: 50px');
//Выводим все методы какие есть у какого то встроенного метода в консоль
console.log(console);

console.log(Math);

//Группируем вывод
console.group('Text');
console.log(console);
console.log(Math);
console.groupEnd();


//Методы контроля работы функций
function one() {
    console.time();
    let a = 5;
    a++;
    twoo();
    console.timeLog();
    console.timeEnd();
}

function twoo() {
    let b = 5;
    b++;
    // console.trace('function 2');
}

// one();

// Методы console.log
let obj = {
    one: 4,
    two: 5,
    hello: 'hi',
    a: a2 = {
          x:1,
          y:2 
      }
};
 console.log(a2.x);
 console.log(a2.y);
console.log(obj);
console.table(obj);

function four() {
console.count('hi');
}
four();
four();
four();
console.log(four);

console.assert(obj);// Для Node js консолей, не для браузера

console.dir(obj);//развернутый вид объекта

let container = document.querySelector('.container');
console.log(container);
console.dir(container);




