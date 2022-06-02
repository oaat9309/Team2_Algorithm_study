let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split(' ');

let arr = []; //빈배열 하나 만들고
let result = ''; //빈 문자열

for (let i = 97; i <= 122; i++) { // 알파벳 정규식은 97~122번까지
  let alphabet = String.fromCharCode(i); 

  for (let j = 0; j < input.length; j++) {// 순회하면서 배열에 push해줌. 
    arr.push(input[j].indexOf(alphabet));
  }
}
result = arr.join(' ');
console.log(result);