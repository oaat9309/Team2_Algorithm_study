// 평소 반상회에 참석하는 것을 좋아하는 주희는 이번 기회에 부녀회장이 되고 싶어 각 층의 사람들을 불러 모아 반상회를 주최하려고 한다.

// 이 아파트에 거주를 하려면 조건이 있는데, “a층의 b호에 살려면 자신의 아래(a-1)층의 1호부터 b호까지 사람들의 수의 합만큼 사람들을 데려와 살아야 한다”

// 는 계약 조항을 꼭 지키고 들어와야 한다.

// 아파트에 비어있는 집은 없고 모든 거주민들이 이 계약 조건을 지키고 왔다고 가정했을 때, 주어지는 양의 정수 k와 n에 대해 k층에 n호에는 몇 명이 살고 있는지 출력하라.

// 단, 아파트에는 0층부터 있고 각층에는 1호부터 있으며, 0층의 i호에는 i명이 산다.

// 삽질

// 1 4 10 20 35 56 84 120 165 220 ...
// 1 3 6 10 15 21 28 36 45 55 ...
// 1 2 3 4 5 6 7 8 9 10 ...

// k층의 n호에 사는 사람??  => k층의 n-1호 사는 사람이랑 k-1층의 n호 사는 사람 합임
// 층마다 배열만들면 아마 런타임 초과날 듯
// 0층 배열로 쪼물딱 거리는 게 맞음

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let T = Number(input.shift());
let N = input.length;
let answer = "";

// house = 전체 아파트 배열, arr = 각 층의 인원수 담을 배열 (임시로 사용되므로 층 옮길때마다 초기화됨)

for (let i = 0; i < T * 2; i = i + 2) {
  let k = Number(input[i]);
  let n = Number(input[i + 1]);
  let house = [];
  let arr = [];

  // 최초에 0층에 대한 배열 만드는 과정
  for (let i = 1; i <= n; i++) {
    arr.push(i);
  }
  house.push(arr);

  // 그 다음 1층부터는 새로운 반복문으로 배열 산출하는 구조
  for (let i = 1; i <= k; i++) {
    arr = [];
    let sum = 0;
    // 배열 index 체이닝해서 아까 arr로 담은 아랫층 인원수 가져옴
    for (let j = 1; j <= n; j++) {
      sum = sum + house[i - 1][j - 1];
      arr.push(sum);
    }
    house.push(arr);
  }
  answer += house[house.length - 1][house[0].length - 1] + "\n";
}
console.log(answer);
