const clientPromise = require('../mongodb-client')

export default async (req, res) => {
	const dataSG = new Date(new Date().getTime() + new Date().getTimezoneOffset() * 60000 + 3600000 * -3)
	const client = await clientPromise
	const collection = client.db('DBLabvirtual').collection('Dados_Sensores')
	try {
		const dados = await collection.findOne({ _id: dataSG.toLocaleDateString('pt-BR') })
		return res.send(dados)
	} catch (error) {
		return res.json(error.message)
	}
}
