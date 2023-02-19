const { MongoClient } = require('mongodb')
// Replace the uri string with your MongoDB deployment's connection string.

async function run (url, org, exc_message, status) {
  const uri =
    'mongodb+srv://rogelio15:susana15@cluster0.uuakb.mongodb.net/?retryWrites=true&w=majority'
  const client = new MongoClient(uri)
  const database = client.db('pmdt')
  try {
    const haiku = database.collection(org)
    // create a document to insert
    const doc = {
      url,
      org,
      exc_message,
      status
    }
    const result = await haiku.insertOne(doc)
    console.log(`A document was inserted with the _id: ${result.insertedId}`)
  } finally {
    await client.close()
  }
}

module.exports = {
  run
}
