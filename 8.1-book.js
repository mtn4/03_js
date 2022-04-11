const book = {
  name: "Qwerty",
  author: "Asdf",
  publishedYear: 1999,
};

const bookDescription = (book) => {
  return `The book ${book.name} was written by ${book.author} in the year ${book.publishedYear}.`;
};

console.log(bookDescription(book));
