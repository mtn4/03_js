const data = [
  {
    name: "John",
    birthday: "1-1-1995",
    favoriteFoods: {
      meats: ["hamburgers", "sausages"],
      fish: ["salmon", "pike"],
    },
  },
  {
    name: "Mark",
    birthday: "10-5-1980",
    favoriteFoods: {
      meats: ["hamburgers", "steak", "lamb"],
      fish: ["tuna", "salmon", "barracuda"],
    },
  },
  {
    name: "Mary",
    birthday: "1-10-1977",
    favoriteFoods: {
      meats: ["ham", "chicken"],
      fish: ["pike"],
    },
  },
  {
    name: "Thomas",
    birthday: "1-10-1990",
    favoriteFoods: {
      meats: ["bird", "rooster"],
      fish: ["salmon"],
    },
  },
  {
    name: "Mary",
    birthday: "1-10-1977",
    favoriteFoods: {
      meats: ["hamburgers", "lamb"],
      fish: ["anchovies", "tuna"],
    },
  },
];

const names = (arr) => {
  return arr.map((element) => element.name);
};
console.log(names(data));

const bornBefore90s = (arr) => {
  const newArr = [];
  arr.forEach((element) => {
    let year = element.birthday.split("-").pop();
    year < 1990 ? newArr.push(element) : null;
  });
  return newArr;
};
console.log(bornBefore90s(data));

const getFoodCounted = (data) => {
  const foods = data
    .map((element) => {
      return Object.values(element.favoriteFoods);
    })
    .flat(Infinity);
  const foodObject = {};
  for (const food of foods) {
    if (foodObject.hasOwnProperty(food)) {
      foodObject[food] += 1;
    } else {
      foodObject[food] = 1;
    }
  }
  return foodObject;
};

console.log(getFoodCounted(data));
