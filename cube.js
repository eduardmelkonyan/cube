// Imagine a war situation. Comrade-in-arms should explain other actions to their friends.
// They must send encrypted text so that the enemy does not understand․
const message = "Attack right now!";
let newCodedMessage = message.split("");
const cube = Math.ceil(message.length / 8);
const codedMessage = [];

// This function creates the appropriate number of cubes and placing each symbol in the corners of the cube
function devideIntoCubes(arr) {
  while (arr.length) {
    codedMessage.push(arr.splice(0, 8));
  }
  return codedMessage;
}

// Then we call these functions up, down, to the right, to the left to turn the corresponding cube.

function up(codedMessage, i) {
  let tmp = codedMessage[i][0];
  let tmp1 = codedMessage[i][1];
  let tmp2 = codedMessage[i][2];
  let tmp3 = codedMessage[i][6];
  codedMessage[i][0] = codedMessage[i][4];
  codedMessage[i][1] = tmp;
  codedMessage[i][2] = codedMessage[i][3];
  codedMessage[i][3] = codedMessage[i][7];
  codedMessage[i][4] = codedMessage[i][5];
  codedMessage[i][5] = tmp1;
  codedMessage[i][6] = tmp2;
  codedMessage[i][7] = tmp3;
  return codedMessage;
}

function right(codedMessage, i) {
  let tmp = codedMessage[i][0];
  let tmp1 = codedMessage[i][4];
  codedMessage[i][0] = codedMessage[i][1];
  codedMessage[i][1] = codedMessage[i][2];
  codedMessage[i][2] = codedMessage[i][3];
  codedMessage[i][3] = tmp;
  codedMessage[i][4] = codedMessage[i][5];
  codedMessage[i][5] = codedMessage[i][6];
  codedMessage[i][6] = codedMessage[i][7];
  codedMessage[i][7] = tmp1;
  return codedMessage;
}

function left(codedMessage, i) {
  let tmp = codedMessage[i][0];
  let tmp1 = codedMessage[i][2];
  let tmp2 = codedMessage[i][4];
  let tmp3 = codedMessage[i][5];
  let tmp4 = codedMessage[i][6];
  let tmp5 = codedMessage[i][1];
  codedMessage[i][0] = codedMessage[i][3];
  codedMessage[i][1] = tmp;
  codedMessage[i][2] = tmp5;
  codedMessage[i][3] = tmp1;
  codedMessage[i][4] = codedMessage[i][7];
  codedMessage[i][5] = tmp2;
  codedMessage[i][6] = tmp3;
  codedMessage[i][7] = tmp4;
  return codedMessage;
}

function down(codedMessage, i) {
  let tmp = codedMessage[i][0];
  let tmp1 = codedMessage[i][2];
  let tmp2 = codedMessage[i][3];
  let tmp3 = codedMessage[i][4];
  codedMessage[i][0] = codedMessage[i][1];
  codedMessage[i][1] = codedMessage[i][5];
  codedMessage[i][2] = codedMessage[i][6];
  codedMessage[i][3] = tmp1;
  codedMessage[i][4] = tmp;
  codedMessage[i][5] = tmp3;
  codedMessage[i][6] = codedMessage[i][7];
  codedMessage[i][7] = tmp2;
  return codedMessage;
}

devideIntoCubes(newCodedMessage);
down(codedMessage, 0);
left(codedMessage, 1);
right(codedMessage, 2);
console.log(codedMessage);
