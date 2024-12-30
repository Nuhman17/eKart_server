require('dotenv').config()

const express = require('express')
const cors = require('cors')
require('./Connection/db')
const route = require('./Routes/routes')

const ekartServer = express()
ekartServer.use(cors())
ekartServer.use(express.json())
ekartServer.use(route)

const PORT = 3000 || process.env.PORT

ekartServer.listen(PORT, () => {
    console.log("Server Running At:", PORT)
})

ekartServer.get('/', (req, res) => {
    res.send("<h1>Ekart Server is Active!!</h1>")
})