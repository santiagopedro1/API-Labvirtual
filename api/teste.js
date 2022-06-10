const clientPromise = require('../mongodb-client')

export default async (req, res) => {
	const client = await clientPromise
	const collection = client.db('DBLabvirtual').collection('teste')
	try {
		const dados = await collection.findOne({})
		return res.send(dados)
	} catch (error) {
		return res.json(error.message)
	}
}
