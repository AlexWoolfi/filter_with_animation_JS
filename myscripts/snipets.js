//1 Округление
let n1 = 455.67;
console.log(Math.floor(n1));//округление в низ

console.log(~~n1);//округление в низ 
console.log(~n1);//округление в низ с отрицанием

//2 в степень
let n2 = 3;
console.log(Math.pow(n2,3));
console.log(n2**3);

//3 К числу
let n3 = '3a';
console.log(parseInt(n3));
console.log(+n3);

//4 проверка
let n4 = true;
if(n4 === true) {
    console.log('#4');
}

n4 && console.log('#4');// Работает только с true, если false && 0 не выведет


//5 К строке
let n5 = 3;
console.log(n5.toString());
console.log(`${n5}`);

//6 Вызов функции по условию
function n6_1() {
    console.log('6_1');
}

function n6_2() {
  console.log('6_2');
}

let n6 = 7;
if(n6 === 7) {
    n6_1();
}
else {
    n6_2();
}

(n6 === 7) ? n6_1() : n6_2();
(n6 === 7 ? n6_1 : n6_2)();


//7 Задаем обязательное значение по умолчанию
function f7(param) {
    if(param === undefined) {
        throw new Error('param');
    }
    return param;
}
// f7();
console.log(f7(7));
//--------------------------------------
let checkParam = () => {
    throw new Error('param');
}

let f7_1 = (param = checkParam()) => {
    return param;
}

console.log(f7_1(10));

//8 Получение символа строки

let n7 = 'sample string';

console.log(n7.charAt(4));// по символу
console.log(n7[4]);//переводим в массив и по индексу

//9 Как еще можно записывать строки

let n8 = `hello
hi
mahai
test`;

console.log(n8);


//10 Значение по дефолту
// let n9 = 34;
let n9;
let res = n9 || false;

console.log(res);


