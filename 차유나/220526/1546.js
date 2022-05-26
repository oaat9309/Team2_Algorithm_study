const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
const n = +input[0];
const arr = input[1].split(' ').map(v => +v);
 
let max = arr[0];
let sum = max;
for (let i = 1; i < n; i++) {
  sum += arr[i];
  if (max < arr[i]) max = arr[i];
}
 
console.log(sum / max * 100 / n);
