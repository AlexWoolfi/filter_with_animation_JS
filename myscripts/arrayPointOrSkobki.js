const a = [1,2,3];
console.log(a);
console.log(a[2]);

const b = {
    g: 8,
    l: 12,
    p: 44,
    'hello i': 444,
    t: [88,66,44]
};
let c = 'g';
console.log(b);
console.log(b.p);// Через точку
console.log(b[c]);// Через переменную, хранит имя ключа
console.log(b['l']);// Явно через имя ключа
console.log(b['hello i']);//Если имя содержит пробел
//=====================================
console.log(b.t[1]);//+ к индексу массивов
console.log(b['t'][1]);