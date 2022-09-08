const odj = [
    {
        'name' : 'Serg',
        'level' : 'hacer'
    },
    {
        'name' : 'Ivan',
        'level' : 'lamer'
    },
    {
        'name' : 'Peth',
        'level' : 'doomer'
    },
    {
        'name' : 'Vas',
        'level' : 'hacer'
    }
];

//ЕСть ли в массиве обект ...
let res = odj.some(item => {
    return (item.level === 'doomer');
});

console.log(res);

//Flag
let flag = false;
odj.forEach(element => {
    if(element.level === 'doomer'){
        flag = true;
    }
});
console.log('Flag = '+ flag);

//Каждый ли обект ...
let res2 = odj.every(item => {
    return (item.level === 'hacer');
});

console.log(res2);

//Возвращает первый встреченный элемент
let res3 = odj.find(item => {
    return (item.level === 'hacer');
});

console.log(res3);