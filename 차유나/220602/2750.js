/*
N개의 수가 주어졌을 때, 이를 오름차순으로 정렬하는 프로그램을 작성하시오.
첫째 줄에 수의 개수 N(1 ≤ N ≤ 1,000)이 주어진다. 둘째 줄부터 N개의 줄에는 수 주어진다. 이 수는 절댓값이 1,000보다 작거나 같은 정수이다. 수는 중복되지 않는다.
첫째 줄부터 N개의 줄에 오름차순으로 정렬한 결과를 한 줄에 하나씩 출력한다.
*/

//0. https://visualgo.net/en/sorting 정렬 참고사이트



// 1. 그냥 기본풀이 무슨정렬인지 모름
let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n").map((el) => Number(el));

let arr = input.slice(1, input.length);//슬라이스를 이용하여 컷트해주고
arr.sort((a, b) => a - b);//sort 함수를 사용하여 정렬

for (let i = 0; i < arr.length; i++) {//배열 돌면서 콘솔에 찍어주기
	console.log(arr[i]);
}



//2. 거품 정렬 사용시 이중반복문 돌면서 스왑하여 정렬.
//매번 연속된 두 개 인덱스를 비교하여, 정한 기준의 값을 뒤로 넘겨 정렬하는 방법 성능이 매우 안좋은 정렬
const bubbleSort = (arr) => {
    for(let i = arr.length ; i > 0 ; i--){
        for(let j = 0 ; j < i - 1 ; j++){
            if(arr[j] > arr[j + 1]){
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr;
}
bubbleSort([3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48]);
// [2, 3, 4, 5, 15, 19, 26, 27, 36, 38, 44, 46, 47, 48, 50]



//3.선택정렬 : 가장작은값 선택하여 탐핵수에 그값을 정렬안된 배열의 맨앞에 위치한 값과 교체
const selectionSort = (arr) => {
    for(let i = 0 ; i < arr.length; i++){
        let min = i;
        for(let j = i + 1 ; j < arr.length; j++){
            if(arr[j] < arr[min]) min = j;
        }
        [arr[i], arr[min]] = [arr[min], arr[i]];
    }
    return arr;
}//i라는 시작점을 두고 j반복문을 돌려 최솟값을 찾아 시작점과 교체해주는 반복을 거쳐서 정렬해주는 방식이다.
selectionSort([2, 4, 33, 17, 8, 45, 1, 7, 10, 37]);
// [1, 2, 4, 7, 8, 10, 17, 33, 37, 45]



//4 삽입정렬 : 정렬되지않은 임의의 데이터를 정렬된 배열과 비교하여 자신의 위치를 찾아 삽입하여 정렬을 완성
const insertionSort = (arr) => {
    for(let i = 1; i < arr.length; i++){//i의 방향은 오른쪽 j의 방향은 왼쪽으로 서로 반대방향을 가리킨다.
        let cur = arr[i];//i의 기준이 되는 배열 값을 하나 담아두고
        let j = i - 1;
        while(j >= 0 && arr[j] > cur){
            arr[j + 1] = arr[j];//기준의 왼쪽 방향 즉, j 방향으로 하나씩 당겨주면서 정렬을 실시한다.
            j--;
        }
        arr[j + 1] = cur;//그러다가 i의 기준이 되는 배열 값의 적절한 위치에 도착하면 그 위치에 값을 넣어주는 형식이다.
    }
    return arr;
}
insertionSort([10, 34, 45, 50, 8, 48, 14, 41, 43, 1, 46, 9, 7, 25, 36])
// [1, 7, 8, 9, 10, 14, 25, 34, 36, 41, 43, 45, 46, 48, 50]
