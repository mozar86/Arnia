import { ObjectId, Db, Collection, WithId } from 'mongodb';
import { IUser, User } from './User';

export class UserRepository {
    usersCollection: Collection;
    constructor(db: Db) {
        this.usersCollection = db.collection('users');
    }

    async listAll() {
        return await this.usersCollection.find({}).toArray()
    }

    async listById(id: string): Promise<WithId<IUser> | null> {
        return await this.usersCollection.findOne<WithId<User>>({_id: new ObjectId(id)})
    }

    async saveUser(user: IUser) {
        return await this.usersCollection.insertOne(user)
    }

    async updateUser(id: string, user: IUser) {

    }

    async deleteUser(id: string) {
        
    }
}

