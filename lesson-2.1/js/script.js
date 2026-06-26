const arr = ['a', 'b', 'c'];

arr[10] = '3456';

console.log(arr);
console.log(arr[10]);

const arrObj = {
    0: 'a',
    '1': 'b',
    2: 'c',
    abc: {
        df: [{}, {}, {}],
        def: {

        }
    }
};

const d = 'd';

// arrObj.d = '8';
arrObj['d'] = '8';

console.log(arrObj['d']);
console.log(arrObj.d);

// const obj = {
//     a: 1,
//     b: 2
// };

// console.log(obj.b)

const obj = {
    Maksym: 500,
    John: 800
};