const express = require('express')
const {typeDefs, resolvers} = require('./schemas')

const { ApolloServer } = require('@apollo/server')

const server = new ApolloServer('/graphql',{
    typeDefs, resolvers
})

const app = express()

const PORT = process.env.PORT || 3001;

const db = require('./config/connection')

db.once('open', () => {
    app.listen(PORT, () => {
        console.log(`API server running on port ${PORT}!`);
        console.log(`Use GraphQL at http://localhost:${PORT}/graphql`);
    });
});

