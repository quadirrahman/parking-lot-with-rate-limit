const express = require('express')
const cors = require('cors')
const app = express()
const PORT = 3060

const mongoose = require('./config/database')
const router = require('./config/routes')
const rateLimiterUsingThirdParty = require('./app/middlewares/rateLimiter')

app.use(express.json())
app.use(express.static('public'))
app.use(cors())
app.use(rateLimiterUsingThirdParty)

app.use('/', router)

app.listen(PORT, () => {
    console.log('listening on port', PORT)
})