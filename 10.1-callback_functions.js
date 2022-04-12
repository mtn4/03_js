function a(arg) {
  console.log(arg);
}
function isString(str, func) {
  if (typeof str === "string") {
    func(str);
  }
}
isString("dsadas", a);
isString(564, a);

function b(str) {
  let newStr = str.split(" ");
  return newStr.join("-");
  console.log(newStr);
}
function firstWordUpperCase(str, func) {
  let newStr = str.charAt(0).toUpperCase() + str.slice(1);
  func(newStr);
}
console.log(b("dsadfsdfds dfasfds fdaf"));
