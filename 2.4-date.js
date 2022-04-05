function todayDate() {
  let dateObj = new Date();
  return (
    "Today is " +
    dateObj.toLocaleString("en-us", { weekday: "long" }) +
    " the " +
    dateObj.getDate() +
    " of " +
    dateObj.toLocaleString("en-us", { month: "long" }) +
    ", " +
    dateObj.getFullYear()
  );
}

console.log(todayDate());
