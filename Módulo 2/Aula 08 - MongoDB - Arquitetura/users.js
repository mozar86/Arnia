const { db } = require('../database')

class UserRepository {
    usersCollection
    constructor() {
        this.usersCollection = db.collection('users')
    }
    async listAll() {
        return await this.usersCollection.find({})
    }
}