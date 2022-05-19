const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let length = input.length;
let count = 0;

while (length > 0) {
  let num = input[count].split(" ").map(Number);
  let sum = num[0] + num[1];
  console.log(sum);

  count++;
  length--;
}

// while(true)로 무한 루프 만든 다음, length가 0이 될때 break 해줘도 되는데 시간은 더 오래 걸릴듯
