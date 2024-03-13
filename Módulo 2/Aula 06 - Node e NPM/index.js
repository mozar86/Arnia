const mongodb = require('mongodb')

// Class constructor MongoClient cannot be invoked without 'new'
const client = new mongodb.MongoClient('mongodb+srv://fulano:arnia123@turma7.8hjtu4v.mongodb.net/')
// cluster -> grupo de collections
const cluster = client.db('turma7')
// collections -> listagem onde eu armazeno objetos
const carCollection = cluster.collection('cars')

// CRUD -> create, read, update & delete

// assincrona
// const user = await createUser
// console.log(user)

async function createCar() {
  const car = await carCollection.insertOne({
    modelo: '208',
    marca: 'peugeot',
    cor: 'cinza'
  })
  console.log(car)
  client.close()
}

async function listCars() {
  const cars = await carCollection.find().toArray()
  console.log(cars)
  client.close()
}

async function getCarById() {
  const car = await carCollection.findOne({
    _id: new mongodb.ObjectId('65efa99610ee55a19780c926'),
  })
  console.log(car)
  client.close()
}

// createCar()
// listCars()
getCarById()