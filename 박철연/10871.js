function lessThanX(N, X) {
  let arr = [];
  let compareArr = [];
  for (let i = 0; i < N; i++) {
    arr.push(Math.ceil(Math.random() * 10000));
  }
  for (num of arr) {
    if (num < X) {
      compareArr.push(num);
    }
  }
}

// 수열의 숫자 중 최소한 하나는 X보다 작아야 함. 근데 위 로직으로 그걸 추가할 방법이 안보임...
