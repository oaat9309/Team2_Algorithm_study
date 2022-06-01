// 백준 2750번 수 정렬하기
// 시간 복잡도 O(n^2) 삽입 정렬, 거품 정렬

const fs = require('fs');
const [n, ...arr] = fs.readFileSync("input.txt").toString().trim().split("\n");
const input = arr.map((x => parseInt(x, 10)));

function insertSort(arr) {
  for(let i=1; i<n; i++) {
    let temp = arr[i];

    let prev = i-1;

    while (prev >= 0 && arr[prev] > temp) { // temp가 정렬된 원소보다 작으면 정렬된 원소를 뒤로 옮긴다.
      arr[prev+1] = arr[prev];
      prev--;
    }

    // temp와 앞의 원소들이 다 정렬되었으니 temp는 temp의 자리에 넣는다.
    arr[prev+1] = temp;
  }
  return arr;
}

function bubbleSort(arr) {
  for(let i=n-1; i>0; i--) { 
    for(let j=0; j<=i; j++) {
      if (arr[j] > arr[j+1]) { // 왼쪽에 위치한 원소가 더 작다 -> 있어야할 위치가 아니다.
        // swap
        let temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp;
      }
    }
  }
  return arr;
}

const result = bubbleSort(input);
for (let i=0; i<result.length; i++) {
  console.log(result[i]);
}