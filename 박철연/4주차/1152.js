let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString();

let Arr = input.trim().split(" ");
let count = 0;

for (let i = 0; i < Arr.length; i++) {
  if (Arr[i] !== "") {
    count++;
  }
}

console.log(count);
