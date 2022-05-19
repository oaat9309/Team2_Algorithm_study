// 2480 js


const fs = require('fs');
const input = fs.readFileSync("input.txt").toString().trim().split(" ");

const diceNum = input;
const maxDice = Math.max(...diceNum);

let result = 0;

function compareDice(a, b, c) {
  if (a === b && b === c && c === a) {
    result = 10000 + 1000 * a;
  } else if (a === b || b === c || c === a) {
    if (a === b) {
      result = 1000 + 100 * a;
    } else {
      result = 1000 + 100 * c;
    }
  } else {
    result = 100 * maxDice;
  }

  return result;
}

console.log(compareDice(diceNum[0], diceNum[1], diceNum[2]))
