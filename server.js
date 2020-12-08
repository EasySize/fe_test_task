const path = require('path')
const express = require('express')
const app = express()
const port = 3333

app.use(express.static('public'))

app.listen(port, () => {
  console.log(`Starting server at http://localhost:${port}`)
})
