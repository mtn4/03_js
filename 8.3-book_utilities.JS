const book1 = {
  name: "QWERTY",
  author: "YTREWQ",
  pages: 52,
  genres: ["A", "B", "C"],
  year: 1990,
};
const book2 = {
  name: "ASDFG",
  author: "GFDSA",
  pages: 111,
  genres: ["A", "B", "C"],
  year: 2007,
};

const bookUtils = {
  getFirstPublished(book1, book2) {
    return Math.min(book1.year, book2.year);
  },
  setNewEdition(book, editionYear) {
    book.latestEdition = editionYear;
  },
  setLanguage(book, language) {
    book.language = language;
  },
  setTranslation(book, language, translator) {
    book.translation = {
      language,
      translator,
    };
  },
  setPublisher(book, name, location) {
    book.publisher = {
      name,
      location,
    };
  },
  isSamePublisher(book1, book2) {
    return (
      book1.publisher.name === book2.publisher.name &&
      book1.publisher.location === book2.publisher.location
    );
  },
};

console.log("First Published", bookUtils.getFirstPublished(book1, book2));
bookUtils.setNewEdition(book1, 1990);
bookUtils.setLanguage(book2, "English");
bookUtils.setTranslation(book2, "English", "ZXC");
bookUtils.setPublisher(book1, "CVB", "IL");
bookUtils.setPublisher(book2, "CVB", "IL");
console.log("Same Publisher", bookUtils.isSamePublisher(book1, book2));
console.log("Book1 Details", book1);
console.log("Book2 Details", book2);
