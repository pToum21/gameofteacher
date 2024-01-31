const { User, QRCode } = require('../models')
const {signToken} = require('../../utils/auth')
module.exports = {
    Mutation: {
        createUser: async (parent, args) => {
            try {
                const user = await User.create(args);
                const token = signToken(user)

                return { user, token }
            } catch (error) {
                console.error(error)
                throw new Error(error)
            }
        },
        createQRCode: async (parent, args) => {
            try {
                const qrCode = new QRCode();
                return await qrCode.save()
            } catch (error) {
                console.error(error)
                throw new Error(error)
            }
        },
        scanQRCode: async (parent, args, context) => {
            return await QRCode.findByIdAndUpdate(args.id, {
                $push: {
                    scanEvents: {
                        user: context.user._id
                    }
                }
            }, { new: true });
        }
    },
    Query: {
        getQRCode: async (parent, args) => {
            try {
                return await QRCode.findById(args.id)
            } catch (error) {
                console.error(error)
                throw new Error(error)
            }
        }
    }
}