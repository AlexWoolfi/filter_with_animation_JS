const decimalValue = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
const romeValue = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];

const rome = {'M':1000, 'CM':900, 'D':500, 'CD':400, 'C':100, 'XC':90, 'L':50, 'XL':40, 'X':10, 'IX':9, 'V':5, 'IV':4, 'I':1};


function romanConventerOne(a) {
    let res = '';
    decimalValue.map( (item, index) => {
        while(item <= a) {
            res += romeValue[index];
            a = a - item;
            console.table({
                "a" : a + item,
                "item" : item,
                "a = a - item" : a,
                "result" : res

            });
            // debugger;
        }
    });

    return res;

}

function romanConventerTwo(a) {
    let res = '';
    for (let key in rome) {
        while(rome[key] <= a) {
            res += key;
            a = a - rome[key];
            // console.table({
            //     "a" : a + item,
            //     "item" : item,
            //     "a = a - item" : a,
            //     "result" : res

            // });
            // debugger;
        }
    }
    return res;
}

// document.querySelector('button').onclick = () => {
//     let num = +document.querySelector('input').value;
//     document.querySelector('.out').innerHTML = romanConventerOne(num);
// }

document.querySelector('button').onclick = () => {
    let num = +document.querySelector('input').value;
    document.querySelector('.out').innerHTML = romanConventerTwo(num);
}