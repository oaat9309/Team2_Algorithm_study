// 하노이 탑 이동순서

// 로직 도식화 (괄호 안 숫자는 기둥입니다.)

// 1. 원반 1을 (3)로
// 2. 원반 2를 (2)으로
// 3. 원반 1을 (2)로 ((2):1-2)
// 4. 원반 3을 (3)으로 ((2):1-2 & (3):3)
// 5. 원반 1을 (1)로 ((1):1-4-5 & (2):2 & (3):3)
// 6. 원반 2를 (3)으로 ((1):1-4-5 & (3):2-3)
// 7. 원반 1을 (3)으로 ((1):4-5 & (3):1-2-3)
// 8. 원반 4를 (2)로 ((1):5 & (2):4 & (3):1-2-3)
// 9. 원반 1을 (2)로 ((1):5 & (2):1-4 & (3):2-3)
// 10. 원반 2를 (1)로 ((1):2-5 & (2):1-4 & (3):3)
// 더러워서 포기!

let N = Math.ceil(Math.random() * 20);

let towers = [[], [], []];
let moveCount = 0;
let output = [];

const hanoi = (num) => {
  // init
  for (let i = 0; i < num; i++) {
    towers[0].push(i);
  }

  //num개를 0부터 2까지 옮겨라
  moveVia(num, 0, 2, 1);

  console.log(moveCount);
  console.log(output.join("\n"));
};

const move = (from, to) => {
  const tmp = towers[from].pop();
  towers[to].push(tmp);
  moveCount++;
  output.push(`${from + 1} ${to + 1}`);
  return;
};

const moveVia = (num, from, to, via) => {
  if (num == 1) {
    return move(from, to);
  }

  moveVia(num - 1, from, via, to);
  move(from, to);
  moveVia(num - 1, via, to, from);
};

console.log(N);
hanoi(N);

// https://chunghyup.tistory.com/69
