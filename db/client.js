const mongoose = require('mongoose')
const Promedica = mongoose.model('Promedica', {
  url: String,
  org: String,
  exc_message: String,
  status: String
})

const Paramount = mongoose.model('Paramount', {
  url: String,
  org: String,
  exc_message: String,
  status: String
})

const SeniorCare = mongoose.model('SeniorCare', {
  url: String,
  org: String,
  exc_message: String,
  status: String
})
const uri =
  'mongodb+srv://rogelio15:susana15@cluster0.uuakb.mongodb.net/?retryWrites=true&w=majority'
const run = (url, org, exc_message, status) => {
  mongoose.connect(uri)
  let o
  switch (org.toLowerCase()) {
    case 'promedica':
      o = new Promedica({ url, org, exc_message, status })
      return o.save()

    case 'paramount':
      o = new Paramount({ url, org, exc_message, status })
      return o.save()
    case 'seniorcare':
      o = new SeniorCare({ url, org, exc_message, status })
      return o.save()
    default:
      break
  }
}

module.exports = { run }
