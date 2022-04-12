const food = ["Noodle", "Pasta", "Ice-cream", "Meat", "Cucumber", "Olives"];
const food1 = ["Fries", "Ice-cream", "Pizza", "Olives", "Hamburgers"];

function arrCompare(arr, arr2) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    for (let m = 0; m < arr2.length; m++) {
      if (arr[i] === arr2[m]) {
        newArr.push(arr[i]);
        break;
      }
    }
  }
  return newArr;
}
console.log(arrCompare(food, food1));
