const { User } = require('../models')

module.exports = {
    Mutation: {
        createUser: async (parent, args) => {
            try {
                return await User.create(args);
            } catch (error) {
                console.error(error)
                
            }
        }
    },
    Query: {
        hello: async () => {
            return hello
        }
    }
}