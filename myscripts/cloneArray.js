let a = [1,2,3,[6,7]];
// let b = a;
//КЛОНИРОВАНИЕ не работает с вложенными массивами, вложенные остаются по ссылке
//----------------------------------------------------------
//Оператор spred склонировали массив,

//let b = [...a]; 

// let b = [];
// for(let i; i<a.length; i++) {
//     b[i] = a[i];
// }

// let b = a.map(x => x);
//    let b = a.filter(()=>true); 

// let b = a.reduce((c,el) => {
//     c.push(el);
//     return c;
// },[]);

// let b = a.slice();

// let b = a.concat([]);

// let b = Array.from(a);
//-------------------------------------------------------------------------

//С ВЛОЖЕННЫМИ
//----------------------------------------------------------
// Руссурсо емко и ломает объекты, превращая их в строку
// let b = JSON.parse(JSON.stringify(a));


a.push('test');
a[3].push(999);

console.log(a);
console.log(b);