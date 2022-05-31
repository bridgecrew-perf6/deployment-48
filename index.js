const express = require('express')
const app = express()
const cors = require('cors')

app.use(express.json())
app.use(cors())

app.get('/js', (req, res) => {
    res.sendFile(path.join(__dirname, './index.js'))
  })
app.use('/js', express.static(path.join(__dirname, 'index.js')))