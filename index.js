const express = require('express');
const cors = require('cors')
const { ApolloServer, gql } = require('apollo-server-express');

// Construct a schema, using GraphQL schema language
const typeDefs = gql`
  type Query {
    hello: String
  }
`;

// Provide resolver functions for your schema fields
const resolvers = {
  Query: {
    hello: () => 'Hello world!',
  },
};

const server = new ApolloServer({ typeDefs, resolvers, introspection: true, playground: true });

const app = express();
app.use(cors())

server.applyMiddleware({ app });

app.listen(process.env.PORT || 4000, 
	() => console.log(`🚀 Server ready at ...`))
