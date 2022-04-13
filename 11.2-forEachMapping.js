const doubleValuesForEach = (array) => {
  const newArr = [];
  array.forEach((element) => {
    newArr.push(element ** 2);
  });
  return newArr;
};

const doubleValuesMap = (array) => {
  return array.map((element) => element ** 2);
};

const arr = [7, 6, 3];

console.log(doubleValuesForEach(arr));
console.log(doubleValuesMap(arr));

const onlyEvenValuesForEach = (array) => {
  const newArr = [];
  array.forEach((element) => {
    if (element % 2 === 0) newArr.push(element);
  });
  return newArr;
};

console.log(onlyEvenValuesForEach(arr));

function showFirstAndLast(array) {
  const newArr = [];
  array.forEach((element, index) =>
    (index === 0 || index === array.length - 1) && typeof element === "string"
      ? newArr.push(element)
      : ""
  );
  return newArr;
}
console.log(showFirstAndLast(["fsdfds", 4, 9, "fdddsfds"]));

const vowelCount = (str) => {
  const vowels = { a: 0, e: 0, i: 0, o: 0, u: 0, y: 0 };
  str.split("").map((char) => {
    return ["a", "e", "i", "o", "u", "y"].indexOf(char.toLowerCase()) !== -1
      ? vowels[char.toLowerCase()]++
      : "";
  });
  return vowels;
};
console.log(vowelCount("ASDAIRE dasyuDFI OuoU"));

const capitalize = (str) => {
  return str
    .split("")
    .map((character) => character.toUpperCase())
    .join("");
};
console.log(capitalize("DSfdsf DgfdsD fdaf"));

const shiftLetters = (str) => {
  return str
    .split("")
    .map((char) => {
      return String.fromCharCode(char.charCodeAt() - 1);
    })
    .join("");
};
console.log(shiftLetters("abCdefg"));

const swapCase = (str) => {
  return str
    .split(" ")
    .map((word, index) => {
      return index % 2 === 0 ? capitalize(word) : word;
    })
    .join(" ");
};
console.log(swapCase("fdsfsd dasfsd dasdas dasds dasdsa"));
