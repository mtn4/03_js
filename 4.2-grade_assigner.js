function func(num) {
  if (0 <= num && num <= 64) {
    return "F";
  }
  if (65 <= num && num <= 69) {
    return "D";
  }
  if (70 <= num && num <= 79) {
    return "C";
  }
  if (80 <= num && num <= 89) {
    return "B";
  }
  if (90 <= num && num <= 100) {
    return "A";
  }
}
console.log(func(99));
