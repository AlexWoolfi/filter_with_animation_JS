let dwane = {};
let daniel = {
    fierstName: 'Daniel'
};

let jason = {
    key: 'jason'
};

dwane[daniel] = 123;
dwane[jason] = 456;

console.log(dwane[daniel]);

dwane['daniel'] = 123;
dwane['jason'] = 456;

console.log(dwane['daniel']);

//2
const func = (function(a) {
     delete a;// Бессмысленно, так как delete только для объектов, а н едля примитив
     return a;
})(5);

console.log(func);

//3
console.log({ a: 1} == { a: 1});
console.log({ a: 1} === { a: 1});

//4

