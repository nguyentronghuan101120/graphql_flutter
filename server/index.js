const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const mongoose = require("mongoose");

// Load schema & resolvers
const typeDefs = require("./schema/schema");
const resolvers = require("./resolver/resolver");

// Load DB methods
const mongoDataMethods = require("./data/database");

// Connect to MongoDB
const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://nguyentronghuan101120:huanm1@cluster0.oegx22z.mongodb.net/?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );

    console.log("MongoDB connected");
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
};

connectDB();

const app = express();

let apolloServer = null;

async function startServer() {
  apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
    context: () => ({ mongoDataMethods }),
  });
  await apolloServer.start();
  apolloServer.applyMiddleware({ app });
}

startServer();

app.listen({ port: 4000 }, () => {
  console.log(
    `Server ready at http://localhost:4000${apolloServer.graphqlPath}`
  );
});
