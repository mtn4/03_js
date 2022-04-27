function Pokemon(pokemonName, pokemonType, pokemonAttackList) {
  this.name = pokemonName;
  this.type = pokemonType;
  this.attackList = pokemonAttackList;
}

Pokemon.prototype.callPokemon = function () {
  console.log("I choose you,", this.name);
};

Pokemon.prototype.attack = function (number) {
  console.log(`${this.name} used ${this.attackList[number]}`);
};

const pokemon1 = new Pokemon("Pikachu", "Electric", [
  "electrical power",
  "strength",
]);

pokemon1.callPokemon();
pokemon1.attack(0);
pokemon1.attack(1);
