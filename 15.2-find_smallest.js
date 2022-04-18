// Function call with a wrong name. Need to change it from findSmalest to findSmallest.
// In addition, the algorithm to find smallest argument was wrong.

function findSmallest(a, b, c) {
  if (c <= a && c <= b) {
    return c;
  }
  if (a <= b && a <= c) {
    return a;
  }
  return b;
}
console.log(findSmallest(52, 66, 2));
