const jwt = require('jsonwebtoken')
const tokenSecret = process.env.SECERT || 'asddfsfd09f8w9'



module.exports = {
    signToken: ({ _id, name, username }) => {
        return jwt.sign({
            _id, name, username
        }, tokenSecret, { expiresIn: '7days' })
    }
}