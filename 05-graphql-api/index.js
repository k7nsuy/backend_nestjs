import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

// The GraphQL schema
const typeDefs = `#graphql
  type Query {
    fetchBoards: String
  }

  type Mutation {
    createBoards: String
  }
`;

// A map of functions which return data for the schema.
const resolvers = {
  Query: {
    fetchBoards: () => {
        const result = [
            {number: 1,
            writer: '철수',
            title: '제목',
            contents: '내용'},
            {number: 2,
            writer: '철수2',
            title: '제목',
            contents: '내용'},
            {number: 3,
            writer: '철수3',
            title: '제목',
            contents: '내용'}
        ]
        
        return result
    }
  },

  Mutation: {
    createBoards: () => {

        return '등록 성공하였습니다.'
    }
  }
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server);
console.log(`🚀 Server ready at ${url}`);