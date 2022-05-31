const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");


const numbers = input[0].split(" ").map(idx => +idx);


const a = numbers[0];
const b = numbers[1];
const c = numbers[2];


result(a, b, c)


function result(a, b, c) {
  let result = 0;
  if (a === b && b === c) {
    result = 10000 + a * 1000;
  } else if (a === b) {
    result = 1000 + a * 100;
  } else if (b === c) {
    result = 1000 + b * 100;
  } else if (c === a) {
    result = 1000 + c * 100;
  } else {
    if (a > b && a > c) {
      result = a * 100;
    } else if (b > a && b > c) {
      result = b * 100;
    } else {
      result = c * 100;
    }
  }
  console.log(result);
}