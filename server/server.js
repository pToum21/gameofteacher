const express = require('express')

const app = express()

const PORT = process.env.PORT || 3001;

const db = require('./config/connection')

db.once('open', () => {
    
})

app.listen(PORT, () => {
    console.log(`Server runnning at http://localhost:${PORT}/`)
});