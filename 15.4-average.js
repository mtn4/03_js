// var sum wasn't initialized so it couldn't calculate the 'sum += arr[i]'
// Additional mistake was that the divide by array length was missing
function calcAverage(arr) {
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
}
console.log(calcAverage([85, 90, 92]));
