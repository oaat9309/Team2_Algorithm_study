// 백준 1065번 한수

const fs = require('fs');
const input = fs.readFileSync("input.txt").toString();

function solve(n) {
  let result = 0;
  let temp = [];
  n = n.toString();

  // 세자리 수 이상일 때만 자리수 쪼개기
  // 두자리 수까지는 모두 한수이다.
  if (n.length >= 3) {
    temp = n.split('');
    const diff = temp[1] - temp[0];

    for (let i = 1; i < (temp.length-1); i++) {
      let tempDiff = temp[i+1] - temp[i];
      // 같지 않으면 바로 return
      if (!(tempDiff === diff)) return;
    }
    return temp;
  }
}

let cnt = 0;

if (input < 100) {
  cnt = input;
} else {
  cnt = 99;
  for (let i=100; i <= input; i++) {
    cnt = (solve(i) ? cnt+1 : cnt);
  }
}
console.log(cnt);
