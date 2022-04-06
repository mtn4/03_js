const prompt = require("prompt-sync")();

const input = prompt("How many siblings do you have?");
if (input == 1) {
  console.log("1 sibling!");
} else if (input > 1) {
  console.log("More than 1 sibling");
} else {
  console.log("No siblings");
}
