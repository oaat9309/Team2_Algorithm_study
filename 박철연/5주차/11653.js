// 소인수 분해

// 첫째 줄에 정수 N (1 ≤ N ≤ 10,000,000)이 주어진다.
// 정수 N이 주어졌을 때, 소인수분해하는 프로그램을 작성하시오.

// let N = Math.ceil(Math.random() * 10000000);
// let resultArr = [];
// let finalArr = [];
// let answer = "";

// // 자기자신보다 작은 수로 나누고 그걸 또 나누고
// for (let i = 1; i <= N; i++) {
//   if (N % i === 0) {
//     resultArr.push(i);
//   }
// }
// console.log(resultArr);
// let num = N;

// while (num !== 1) {
//   let smallNum;
//   // 1이 언제나 resultArr의 첫번째 항목(resultArr[0])으로 들어가므로 i를 1부터 시작
//   for (let i = 1; i < resultArr.length; i++) {
//     if (num % resultArr[i] === 0) {
//       smallNum = resultArr[i];
//       break;
//     }
//   }
//   console.log(smallNum);
//   if (resultArr.length >= 4 && num > 1) {
//     finalArr.push(smallNum);
//     while (true) {
//       num = num / smallNum;
//       console.log("smallNum : " + smallNum);
//       if (num % smallNum !== 0) {
//         break;
//       }
//       finalArr.push(smallNum);
//     }
//   }
// }

// finalArr.forEach((numEl) => {
//   answer += numEl + "\n";
// });
// console.log(answer);

let answer = [];
let N = Math.ceil(Math.random() * 100);
console.log("숫자는 " + N);
for (let i = 2; i <= N; i++) {
  let num = i;
  while (N % num === 0) {
    answer.push(num);
    if (N / num === 1) break;
    // 여기가 중요! N을 이미 한번 거친 num으로 나누어서 새로운 N을 명시하는 것으로 num이 제곱 이상일 때를 나타냄
    N = N / num;
  }
}

console.log(answer.join("\n").trim());
