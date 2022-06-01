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

  var Rollbar = require("rollbar");
  var rollbar = new Rollbar({
    accessToken: 'b3db59174e404c0b97f077b05a595676',
    captureUncaught: true,
    captureUnhandledRejections: true
  });
  rollbar.log("Hello world!");

  try {
    nonExistentFunction();
  } catch (error) {
    console.error(error);
  }
  
const port = process.env.PORT || 4000
app.listen(port, () => console.log(`${port}`))