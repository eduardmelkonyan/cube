const str = 'henc hima hardzakvel';
let newArray = str.split('');
const cub = Math.ceil(str.length/8);

function foo (arr) {
    const array = [];
    while(arr.length) {
        array.push(arr.splice(0,8));
    }
    return array;
}

console.log(foo(newArray));