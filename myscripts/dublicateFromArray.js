// const arr = [1,2,3,4,1,5,6,1,7,2];
// console.log(arr);
// //1 Set - содержит только уникальные элементы
// let a1 = new Set(arr);// Это просто набор
// console.log(a1);

// let a2 = [...new Set(arr)];// 2 Получаем массив с спомощью spred
// console.log(a2);

// let a3 = Array.from(new Set(arr));// 3 Получаем массив 
// console.log(a3);

// // 4 Получаем массив с спомощью filtr, если нужны дубликаты то ставим !==
// let a4 = arr.filter((item, index) => {
//     return arr.indexOf(item) === index;

// });

// console.log('Filtr = ' + a4);

// let a5 = arr.filter((item, index) => {
//     return arr.indexOf(item) !== index;

// });

// console.log('Filtr = ' + a5);

// //5 reduce

// let a6 = arr.reduce( (result, item) => {
//     return result.includes(item) ? result : [...result, item];
// }, []);
// console.log('Reduce = ' + a6);

// //Находим большее значение
// let ab = [-3,4,-10,7,11,300,301];

// let re = ab.reduce((accum,item) => {
//     if(item > accum) {
//         accum = item;
//     }
//     return accum;
// });

// console.log(re);

//Создать массив из части объекта
let obj2 = [
    {'id':55, 'city': "arc"},
    {'id':75, 'city': "rca"},
    {'id':175, 'city': "bra"}

];

let res = obj2.reduce((accum,item) => {
    accum.push(item.id);
    return accum;
},[]);
console.log(res);

console.log(Array.isArray(res));



