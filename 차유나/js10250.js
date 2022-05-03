const fs = require("fs");
// split 조절
const input = fs.readFileSync("dev/stdin").toString().trim().split("\n");

// 문제 풀이
const n = +input[0];

for (let i = 1; i <= n; i++) {
  const hwn = input[i].split(" ");
  const h = +hwn[0];
  const w = +hwn[1];
  const n = +hwn[2];

  let first = n % h;
  first = first === 0 ? h : first;

  let last = Math.ceil(n / h);
  last = last < 10 ? "0" + last : last;

  console.log(`${first}${last}`);
}