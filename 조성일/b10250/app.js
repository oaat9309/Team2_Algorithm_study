const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");
// let hotel = input[1].split(" ").map((item) => +item);


const T = +input[0];
const hotel = [];

for(let i = 1; i <= T; i++){
  const testData = input[i].split(" ").map((item) => +item);
  hotel.push({H: testData[0], W: testData[1], N: testData[2]});
}


roomCheck(hotel);

function roomCheck(hotel) {
  for(let i = 0; i < T; i++){ 
    const H = hotel[i].H; //층
    const W = hotel[i].W; //각층 방수
    const N = hotel[i].N; // N번째 손님
    let Y = N % H; //방번호 첫번째자리수(층수)
    let XX = N / H;
    let zero = "";
    
    if((H * W) >= N){ 
      //앞에번호 층수를 나타낼때는 % 나머지로
      if(Y !== 0) { 
        Y = Y;
      } else {
        Y = H;
      }

      if(XX >= Math.floor(XX) && XX <= 9){ //번호선택, 
        XX = Math.ceil(XX); //9호까지
        zero = 0;
      } else{
        XX = Math.ceil(XX); //10호이상
      }
    }
    console.log(+`${Y}${zero}${XX}`);
  }
}
