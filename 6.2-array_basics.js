let people = ["Greg", "Mary", "Devon", "James"];
for (let i = 0; i < people.length; i++) {
  console.log(people[i]);
}
people.splice(people.indexOf("Greg"), 1);
people.splice(people.indexOf("James"), 1);
people.unshift("Matt");
people.push("Matan");
for (let i = 0; i < people.length; i++) {
  console.log(people[i]);
  if (people[i] == "Mary") {
    break;
  }
}

const newArray = people.slice(2, 4);
for (let i = 0; i < newArray.length; i++) {
  console.log(newArray[i]);
}
const maryIndex = people.indexOf("Mary");
console.log("Mary Index:", maryIndex);
const fooIndex = people.indexOf("Foo");
console.log("Foo Index:", fooIndex);

people = ["Greg", "Mary", "Devon", "James"];

people.splice(2, 1, "Elizabeth", "Artie");
for (let i = 0; i < people.length; i++) {
  console.log(people[i]);
}
let withBob = people.concat(["Bob"]);
console.log(withBob);
