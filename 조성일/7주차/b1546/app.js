const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");
let subject = input[1].split(" ").map((item) => +item);

//input[0] 과목의 개수
//input2에 과목들의 점수

let MaxNum = 0;
let Average = 0;

const solution = (N, sub) => {
  MaxNum = sub.sort((a, b) => {return b - a;})[0]; //최대값을 구하기 위해 sort함수를 이용해 내림차순으로 정렬
  
  for(let i = 0; i < N; i++) {
    Average = Average + sub[i] / MaxNum * 100;  //과목들의 합
  }
  console.log(Average/N);
}
solution(input[0], subject);
