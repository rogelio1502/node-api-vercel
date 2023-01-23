const express = require('express')
const items = require('./data').items
const app = express()
const PORT = 4000
var cors = require('cors')

app.use(cors())
app.listen(PORT, () => {
  console.log(`API listening on PORT ${PORT} `)
})

app.get('/', (req, res) => {
  let query = ''
  if (req.query.q) {
    query = req.query.q
  }

  console.log(query)

  let response = items.filter(
    i => i.text.toLowerCase().includes(query.toLocaleLowerCase()) && query != ''
  )
  res.json({ items: response })
})

app.get('/about', (req, res) => {
  res.send('This is my about route..... ')
})

// Export the Express API
module.exports = app
