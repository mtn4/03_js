function countryToLiveIn(language, isIsland, population, country) {
  if (
    (language == "english" || language == "English") &&
    population < 50 &&
    isIsland == false
  ) {
    console.log(`You should live in ${country}`);
  } else {
    console.log(`${country} does not meet your criteria`);
  }
}
countryToLiveIn("English", false, 20, "Finland");
countryToLiveIn("English", true, 20, "Finland");
countryToLiveIn("English", false, 60, "Finland");
