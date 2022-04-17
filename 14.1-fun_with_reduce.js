const arr = [2, 1, 3, 4, 5];
const max = (arr) => {
  return arr.reduce((prev, current) => {
    return prev > current ? prev : current;
  });
};
const sumOfEvenNumbers = (arr) => {
  return arr.reduce((sum, curr) => {
    return curr % 2 === 0 ? (sum += curr) : sum;
  }, 0);
};
const avg = (arr) => {
  return (
    arr.reduce((prev, curr) => {
      return prev + curr;
    }) / arr.length
  );
};
console.log(max(arr));
console.log(sumOfEvenNumbers(arr));
console.log(avg(arr));
