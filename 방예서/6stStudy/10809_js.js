// 백준 10809 알파벳 찾기 js

const fs = require('fs');
const input = fs.readFileSync("input.txt").toString().trim().split("");

const alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

const result = alphabet.map(x => input.indexOf(x));

console.log(...result);
