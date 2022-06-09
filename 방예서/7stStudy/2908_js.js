// 백준 2908 상수 

const fs = require('fs');
const input = fs.readFileSync("input.txt").toString().trim().split(" ");

const a = input[0].split('').map(x => parseInt(x, 10));
const b = input[1].split('').map(x => parseInt(x, 10));

let intA = a[2]*100 + a[1]*10 + a[0];
let intB = b[2]*100 + b[1]*10 + b[0];

intA > intB ? console.log(intA) : console.log(intB);