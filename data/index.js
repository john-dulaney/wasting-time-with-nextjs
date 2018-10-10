const { GraphQLServer } = require('graphql-yoga')

const typeDefs = `
type Query {
  info: String!,
  asdf: String!
}
`

const resolvers = {
  Query: {
    info: () => `Test gql shit`,
    asdf: () => `asdfsdfasdfasdasdfdasfasdfsadfasdf`
  }
}

// 3
const server = new GraphQLServer({
  typeDefs,
  resolvers,
})
server.start(() => console.log(`Server: http://localhost:4000`))
