let population = [50, 20, 30, 15];
function percentageOfWorld1(population) {
  return (population / 7900) * 100;
}
function populationPercentages(array) {
  let percentages = [];
  for (let i = 0; i < array.length; i++) {
    percentages.push(percentageOfWorld1(array[i]));
  }
  return percentages;
}

let a = populationPercentages(population);
console.log(a);
