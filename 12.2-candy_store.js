const candyStore = {
  candies: [
    {
      name: "mint gum",
      id: "as12f",
      price: 2,
      amount: 2,
    },
    {
      name: "twix",
      id: "5hd7y",
      price: 5,
      amount: 4,
    },
  ],
  cashRegister: 200,
};

function getCandy(candyStore, id) {
  for (const candy of candyStore.candies) {
    return candy.id === id ? candy : null;
  }
}
console.log(getCandy(candyStore, "as12f"));

function getPrice(candyStore, id) {
  return getCandy(candyStore, id).price;
}
console.log(getPrice(candyStore, "as12f"));

function addCandy(candyStore, id, name, price) {
  candyStore.candies.push({
    name,
    id,
    price,
    amount: 1,
  });
}
addCandy(candyStore, "tb89d", "lol", 4);
console.log(candyStore.candies);

function buy(candyStore, id) {
  getCandy(candyStore, id).amount--;
  candyStore.cashRegister += getPrice(candyStore, id);
}
buy(candyStore, "as12f");
console.log(candyStore);
