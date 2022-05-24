// 백준 2231 분해합

const fs = require('fs');
const input = fs.readFileSync("input.txt").toString();

let result = input;

for (let i=0; i<=input; i++) {
  let seperate = String(i).split('');
  let temp = parseInt(i, 10);
  for (let j=0; j<seperate.length; j++) {
    temp += parseInt(seperate[j], 10);
  }
  if (input == temp) {
    result = i;
    break;
  }
  if (i == input) result = 0;
}

console.log(result);