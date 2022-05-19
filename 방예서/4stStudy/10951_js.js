// 백준 10951 A+B-4 js

const fs = require('fs');
const input = fs.readFileSync("input.txt").toString().trim().split("\n");

for(let i=0; i < input.length; i++) {
  let num = input[i].split(' ');

  console.log(parseInt(num[0])+parseInt(num[1]));
}
