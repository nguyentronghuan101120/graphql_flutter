/// Có trách nhiệm tạo ra khung sườn, cấu trúc khi trả data ra khi query đến

const { gql } = require("apollo-server-express");
const typeDefs = gql`
  type Book {
    id: ID
    name: String
    genre: String
    # Một quyển sách có 1 tác giả
    author: Author
  }

  type Author {
    # Khi query đến author sẽ bắt buộc trả ra ID chứ không null
    id: ID!
    name: String
    age: String
    # Một tác giả có nhiều quyển sách
    books: [Book]
  }

  type Query {
    getListBooks: [Book]
    getListAuthors: [Author]
    getABookWithId(id: ID!): Book
    getAnAuthorWithId(id: ID!): Author
  }

  type Mutation {
    # Method name: input type : return type
    createAuthor(id: ID!, name: String, age: Int): Author

    createBook(id: ID!, name: String, genre: String, authorId: ID!): Book
  }
`;

module.exports = typeDefs;
