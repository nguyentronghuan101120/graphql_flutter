const { books, authors } = require("../data/static");

const resolvers = {
  // Query schema
  Query: {
    getListBooks: () => books,

    getListAuthors: () => authors,

    getABookWithId: (parent, args) =>
      books.find((data) => data.id.toString() === args.id.toString()),
    getAnAuthorWithId: (parent, args) =>
      authors.find((data) => data.id.toString() === args.id.toString()),
  },

  // Book schema
  Book: {
    author: (parent, args) =>
      authors.find((data) => data.id.toString() === parent.id.toString()),
  },

  // Author schema
  Author: {
    books: (parent, args) =>
      books.filter((data) => data.authorId.toString() === parent.id.toString()),
  },
};

module.exports = resolvers;
