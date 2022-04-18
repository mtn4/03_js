// Return line was wrong, returned wrong values from the array, the final value wasn't
// a valid value in the array so it caused additional mistake (returned NaN instead if an int)

function getSumOfEven(arr) {
  return arr[1] + arr[3] + arr[5] + arr[7] + arr[9];
}
console.log(getSumOfEven([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
