const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");
let cardNum = input[0].split(" ").map((item) => +item);
let cardWrites = input[1].split(" ").map((item) => +item);


let closeN = 0; //가까운값 구할 변수

solution(cardNum, cardWrites);

function solution(cardNum, cardWrites) {

for(let i = 0; i < cardNum[0]; i++) {
  for(let j = i + 1; j < cardNum[0]; j++) {
    for(let k = j + 1; k < cardNum[0]; k++) {
      const sum = cardWrites[i] + cardWrites[j] + cardWrites[k];
      const gap = cardNum[1] - sum;
      if(gap >= 0 && closeN <= sum){
        closeN = sum;
      }
    }
  }
}
console.log(closeN);
}
