//Map - если нам нужно перебрать массив и 
//к каждому элементу применить какое то действие. Создает новый массив
const a = [3,4,5];
// const a = [];
// a[0] = 5;
// a[4] = 6;

// let b = a.map( item => {
//     console.log(item);
//     return item*3;
// });

// let b = a.map( (item,index) => {
//     console.log(index);
//     return index;
// });

// console.log(b);
const temp = [0,4,4,6,8,10,6,4,3,-1,-2,-2];//C
//F= C*1.8 + 32



// let tF = temp.map(item => {
//    console.log(item);
//    return item*1.8 + 10;
// });
// console.log(tF);


const z = [
    {'name': " Ivan", 'order': 12, 'sum': "123,5"},
    {'name': " Sergey     ", 'order': 12, 'sum': "123.5"},
    {'name': "matilda  ", 'order': 12, 'sum': "123,5"},
    {'name': " Ivanov Petr", 'order': 12, 'sum': "123,5"}
];

const zBack = z.map(item => {
    item.name = item.name.trim().toLowerCase();
    return item;
});

console.log(zBack);





//Filter возвращает массив, и элемент от исходного массива, если результат true

// const b = [3,4,5,6,8,143,45];

// let c = b.filter(item => {
//     if(item > 7) {
//         // return item;//true
//         return true;
//     }
// });

// console.log(c);
