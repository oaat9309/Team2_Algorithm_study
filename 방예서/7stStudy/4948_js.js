// 백준 4948 베르트랑 공준

const fs = require('fs');
const input = fs.readFileSync("input.txt").toString().trim().split("\n");

function isPrime(x) {
  let arr = Array(x+1).fill(true);
  let cnt = 0;
  
  arr[0] = false;
  arr[1] = false;

  for (let i=2; i*i<=x; i++) {
    if (arr[i]) { 
      for (let j=i*i; j<=x; j+=i) {
        arr[j] = false; // 소수가 아닌 경우
      }
    }
  } 
  // 소수는 인덱스 값이 true인 배열 arr
  for (let i=0; i<=x; i++) {
    if (arr[i]) {
      cnt++;
    }
  }
  return cnt;
}

for (let i=0; i<input.length; i++) {
  let n = Number(input[i]);
  let cnt = 0;

  // 종료문
  if (!n) break;

  console.log(isPrime(2*n)-isPrime(n));
}