const dupe = (arr) => {
  let noDupes = [];
  arr.forEach((element) => {
    if (noDupes.indexOf(element) === -1) {
      noDupes.push(element);
    }
  });
  return noDupes;
};

const arr = [2, 7, 2, 7, 6, 6, 3];
console.log(arr);
console.log(dupe(arr));
