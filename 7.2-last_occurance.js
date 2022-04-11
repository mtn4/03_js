const string = "The more you know, the more you know that you don't know";

const lastOccurrence = (string, word) => {
  return string.lastIndexOf(word);
};

const word = "you";
console.log(lastOccurrence(string, word));
