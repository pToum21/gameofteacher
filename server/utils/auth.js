const jwt = require('jsonwebtoken')


const tokenSecret = process.env.SECERT || 'asddfsfd09f8w9'



module.exports = {
    authMiddleWare: ({ req }) => {
        const token = req.headers.authorization.split(" ").pop().trim();
        // Bearer

        if (!token) {
            return req
        }

        try {
            const { _id, name, username } = jwt.verify(token, tokenSecret, { maxAge: '7days' })
            req.user = { _id, name, username }
        } catch (error) {
            console.error('invalid token')
        }

        return req;
    },
    signToken: ({ _id, name, username }) => {
        return jwt.sign({
            _id, name, username
        }, tokenSecret, { expiresIn: '7days' })
    }
}