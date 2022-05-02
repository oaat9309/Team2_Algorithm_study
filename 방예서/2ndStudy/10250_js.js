// 백준 10250 ACM 호텔 javascript

const fs = require('fs'); 
const [n, ...arr] = fs.readFileSync("./input.txt").toString().trim().split("\n");

let test = Number(n);
let testCase = arr.map(x => x.split(' '));

for (i=0; i<test; i++) {
  let h = testCase[i][0];
  let w = testCase[i][1];
  let n = testCase[i][2];

  let yy = n % h;
  let xx = Math.ceil(n / h);

  if (yy === 0) {
    yy = h;
    xx = n / h;
  }

  console.log((yy * 100) + xx);
}