const myCountry = {
  country: "Finland",
  capital: "Helsinki",
  language: "Finnish",
  population: 6,
  neighbours: ["A", "B", "C "],
  describe() {
    return `${this.country} has ${this.population} million people, their mother tongue is ${this.language}, they have ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}`;
  },
  checkIsland() {
    return (this.isIsland = this.neighbours.length > 0 ? true : false);
  },
};

console.log(myCountry.describe());
console.log(myCountry.checkIsland());
console.log(myCountry);
