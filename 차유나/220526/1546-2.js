const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

const n = input[0];
const score = input[1].split(' ').map(Number);

score.sort((a, b) => b - a);

const m = score[0]; 
const newScore = score.map(score => score/m*100);

let sum = 0;
for(let i=0; i<n; i++){
    sum += newScore[i];
}
console.log(sum/n);