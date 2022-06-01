require('dotenv').config();
const express = require('express')
const app = express()
const cors = require('cors')
const path = require('path')
app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './index.html'))
  })
//app.use('/js', express.static(path.join(__dirname, 'index.js')))


app.listen(process.env.SERVER_PORT, () => console.log(`${process.env.SERVER_PORT}`))