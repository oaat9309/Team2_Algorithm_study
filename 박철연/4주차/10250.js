const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const T = parseInt(input.shift()); // Case 수

for (let i = 0; i < T; i++) {
  const HWN = input[i].split(" ");
  let H = parseInt(HWN.shift()); // 층
  HWN.shift(); // 가운데 요소는 제거해준다.
  let N = parseInt(HWN.shift()); // N번째 손님

  const floor = N % H === 0 ? H : N % H;
  const roomNum = parseInt.isInteger(N / H) ? N / H : Math.ceil(N / H);
}
