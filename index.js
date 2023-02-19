const express = require('express')
const items = require('./data').items
const app = express()
const PORT = 4000
const client = require('./db/client')
var cors = require('cors')
app.use(express.json())

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

app.get('/assets-webhook', (req, res) => {
  console.log('ok')
  let body = req.query
  client
    .run(body.url, body.org, body.exc_message, body.status)
    .then(r => {
      res.status(201).send()
    })
    .catch(e => {
      console.log(e)
      res.status(400).send()
    })
})

// Export the Express API
module.exports = app
