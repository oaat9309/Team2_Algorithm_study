// 백준 1546 평균

const fs = require('fs');
const input = fs.readFileSync("input.txt").toString().trim().split("\n");

const n = input[0];
const scores = input[1].split(' ').map((x => parseInt(x, 10)));

const max = Math.max(...scores);
const newScores = scores.map(x => { return x/max*100; }) // 조작 점수

let sum = 0;

for (let i=0; i<n; i++) {
  sum += newScores[i];
}

console.log(sum/n);