const book = {
  name: "QWERTY",
  author: "YTREWQ",
  pages: 52,
  genres: ["A", "B", "C"],
  year: 1990,
};

const swapObject = (object) => {
  const swappedObject = {};
  for (const key in object) {
    swappedObject[object[key]] = key;
  }
  return swappedObject;
};

console.log("Book Original", book);
console.log("\nBook Swapped", swapObject(book));
