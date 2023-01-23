const express = require('express')
const items = require('./data').items
const app = express()
const PORT = 4000

app.listen(PORT, () => {
  console.log(`API listening on PORT ${PORT} `)
})

app.get('/', (req, res) => {
  let query = req.query.q
  let response = items.filter(i =>
    i.name.toLowerCase().includes(query.toLocaleLowerCase())
  )
  res.json(response)
})

app.get('/about', (req, res) => {
  res.send('This is my about route..... ')
})

// Export the Express API
module.exports = app
