const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString();

//정해진 숫자까지가될때까지 for문을 돌려서 그안에 그숫자가 나오면 break를 건다
let setN = 0;

const solution = (N) => {
 
  for(let i = 1; i <= N; i++){
    let a = i.toString().split("").map(x => +x); // 각숫자를 배열로 나눔
    const result = a.reduce((sum, currentValue) => { //숫자를 각각의하나의 배열로 나눈것의 합을 구하기위한 reduce함수
      return sum + currentValue;
    },0);
  //  console.log(result, a, i, N); 
    if((result + i) === N){
      setN = i;
      return setN; //가장작은숫자를위해 먼저 나타나면 끝내기
      // console.log(i);
      // break; //가장작은숫자를위해 먼저 나타나면 끝내기
    } 
    
   
  }
  return setN;
  // if(setN > 0){
  //   console.log(setN);
  // } else {
  //   console.log(0);
  // }
 
}


console.log(solution(+input));