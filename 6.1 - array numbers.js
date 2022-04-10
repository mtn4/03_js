const arr = [1, 7, 3, 1, -5, 7, 3, 9];

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
const arrayPrint = (array) => {
  console.log(...array);
};
arrayPrint(arr);

const arrayLength = (array) => {
  let counter = 0;
  while (array[counter] !== undefined) {
    counter++;
  }
  return counter;
};
console.log(arrayLength(arr));
function arraySum(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}
console.log(arraySum(arr));

function arrayMulti(array) {
  let mult = 1;
  for (let i = 0; i < array.length; i++) {
    mult *= array[i];
  }
  return mult;
}
console.log(arrayMulti(arr));
