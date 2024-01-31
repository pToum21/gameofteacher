const gql = String.raw

module.exports = gql`
type User {
_id: ID
role: String
name: String
username: String
}

type Mutation {
    createUser(name: String!, username: String!, password: String! ): User
}

type Query {
    hello: String
}
`;