// định nghĩa schema của ứng dụng GraphQL bằng cách sử dụng GraphQL Schema Definition Language (SDL) được cung cấp bởi thư viện apollo-server-express.
// Mục đích chính của file này là định nghĩa cấu trúc dữ liệu và các loại truy vấn (queries) và biến đổi (mutations) mà người dùng có thể thực hiện 
// thông qua GraphQL.

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
    listBooks: [Book]
    listAuthors: [Author]
    bookByID(id: ID!): Book
    authorByID(id: ID!): Author
  }

  type Mutation {
    # Method name: input type : return type
    createAuthor( name: String, age: Int): Author

    createBook( name: String, genre: String, authorId: ID!): Book
  }
`;

module.exports = typeDefs;
 