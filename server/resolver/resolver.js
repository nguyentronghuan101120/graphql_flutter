// Chứa các resolver functions để thực hiện các hoạt động truy vấn (query) và biến đổi dữ liệu (mutation) trong một ứng dụng GraphQL.
// Mục đích chính của file này là cung cấp các hàm xử lý logic cho các truy vấn và biến đổi mà client GraphQL có thể thực hiện.

const resolvers = {
  // Query Resolvers: Định nghĩa các hàm xử lý cho các truy vấn được định nghĩa trong schema GraphQL,
  // chẳng hạn như lấy danh sách sách, danh sách tác giả, lấy thông tin của một cuốn sách dựa trên id, hoặc lấy thông tin của một tác giả dựa trên id.
  Query: {
    listBooks: async (parent, args, { mongoDataMethods }) =>
      await mongoDataMethods.getAllBooks(),

    listAuthors: async (parent, args, { mongoDataMethods }) =>
      await mongoDataMethods.getAllAuthors(),

    bookByID: async (parent, args, { mongoDataMethods }) =>
      await mongoDataMethods.getABookById(args.id),
    authorByID: async (parent, args, { mongoDataMethods }) =>
      await mongoDataMethods.getAnAuthorById(args.id),
  },

  // Type Resolvers (Book và Author):
  // Định nghĩa các hàm xử lý để giải quyết các trường dữ liệu phức tạp trong các kiểu đối tượng GraphQL như Book và Author.
  // Ví dụ, hàm để lấy tác giả của một cuốn sách, hoặc để lấy danh sách các sách của một tác giả.

  // Book schema
  Book: {
    author: async (parent, args, { mongoDataMethods }) =>
      await mongoDataMethods.getAnAuthorById(parent.authorId),
  },

  // Author schema
  Author: {
    books: async (parent, args, { mongoDataMethods }) =>
      await mongoDataMethods.getAllBooks({ authorId: parent.id }),
  },

  // Mutation Resolvers: Định nghĩa các hàm xử lý để thực hiện các biến đổi dữ liệu trong cơ sở dữ liệu,
  // như tạo mới một tác giả mới hoặc tạo mới một cuốn sách mới.
  Mutation: {
    createAuthor: async (parent, args, { mongoDataMethods }) =>
      await mongoDataMethods.createAuthor(args),
    createBook: async (parent, args, { mongoDataMethods }) =>
      await mongoDataMethods.createBook(args),
  },
};

module.exports = resolvers;
