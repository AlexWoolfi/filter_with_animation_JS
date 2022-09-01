// document.querySelector('button').onclick = myClick;
// document.querySelector('button').addEventListener('click', myClick);
// console.log("TEST");


// function myClick() {
//     // console.log("work")
//     let a = document.querySelector('.I1').value;
//     // console.log(a);
   
//     document.querySelector('.out').innerHTML = a;
// }

// function a1() {
//     console.log("IS work a1");
//     f2();
// }

// function f2() {
//     console.log("Tye function f2")
//     console.trace();
// }

// a1();

// const c = {
//     one: 1,
//     two: 2,
//     3: "hello"
// }
// console.table(c);

// console.group("tsak1");
// console.warn("work");
// console.log("IS work a1");
// console.log("Tye function f2");
// console.groupEnd();

// let p = document.querySelector('p');
// let div = document.querySelectorAll('div');
// console.log(div);
// console.log(p);
// console.dir(p);
// console.log(one1);
// console.dir(one1);

// console.log(document.myForm);
// console.log(window.myForm);
// console.dir("---------------------------------");
// console.dir(myForm);
// console.dir(document.myForm);

// let a = [1,1,0,0];
// let sum = 0;

// for(i=0; i<a.length; i++) {
//     sum +=a[i];
// }
// console.log(sum);

//prev - вычисляемое значение
// По умолчанию prev = 0-му элементу, 

// let b = a.reduce( function(prev,item,index) {
//     return prev + item;
// });
// sum = b;
// //если нужно указать старт значение элемента, указываем вторым параметром
// let b1 = a.reduce( (prev,item,index) => {
//     return prev + item;
// },5);
// sum = b;
// console.log(b);
// console.log(b1);

// a = [1,22,3,4];
// let max=a[0];
// for(i=0; i<a.length; i++) {
//   if(a[i] > max){
//     max = a[i];
//   }
// }
// console.log(max);

// let c = a.reduce((prev,item) => {
//     if(prev < item){
//         return item;
//     }else {
//         return prev;
//     }
// })
// console.log("C = " + c);

//Вычисляем индекс
// a = [1,22,3,4];
// let d = a.reduce((prev, item, index) => {
//     if(item > prev[1]) {
//         return [index, item];
//     }else {
//         return prev
//     }

// }, [0,a[0]]);

// console.log(d);

//Удаляем повторения
const data = [[1,2,3],[3,4,5],[5,6,7]]

const flat = data.reduce((prev,item) => {
   return prev.concat(item);
 }, []);
console.log(flat);

const midle = (flat) => {
    return flat.filter((el,index) =>
        flat.indexOf(el) === index
    );
}

console.log(midle(flat));
