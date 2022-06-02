//부녀회장이 될테야
/*
평소 반상회에 참석하는 것을 좋아하는 주희는 이번 기회에 부녀회장이 되고 싶어 각 층의 사람들을 불러 모아 반상회를 주최하려고 한다.
이 아파트에 거주를 하려면 조건이 있는데, “a층의 b호에 살려면 자신의 아래(a-1)층의 1호부터 b호까지 사람들의 수의 합만큼 사람들을 데려와 살아야 한다” 는 계약 조항을 꼭 지키고 들어와야 한다.
아파트에 비어있는 집은 없고 모든 거주민들이 이 계약 조건을 지키고 왔다고 가정했을 때, 주어지는 양의 정수 k와 n에 대해 k층에 n호에는 몇 명이 살고 있는지 출력하라. 단, 아파트에는 0층부터 있고 각층에는 1호부터 있으며, 0층의 i호에는 i명이 산다.
*/
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
let number = Number(input[0]);
input.shift();

//작업을 쉽게 하기 위해서 array에 [k,n]형태로 데이터를 넣는다.
let k;
let n;
let array = [];

// array를 반복문을 돌린다.
for(let i = 0; i < number*2 ; i=i+2){
    k = Number(input[i]);
    n = Number(input[i+1]);
    array.push([k,n]);
}

//floor라는 배열을 만들어서 0층부터 k층까지 반복문을 돌리고(j가 반복 수), 그 안에서 1호부터 n호까지(m이 반복 수) 반복문
//0층 1호 ~ 0층 n호 / 1층 1호 ~ 1층 n호 이런식으로 반복
//층이 생길 때 마다 floor[j] 를 빈 배열로 공간을 만들어주고 , 이 때 j === 0, 즉 0층이라면 m삽입
let floor = [];
let sum = 0;
for(let i = 0; i < array.length; i++){
    //k층 n호
    k = array[i][0];
    n = array[i][1];
    for(let j = 0; j <= k; j++){ //0층부터 k층까지
        floor[j] = [];
        for(let m = 1; m <= n; m++){ // 1호부터 n호까지
            if(j === 0){ //0층이라면
                floor[j].push(m);
            }else{ // j가 0이 아닐 때 
                //0층이 아니라면 이제 자기 층보다 한 층 아래의 호 중에서 자기랑 같은 호 까지 더한 값이 저장이 되어야 하므로 그 값은 sum으로 누적해서 더해준다.
                sum += floor[j-1][m-1];
                floor[j].push(sum);
                if(m === n){
                    sum = 0;
                }
            }
        }
    }
    //floor 배열을 완성한다음, 우리가 알고싶은 k층 n호만 출력
    //이 때 k는 0층부터 시작하니까 그대로 출력해도 되는데 n은 1호부터 시작
    console.log(floor[k][n-1]);
}