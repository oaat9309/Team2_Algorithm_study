// 백준 2775번 부녀회장이 될테야
// 3층 ...
// 2층 [1] [4] [10] [20] [35]
// 1층 [1] [3] [6] [10] [15]
// 0층 [1] [2] [3] [4] [5]
// k층 n호 = k층 n-1호 + k-1층 n호

const fs = require('fs');
const input = fs.readFileSync("input.txt").toString().trim().split("\n");
const testNum = parseInt(input.shift(), 10);

for (let i=0; i<testNum; i++) {
  let k = parseInt(input.shift(), 10);
  let n = parseInt(input.shift(), 10);
  let result = Array.from(Array(k+1), ()=> Array(n).fill(0));

  // 0층
  for (let a=0; a<n; a++) {
    result[0][a] = a+1;
  }
  for (let a=1; a<k+1; a++) {
    for (let b=0; b<n; b++) {
      if (b===0) {
        result[a][b] = 1;
      } else {
        result[a][b] = (result[a][b-1] + result[a-1][b]);
      }
    }
  }

  console.log(result[k][n-1]);
}