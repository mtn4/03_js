function color(color) {
  let lower = color.toLowerCase();
  switch (lower) {
    case "yellow":
    case "pink":
    case "orange":
      console.log("light color");
      break;
    case "blue":
    case "purple":
    case "brown":
      console.log("dark color");
      break;
    default:
      console.log("Unknown color");
  }
}
color("pink");
color("blue");
color("fdsds");
