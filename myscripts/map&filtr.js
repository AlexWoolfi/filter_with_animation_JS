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



//Filter возвращает массив, и элемент от исходного массива, если результат true

const b = [3,4,5,6,8,143,45];

let c = b.filter(item => {
    if(item > 7) {
        // return item;//true
        return true;
    }
});

console.log(c);
