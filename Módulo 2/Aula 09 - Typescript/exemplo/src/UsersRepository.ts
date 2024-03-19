import { ObjectId, Db, Collection } from 'mongodb';

class UserRepository {
    usersCollection: Collection;
    constructor(db: Db) {
        this.usersCollection = db.collection('users');
    }

    async listAll() {
        return await this.usersCollection.find({}).toArray()
    }

    async listById(id) {
        return await this.usersCollection.findOne({_id: new ObjectId(id)})
    }

    async saveUser(user) {
        return await this.usersCollection.insertOne(user)
    }

    async updateUser(id, user) {

    }

    async deleteUser(id) {
        
    }
}

