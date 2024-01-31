const express = require('express')
const { typeDefs, resolvers } = require('./schemas')
const { expressMiddleware } = require('@apollo/server/express4');

const { ApolloServer } = require('@apollo/server')

const server = new ApolloServer({
    typeDefs, resolvers
})

const app = express()

const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }))

const db = require('./config/connection')

const startApolloServer = async () => {
    await server.start();

    app.use('/graphql', expressMiddleware(server))

    db.once('open', () => {
        app.listen(PORT, () => {
            console.log(`API server running on port http://localhost:${PORT}/`);
            console.log(`Use GraphQL at http://localhost:${PORT}/graphql`);
        });
    });

}

startApolloServer();


