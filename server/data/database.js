const BookModel = require("../models/book");
const AuthorModel = require("../models/author");

const mongoDataMethods = {
  getAllBooks: async (condition = null) =>
    condition === null
      ? await BookModel.find()
      : await BookModel.find(condition),
  getAllAuthors: async () => await AuthorModel.find(),

  getABookById: async (id) => await BookModel.findById(id),
  getAnAuthorById: async (id) => await AuthorModel.findById(id),

  createBook: async (args) => {
    const newData = BookModel(args);

    return await newData.save();
  },

  createAuthor: async (args) => {
    const newData = AuthorModel(args);

    return await newData.save();
  },
};

module.exports = mongoDataMethods;
