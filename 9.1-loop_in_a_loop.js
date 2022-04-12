const listOfNeighbours = [
  ["Canada", "Mexico"],
  ["Spain"],
  ["Norway", "Sweden", "Russia"],
];

for (let i = 0; i < listOfNeighbours.length; i++) {
  for (let m = 0; m < listOfNeighbours[i].length; m++) {
    console.log("Neighbour:", listOfNeighbours[i][m]);
  }
}
