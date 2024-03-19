//database
const { MongoClient } = require("mongodb")

const client = new MongoClient('mongodb+srv://fulano:arnia123@turma7.8hjtu4v.mongodb.net/')

const carCollection = client.db('turma7').collection('cars')

export = { carCollection, client }
