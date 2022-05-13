// 11729

const fs = require('fs'); 
const input = fs.readFileSync("input.txt").toString().trim();

function hanoi(n, first, mid, last) {
  if (n === 1) {
    moveprint(first, last);
    return;
  }
  hanoi(n-1, first, last, mid);
  moveprint(first, last);
  hanoi(n-1, mid, first, last);
}

function moveprint(a, b) {
  console.log(a, b);
}

function hanoiCount(n) {
  if (n === 1) return 1;
  else
    return (2*hanoiCount(n-1) + 1);
}

console.log(hanoiCount(input));
hanoi(input, 1, 2, 3);

