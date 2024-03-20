import UserRepository from "./UsersRepository";
import { User } from "./User";
import { MongoClient } from 'mongodb';

const url = 'mongodb+srv://lucresequiser:ml163086@cluster1.vmygcm6.mongodb.net/'
const client = new MongoClient(url)
const dbName = 'MyDatabase'

async function main() {
    await client.connect()
    const db = client.db(dbName)

    const userRepository = new UserRepository(db)

    const brenoUser = await userRepository.listById("")
    //if(!brenoUser) {
    //    return 'Usuário não encontrado'
    //}
    console.log(brenoUser?.age ? brenoUser.age : "Idade não informada!") 

    //const listUsers = await userRepository.listAll()
    //console.log(listUsers)

    return 'Done.'
}

