// Import the dependency.
const { MongoClient } = require('mongodb')

const uri = process.env.MONGO_API_URI
const options = {
	useUnifiedTopology: true,
	useNewUrlParser: true,
}

let client
let clientPromise

// In production mode, it's best to not use a global variable.
client = new MongoClient(uri, options)
clientPromise = client.connect()

// Export a module-scoped MongoClient promise. By doing this in a
// separate module, the client can be shared across functions.
module.exports = clientPromise
