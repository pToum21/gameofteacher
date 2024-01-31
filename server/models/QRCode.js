const { model, Schema, Types } = require('mongoose')

const scanEventSchema = new Schema({
    userId: {
        type: Types.ObjectId,
        ref: 'User'
    },

}, {
    timestamps: true
})

const qrCodeSchema = new Schema({
    scanEvents: [scanEventSchema],
}, {
    timestamps: true
})

const User = model('QRCode', qrCodeSchema)

module.exports = QRCode