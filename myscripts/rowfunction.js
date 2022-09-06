// function one1() {
//     return 1;
// }

// let one2 = ()=> 1;
//********************************* */

// function t() {
//     console.log(1);
//     console.log(2);
//     console.log(3);
// }
// t();

// let count = 0;
// document.querySelector('#test')
// .addEventListener('click',()=> {
// setTimeout(()=> {
//     debugger; //вместо брейкпоинт
//     count++;
//     console.log(count);
// },1000)
// });

// function a(n) {
//     if(n >= 0) return n;
//     else return 0;
// }
// console.log(a(-3));
// console.log(a(4));

// const b = (n)=> (n >= 0 ? n : 0);
// console.log(b(-3));
// console.log(b(4));

// const c = [1,2,3];
// let e = c.map(item => ({'num' : item*2}));
// console.log(e);

// document.querySelector('#test').addEventListener
// ('click', ()=> {
//     fetch('test.json')
//     .then(res => res.json())
//     .then(file =>  {
//                file.forEach(element => {
//                 console.log(element.name);
//                })
//     })
// });

document.querySelector('#test').addEventListener
('click', ()=> {
    fetch('https://sandbox.api.maps.yandex.net/examples/ru/2.1/object_manager/data.json')
    .then(res => res.json())
    .then(file => file.features.forEach(element => {
        console.log(element.geometry);
    }))

   
});