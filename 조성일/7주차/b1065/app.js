const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString();

let count = 0; //카운터

//한수 : 각각의 차이가 같은 수 , 101 은 차이가 1, -1이기에 불가능 321 은 -1, -1이기에 가능

const solution = (N) => {
  if(N <= 99) { //99이하
    console.log(N);
  } else { //99이상에서는 함수를 이용해 인자를 넘겨줘서 사용
    aSequence(N);
  }
}
const aSequence = (N) => {
  for(let i = 100; i <= N; i++) { 
    let a = i.toString().split("").map(x => +x); //100이상인 숫자들을 하나씩증가하며 각각의 숫자를 배열로 나눔
    if ((a[0]-a[1]) === (a[1]-a[2])) { //한수를 구하기위해 첫번째 두번째 차와 두번째 세번재 차를 구해서 같으면 한수로 결정
      count = count + 1;
    }
  }
  console.log(99 + count);
}

solution(+input);