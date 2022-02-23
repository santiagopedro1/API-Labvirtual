const clientPromise = require('../mongodb-client')

export default async (req, res) => {
	const client = await clientPromise
	const collection = client.db('DBLabvirtual').collection('Dados_Sensores')
	try {
		const dados = await collection.findOne({ _id: new Date().toLocaleDateString('pt-BR') })
		return res.send(dados)
	} catch (error) {
		return res.json(error.message)
	}
}
