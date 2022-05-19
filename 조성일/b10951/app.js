const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

let testCase = []; //배열로 담는다

let i = 0;
while(i < input.length){
  if(input[i] === ""){ //이게 필요하다 마지막 배열의 공백일때는 제외
    break;
  }
  testCase.push(input[i].split(" ").map(x => +x));
  i++;
}
solution(testCase);

function solution(testCase) {
  let i = 0;
  while(i < testCase.length){
    console.log(testCase[i][0]+testCase[i][1]);
    i++;
  }
}
