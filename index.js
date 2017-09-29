const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.get('/homework', function (req, res) {
  res.send({
  "name": "陳穎萱",
  "email": "ariel80132@hotmail.com"
})
})

app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`)
})
