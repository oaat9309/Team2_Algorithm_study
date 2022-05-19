// 2798 js

const fs = require('fs');
const input = fs.readFileSync("input.txt").toString().trim().split("\n");

const nm = input[0].split(' ');
let cards = input[1].split(' ');
cards = cards.map(x => parseInt(x));

const n = nm[0];
const m = nm[1];

let temp = 0;
let result = 0;

for(let i=0; i < n; i++){
  for(let j=i+1; j < n; j++) {
    for(let k=j+1; k < n; k++) {
      temp =  cards[i] + cards[j] + cards[k];
      if (temp <= m && temp > result) {
          result = temp
      }
    }
  }
}

console.log(result);
