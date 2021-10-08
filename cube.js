const str = 'henc hima hardzakvel';
let newArray = str.split('');
const cub = Math.ceil(str.length/8);
const array = [];

function foo(arr) {
   while(arr.length) {
        array.push(arr.splice(0,8));
    }
    return array;
}

function up(array, i) {
    i = 0;
    let tmp = array[i][0]
    let tmp1 = array[i][1];
    let tmp2 = array[i][2];
    let tmp3 = array[i][6];
    array[i][0] = array[i][4];
    array[i][1] = tmp;
    array[i][2] = array[i][3];
    array[i][3] = array[i][7];
    array[i][4] = array[i][5];
    array[i][5] = tmp1;
    array[i][6] = tmp2;
    array[i][7] = tmp3;
    return array;
}

foo(newArray);
console.log(up(array));