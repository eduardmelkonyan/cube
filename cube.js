// Imagine a war situation. Comrade-in-arms should explain other actions to their friends. 
// They must send encrypted text so that the enemy does not understand․
const str = 'Attack right now!';
let newArray = str.split('');
const cub = Math.ceil(str.length/8);
const array = [];

// This function creates the appropriate number of cubes and placing each symbol in the corners of the cube
function devideIntoCubes(arr) {
   while(arr.length) {
        array.push(arr.splice(0,8));
    }
    return array;
}

// Then we call these functions up, down, to the right, to the left to turn the corresponding cube.

function up(array, i) {
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

function right(array, i) {
    let tmp = array[i][0];
    let tmp1 = array[i][4];
    array[i][0] = array[i][1];
    array[i][1] = array[i][2];
    array[i][2] = array[i][3];
    array[i][3] = tmp;
    array[i][4] = array[i][5];
    array[i][5] = array[i][6];
    array[i][6] = array[i][7];
    array[i][7] = tmp1;
    return array;
}

function left(array, i) {
    let tmp = array[i][0];
    let tmp1 = array[i][2];
    let tmp2 = array[i][4];
    let tmp3 = array[i][5];
    let tmp4 = array[i][6];
    let tmp5 = array[i][1];
    array[i][0] = array[i][3];
    array[i][1] = tmp;
    array[i][2] = tmp5;
    array[i][3] = tmp1;
    array[i][4] = array[i][7];
    array[i][5] = tmp2;
    array[i][6] = tmp3;
    array[i][7] = tmp4;
    return array;
}

function down(array, i) {
    let tmp = array[i][0];
    let tmp1 = array[i][2];
    let tmp2 = array[i][3];
    let tmp3 = array[i][4];
    array[i][0] = array[i][1];
    array[i][1] = array[i][5];
    array[i][2] = array[i][6];
    array[i][3] = tmp1;
    array[i][4] = tmp;
    array[i][5] = tmp3;
    array[i][6] = array[i][7];
    array[i][7] = tmp2;
    return array;
}

devideIntoCubes(newArray);
down(array,0);
left(array,1);
right(array,2);
console.log(array);