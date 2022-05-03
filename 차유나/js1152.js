const fs = require('fs')
const filepath = process.platform === "linux"? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filepath).toString().split("\n");

let str = input[0].split(" ");
let count = 0;


for (let i = 0; i <str.length; i++) {
  if (str[i] !== " "){
    count++
  }
  if (str[i] === ""){
    count--;
  }

}
console.log(count)