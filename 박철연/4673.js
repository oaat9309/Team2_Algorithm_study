// 시행착오
// function selfNumber() {
//   let arr = [];
//   for (i = 0; i < 10000; i++) {
//     let num = i + 1;
//     arr.push(num);
//   }

//   for(n of arr) {
//     let tenThousand = Math.floor(n/10000)
//     let thousand = Math.floor((n - tenThousand)/1000)
//     let hundred = Math.floor((n - tenThousand -thousand)/100)
//     let ten = Math.floor((n - tenThousand -thousand-hundred)/10)
//     let one = n - tenThousand -thousand -hundred -ten
//     if(n == )
//   }
// }

function selfNumber() {
  let arr = [];
  let answer = [];

  for (let i = 1; i <= 10000; i++) {
    let N = 0;
    let stringNumber = String(i);
    for (let j = 0; j < stringNumber.length; j++) {
      N += Number(stringNumber[j]);
    }
    let notSelfNum = i + N;
    arr.push(notSelfNum);
  }

  for (let i = 1; i <= 10000; i++) {
    if (arr.indexOf(i) === -1) {
      answer += i + "\n";
    }
  }
  console.log(answer);
}
