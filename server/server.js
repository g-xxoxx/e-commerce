const express = require('express')
require('dotenv').config()

const app = express()
const port = process.env.PORT || 8888
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/', (req, res) => { res.send("Server Onn") })
app.listen(port, () => {
    console.log("Server is running:" + port)
})