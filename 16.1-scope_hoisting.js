// Block 1
// Result will be undefined, 2. undefined because variable a is var, declared without value. To fix that,
// need to change the location of the console.log(a) to be below the declaration. function foo will work because functions declarations
// position in the file doesn't matter.

function funcE() {
  console.log("Value of f in local scope: ", f);
}
console.log("Value of f in global scope: ", f);
var f = 1;
funcE();
