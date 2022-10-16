// const odj = [
//     {
//         'name' : 'Serg',
//         'level' : 'hacer'
//     },
//     {
//         'name' : 'Ivan',
//         'level' : 'lamer'
//     },
//     {
//         'name' : 'Peth',
//         'level' : 'doomer'
//     },
//     {
//         'name' : 'Vas',
//         'level' : 'hacer'
//     }
// ];

// //ЕСть ли в массиве обект ...
// let res = odj.some(item => {
//     return (item.level === 'doomer');
// });

// console.log(res);

// //Flag
// let flag = false;
// odj.forEach(element => {
//     if(element.level === 'doomer'){
//         flag = true;
//     }
// });
// console.log('Flag = '+ flag);

// //Каждый ли обект ...
// let res2 = odj.every(item => {
//     return (item.level === 'hacer');
// });

// console.log(res2);

// //Возвращает первый встреченный элемент
// let res3 = odj.find(item => {
//     return (item.level === 'hacer');
// });

// console.log(res3);


// // SHIFT - удвляет первый элемент мессива и возвращает его значение
// let a = [3,4,5];

// let b = a.shift();
// console.log(b);
// console.log(a);


// // UNSHIFT - добавляет значение из параметров в первый элемент мессива и возвращает его длину
// let a = [3,4,5];

// let b = a.unshift(22);
// console.log(b);
// console.log(a);

// //SlICE - создает новый массив, копируя последовательно исходный начиная с позиции из параметра
// //может принимать второй параметр до которого, не включая. Работает со строками
// let a = [3,4,5,6,7,8,9];

// let b = a.slice(3,5);
// console.log(a);
// console.log(b);

//CONCAT - Объединяет два масиива, возвращает новый массив

// const a1 = [21,22,23,24];
// const a2 = [31,32,33,34];
// const a3 = [48,58,68];

// const b = a1.concat(a2);
// const c = a1.concat(a2,a3);
// console.log(b);
// console.log(c);

// let d = "Hello";
// let v = "hi";
// let t = d.concat(v);
// console.log(t);

//SPLICE - удаляет изменяет содержимое массива и меняет исходный массив
//1 - параметр, указываем позицию в массиве.
//2 - параметр, сколько всего должно быть удалено, включая элемент с указанной позиции
//3 - необязательный параметр, заменяет данные на первой позиции и удаляет вторую
// let x = [33,44,55,66,77,88];
// console.log(x);
// x.splice(2,2,555);
// console.log(x);
