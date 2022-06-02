const fs = require('fs');
const input = fs.readFileSync("input.txt").toString();

console.log(input);

// Initializing
function hanSoo(N) {
  const numArr = [];
  let hanSoo, digitCount;
  let temp = 0;
// for 반복문 / 1부터 N 으로 들어오는 값의 바로 전까지.(즉 100들어오면 -1인셈.) 더하기.
  for (let i = 1; i <= N; i++) {
      // 만약 100 보다 작다면, 그게 한수(hanSoo) 의 i 에 해당된다
      if (i < 100) {
          hanSoo = i;
          // 만약 한수가  1000보다 작다면, digitCount 는 0이되고, temp 는 1이 된다.
      } else if (i < 1000) {
          digitCount = 0;
          temp = i;
          // temp 가 0 보다 크면; numArr 는 digitCount 를 참고하는데, 여기서 temp 의 나머지 10을 구하고, temp 는 이 나머지 10 값을 string 에서 정수로 변환한다.
          // 그 후, digitCount 는 덧셈으로 반복문이 작동. (temp 가 0보다 크다는 조건하에)
          while (temp > 0) {
              numArr[digitCount] = temp % 10;
              temp = parseInt(temp / 10);
              digitCount++;
          }
          // 아래는 문제에서 제시한 한수가 작동하도록 구성하는 로직이다.
          if (numArr[0] - numArr[1] === numArr[1] - numArr[2]) {
              hanSoo++;
          }
          // 그 이외의 경우, break
      } else {
          break;
      }
  }
// 최종적으로 hanSoo 를 return.
  return hanSoo;
}

// 이제 예제 출력이 나오도록, 예제 입력값인 110 을 입력해보자.
console.log(hanSoo(input));