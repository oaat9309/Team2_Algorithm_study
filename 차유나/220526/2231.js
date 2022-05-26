const fs = require('fs');
const num = +fs.readFileSync('/dev/stdin').toString();

let array = [];
let constructor = [];

//분해합 구하기
function decom(num) {
  let sum = num;
  while (1) { //1이상 이면 그냥 반복
    if (num === 0) break; //0이면 멈춤
    sum += num % 10; // sum에 일의 자리수 더 함
    num = parseInt(num / 10); // 일의 자리수 빼고 남은것을 num에 대입하고 다시 반복
  }
  return sum;
}
//생성자 찾아서 배열에 push한다.
for (let i = 1; i <= num; i++) {
  if (num === decom(i)) {
    constructor.push(i);
  }
}

if(constructor.length === 0){ //배열이 비어있다는 것은 생성자가 없다는 것이므로 0 출력
  console.log(0);
} else {
  console.log(constructor[0]); //생성자 배열은 작은 숫자부터 push되므로 가장 작은 값인 첫 번째 원소 출력
}