const mongoose = require('mongoose')
const log_ = mongoose.model('LOG_', {
  url: String,
  org: String,
  exc_message: String,
  status: String
})

const uri =
  'mongodb+srv://rogelio15:susana15@cluster0.uuakb.mongodb.net/?retryWrites=true&w=majority'
const run = (url, org, exc_message, status) => {
  mongoose.connect(uri)

  const new_log_ = new log_({ url, org, exc_message, status })
  return new_log_.save()
}

module.exports = { run }
