const express = require('express')
const routes = require('./routes.js')
const path = require('path')
const cors = require('cors')
require('dotenv').config()

const startServer = (cb) => {
    app.listen(port, () => {
        console.log(`[+] Server running on port ${port}`)
        cb()
    })
}

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//app.use(express.static(path.join(__dirname, '../frontend')))
app.use(cors())
app.use(routes)

startServer(() => {
    require('./database.js')
})