// 백준 1152 단어의 개수 javascript

let fs = require('fs');
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync('input.txt').toString();

if (input[0] === '') {
  console.log(0);
} else {
  console.log(input.length);
}

