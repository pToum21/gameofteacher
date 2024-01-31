const gql = String.raw

module.exports = gql`
type User {
_id: ID
role: String
name: String
username: String
}

type ScanEvent {
    user: User
    createdAt: String

}

type QRCode {
    _id: ID
    scanEvents: [ScanEvent]
    createdAt: String
}

type Auth {
    user: User
    token: ID
}

type Mutation {
    createUser(name: String!, username: String!, password: String! ): Auth
    createQRCode: QRCode 
    scanQRCode(id: ID): QRCode
}

type Query {
    getQRCode(id: ID): QRCode
}
`;