const input = [];

const numArr = (str) => str.split(" ").map((numString) => Number(numString));

require("readline")
  .createInterface(process.stdin, process.stdout)
  .on("line", function (line) {
    input.push(line.trim());
  })
  .on("close", function () {
    const [N, M] = numArr(input[0]);
    const numList = numArr(input[1]);

    let result = 0;
    let count = 0;

    //반복문 중첩
    for (let i = 0; i < N; i++) {
      for (let j = i + 1; j < N; j++) {
        for (let k = j + 1; k < N; k++) {
          count = numList[i] + numList[j] + numList[k];
          if (count > result && count <= M) {
            result = count;
          }
        }
      }
    }

    console.log(result);
  });
