function makeAllCaps(arr) {
  const strArray = arr.filter((item) => typeof item === "string");
  return new Promise((resolve, reject) => {
    if (strArray.length === arr.length) {
      const capitalizedArr = arr.join(",").toUpperCase().split(",");
      resolve(capitalizedArr);
    } else {
      reject(arr);
    }
  });
}

const sortArr = (arr) => arr.sort();

const arr1 = ["dasdaeqs", "dakjhksdas", "dnbvnvbasdsa", "ddddfvxc"];
const arr2 = ["dasdas", 5, "dasdsa", "dasdas"];

makeAllCaps(arr1)
  .then((data) => sortArr(data))
  .then((data) => console.log(data))
  .catch((data) => {
    console.log(`error: [${data}]`);
  });
makeAllCaps(arr2)
  .then((data) => sortArr(data))
  .then((data) => console.log(data))
  .catch((data) => {
    console.log(`error: [${data}]`);
  });
