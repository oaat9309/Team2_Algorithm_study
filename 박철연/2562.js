function maxNum() {
  let arr = [];

  for (i = 0; i < 9; i++) {
    arr.push(Math.ceil(Math.random() * 100));
  }

  let max = Math.max(...arr);
  let maxIndex = arr.indexOf(max);

  console.log(arr);
  console.log(max);
  console.log(maxIndex + 1);
}
