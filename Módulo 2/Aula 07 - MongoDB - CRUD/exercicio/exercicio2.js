const { MongoClient, ObjectId } = require('mongodb')
const client = new MongoClient('mongodb+srv://lucresequiser:ml163086@cluster1.vmygcm6.mongodb.net/')
const marketCollection = client.db('market').collection('products')

//class
class Produto {
    nome
    descricao
    preco
    estoque
    categoria

    constructor (data) {
        this.id = new Date().getTime()
        this.nome = data.nome
        this.descricao = data.descricao
        this.preco = data.preco
        this.estoque = data.estoque
        this.categoria = data.categoria
    }
}
//create
async function createProduct(data) {
    const product = await marketCollection.insertOne({
        nome: data.nome,
        descricao: data.descricao,
        preco: data.preco,
        estoque: data.estoque,
        categoria: data.categoria
    })
    console.log(product)
    client.close()
}
//read
async function getProductByName (data) {
    const product = await marketCollection.findOne({ nome })
    console.log(product)
}

async function listProductsByCategory(data) {
    const product = await marketCollection.find({ categoria }).toArray()
    console.log(product)
}
//update
async function updateProduct(id, data) {
    await marketCollection.findOneAndUpdate(
        { _id: new ObjectId(id) },
        { $set: {...data} }
    )
}
//delete
async function deleteProduct(id) {
    const deleted = await marketCollection.findOneAndDelete({
        _id: new ObjectId(id)
    })
    console.log(`O produto ${deleted} foi deletado do sistema!`)
}

createProduct( {nome:'Feijão Turquesa', descricao:'Pacote 1kg', preco:'R$ 7,99', estoque:'Quantidade em estoque: 229 unidades', categoria:'Cereais'} )