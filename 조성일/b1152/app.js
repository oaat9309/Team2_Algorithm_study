const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString(); //String문자


//split()함수를 이용하여 각단어들을 배열에 넣기

solution(input);

function solution(word) {
  const words = word.split(" "); //띄어쓰기 기준으로 각 단어들을 배열에 넣기
  let count = 0;
  for(let i = 0; i < words.length; i++){
    if(words[i] !== ""){ //앞뒤 공백을 위해 공백인 문자를 제외한 문자들 걸러내기
      count += 1;
    }
  }
  console.log(count);
}
