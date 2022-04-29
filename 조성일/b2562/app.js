const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");
input = input.map((item) => +item);

// console.log(input);
solution(input);

function solution(MaxNum){ //선언식
  let MaxInt = 0; //최대값 변수
  let MaxTh = 0; //최대값 몇번째 변수
  for(let i = 0; i < input.length; i++) {
    if(MaxNum[i] > MaxInt){
      MaxInt = MaxNum[i];
      MaxTh = i + 1;
    } 
  }
  console.log(MaxInt);
  console.log(MaxTh);
}

