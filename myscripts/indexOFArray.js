//indexOf
const a = [9,8,7,5];
const c = [9,8,7,5,7,5,2];
const b = ['Hi', 'Hello'];
// console.log(a.indexOf(7));
// console.log(b.indexOf('Hi'));

// if(a.indexOf("7") !== -1) {
//     console.log('yes');
// }
// else {
//     console.log('no');
// }
console.table(c);
// console.log(c.indexOf(8));

//Вариант 1
// function inexOfEmul(ar, item) {
//     let result = -1;
// for (let i = 0; i < c.length; i++) {
//     if(ar[i] === item) {
//         return i;
//     }
// }
// return result;
// }

// //Вариант 2
// function inexOfEmul(ar, item) {
// for (let i = 0; i < ar.length; i++) {
//     if(ar[i] === item) {
//         return i;
//     }
// }
// return -1;
// }

//Вариант 3 где есть старт с индекса
function inexOfEmul(ar, item, from = 0) {
    for (let i = from; i < ar.length; i++) {
        if(ar[i] === item) {
            return i;
        }
    }
    return -1;
    }

    console.log(inexOfEmul(c,7,3));

