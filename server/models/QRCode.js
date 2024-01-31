const { model, Schema } = require('mongoose')

const qrCodeSchema = new Schema({
    
})

const User = model('QRCode', qrCodeSchema)

module.exports = QRCode