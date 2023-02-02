import { ApolloServer} from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { getToken, checkThePhoneNumber, sendTokenToSMS} from './phone.js'

// The GraphQL schema
const typeDefs = `#graphql
  input CreateBoardInput {
    writer: String
    title: String
    contents: String  
  }

  type BoardReturn {
    number: Int
    writer: String
    title: String
    contents: String
  }



  type Query {
    # fetchBoards: BoardReturn => 객체 1개를 의미
    fetchBoards: [BoardReturn] # 배열 안에 객체 1개 이상을 의미
  }

  type Mutation {
    createBoards(writer:String, title:String, contents:String): String
    createBoards2(createBoardInput: CreateBoardInput): String
    createTokenOfPhone(phoneNumber: String): String
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
    createBoards: (_,args) => {
        console.log(args);

        return '등록 성공하였습니다.'
    },

    createBoards2: (_,args) => {
        console.log(args);

        return '등록 성공하였습니다.'
    },

    createTokenOfPhone: (_ ,args) => {
        const isValid = checkThePhoneNumber(args.phoneNumber)
        // 2. create 6 numbers of token
        if (isValid) {
            const myToken = getToken()
        // 3. send the token number to the user's phone
            sendTokenToSMS(args.phoneNumber, myToken)
            return "인증 완료!"
        }
    }
  }
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server);
console.log(`🚀 Server ready at ${url}`);