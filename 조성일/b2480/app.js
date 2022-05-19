const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split(" ").map((item) => +item);
//3개의 숫자를 배열로 담는다

// if문을 사용하여, 같은눈3개, 같은눈 2개, 다른눈 조건을 준다.

solution(input[0], input[1], input[2]);

function solution(A, B, C) {
  if(A === B && B === C){ //같은눈 3개
    console.log( 10000 + (A * 1000) );
  } else if(A !== B && B !== C && A !== C){ //모두 다른눈
    let arrayNum = [];
    arrayNum.push(A,B,C); //sort함수를 사용하기위해 push로 새롭게배열에 담는다
    console.log((arrayNum.sort((a, b) => { return a - b; })[2]) * 100); //sort함수를 이용해, 오름차순으로 나열한다음 제일큰 값
  } else { //나머지는 2개만
    if(A === B || A === C){ // A와 같은값들의 경우
      console.log(1000 + (A * 100));
    } else { //B와 C가 같은경우
      console.log(1000 + (B * 100));
    }
  }

}
