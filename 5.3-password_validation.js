function simpleif(password) {
  if (password.length > 7) {
    console.log("Strong");
  } else {
    console.log("Weak");
  }
}

function simpleternary(password) {
  password.length > 7 ? console.log("Strong") : console.log("Weak");
}

const simple = (password) => {
  return (password.length > 7 && "Strong") || "Weak";
};
const advanced = (password) => {
  password.length > 7 && password !== password.toLowerCase()
    ? console.log("Very Strong")
    : password.length > 7
    ? console.log("Strong")
    : console.log("Weak");
};
simpleif("dasdadasds");
simpleternary("dasdadasds");
advanced("dsadDdas");
