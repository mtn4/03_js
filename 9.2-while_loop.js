function stringLengths(array) {
  let newArr = [];
  for (let i = 0; i < array.length; i++) {
    newArr.push(array[i].length);
  }
  return newArr;
}
let a = stringLengths(["boo", "doooo", "hoo", "ro"]);
console.log(a);

function stringLengthsWhile(array) {
  let newArr = [];
  let i = 0;
  while (i < array.length) {
    newArr.push(array[i].length);
    i++;
  }
  return newArr;
}
let b = stringLengthsWhile(["boo", "doooo", "hoo", "ro"]);
console.log(b);
