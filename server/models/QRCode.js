const { model, Schema, Types } = require('mongoose')

const scanEventSchema = new Schema({
    user: {
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

const QRCode = model('QRCode', qrCodeSchema)

module.exports = QRCode