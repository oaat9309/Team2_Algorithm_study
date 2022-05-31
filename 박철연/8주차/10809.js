// 아스키코드 고려해서 푸는 문제
// 주어진 단어 S는 소문자로만 이루어져있음
// 영어 알파벳에 해당하는 아스키코드를 불러오는 fromCharCode 메서드를 활용
// 97 ~ 123번이 영어 소문자에 해당하는 아스키코드들
// 루프 돌면서 input(S)에서 indexOf로 해당 소문자의 index를 찾고, 이를 alphabet에 push
// 소문자가 없으면 index가 자동으로 -1이 될 것
// 궁금한점!! += 쓰면 왜 배열이 아니지...?

// let fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString();

// let alphabet = [];
// for (let i = 97; i < 123; i++) {
//   alphabet += input.indexOf(String.fromCharCode(i)) + " ";
// }
// console.log(alphabet);

// 일단 이거 런타임 오류나고, 콘솔에 찍어도 -1 나옴

let fs = require("fs");
let word = fs.readFileSync("/dev/stdin").toString().split(" ");

function func1(input) {
  input = input.split("");

  const letters = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  const answer = [];

  for (let i = 0; i < letters.length; i++) {
    answer.push(
      input.findIndex((word) => {
        word = letters[i];
      })
    );

    return answer.join(" ");
  }
}

console.log(func1(input));
