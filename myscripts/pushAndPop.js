
// // Push added element in finish array
// let a = [99,88];
// console.log(a);
// a[a.length] = 100;
// console.log(a);
// a.push(200);
// console.log(a);
// a.push(300, 400, 500);
// console.log(a);
// // a.push(600)
// console.log(a.push(600));
// console.log(a);

// //POP - Deleted last element from array
// a.pop();
// console.log(a);
// console.log(a.pop());
// console.log(a);


let car = [];
document.querySelector('.push').onclick = () =>{
    let id = +document.querySelector('#goods').value;
    if(!car.includes(id)){
        car.push(id);
    }
    console.log(car);
}

document.querySelector('.pop').onclick = () =>{
    let id = +document.querySelector('#goods').value;
    let goods = car.pop();
    console.log('Product ' + goods + ' was deeleted');
    console.log(car);
}