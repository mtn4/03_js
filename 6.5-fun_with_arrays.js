let arr = new Array(100).fill("abc");
console.log(arr);
console.log(arr.length);

let arr2 = Array.from(new Array(100), (value, index) => index + 1);
console.log(arr2);
console.log(arr2.length);

const obj = { a: "dasdas", b: "dasdasdsa" };
const arr3 = Object.values(obj);
console.log(arr3);

const qwerty = ["q", "w", "e", "r", "t", "y"];
const object = {};
for (let i = 0; i < qwerty.length; i++) {
  object[qwerty[i]] = 0;
}
console.log(object);

console.log(Array.isArray(qwerty));

let arrT = ["a", "s", "d"];
let arrY = [];
for (let i = 0; i < arrT.length; i++) {
  arrY[i] = arrT[i];
}
arrY.push("f");
console.log(arrT);
console.log(arrY);

let arrU = arrT;
arrU.push("f");
console.log(arrT);
console.log(arrY);
