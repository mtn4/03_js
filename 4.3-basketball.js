function calcAverage(a, b, c) {
  return (a + b + c) / 3;
}
let john = calcAverage(89, 120, 103);
let mike = calcAverage(116, 94, 123);
if (john > mike) {
  console.log(`John wins, ${john}`);
} else {
  console.log(`Mike wins, ${mike}`);
}
john = calcAverage(150, 120, 103);
if (john > mike) {
  console.log(`John wins, ${john}`);
} else {
  console.log(`Mike wins, ${mike}`);
}
john = calcAverage(89, 120, 103);
let mary = calcAverage(97, 134, 105);

if (mary > john && mary > mike) {
  console.log(`Mary wins, ${mary}`);
} else if (john > mary && john > mike) {
  console.log(`John wins, ${john}`);
} else {
  console.log(`Mike wins, ${mike}`);
}
