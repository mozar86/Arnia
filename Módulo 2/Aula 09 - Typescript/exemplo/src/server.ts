import UserRepository from "./UsersRepository";
import { User } from "./User";
import { MongoClient } from 'mongodb';

const url = ''
const client = new MongoClient(url)
const dbName = 'MyDatabase'

async function main() {
    await client.connect()
    const db = client.db(dbName)

    const userRepository = new UserRepository(db)

    const brenoUser = await userRepository.listById("")
    console.log(brenoUser)

    //const listUsers = await userRepository.listAll()
    //console.log(listUsers)

    return 'Done.'
}

