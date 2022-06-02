const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n").map((item) => +item);


//먼저 전부다 숫자로 만든다
//input첫번째는 개수, 나머지는 각자의 숫자를 새로운 배열에 push해서 넣는다
//앞에 숫자부터 뒤의 숫자를 비교한다.for문 이용

let arrayA = [];

for(let i = 1; i <= input[0]; i++) {
  arrayA.push(input[i]);
}

// console.log(arrayA);
let Max = 0;
let count = 0;
let nth = 0
for(let j = 0; j < arrayA.length; j++) {
  Max = arrayA[j]; //제일 작은 값을 찾기위해 max를 이용
  for(let k = j + 1; k < arrayA.length; k++){
    if(Max > arrayA[k]) {
      Max = arrayA[k];
      nth = k;
      count = 1;
    } 
  }
  if(count > 0){ //카운터가 있을때만 자리수를 바꾼다
    arrayA[nth] = arrayA[j];
    arrayA[j] = Max;
    count = 0;
  }

}
for(let n = 0; n < arrayA.length; n++){
  console.log(arrayA[n]);
}



// solution(input2[0], input2[1], input[1]);

// function solution(A) {

// }
