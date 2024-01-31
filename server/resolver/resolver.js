const { books, authors } = require("../data/static");

const resolvers = {
  // Query
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

  // Mutation
  Mutation: {
    createAuthor: (parent, args) => args,
    createBook: (parent, args) => args,
  },
};

module.exports = resolvers;
