function stringLengths(array) {
  let newArr = [];
  for (let i = 0; i < array.length; i++) {
    newArr.push(array[i].length);
  }
  return newArr;
}
let a = stringLengths(["boo", "doooo", "hoo", "ro"]);
console.log(a);
