const express = require('express')
const path = require('path')
require('dotenv').config()

const app = express()
const PORT = process.env.PORT || 5000

app.use('/static', express.static(path.join(__dirname, 'static')))

app.get('/', (req, res) => {
    res.sendFile(__dirname+'/views/index.html')
})

app.listen(PORT, () => {
    console.log(`Listening on PORT ${PORT}`)
})