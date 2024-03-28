import {connect, connection} from "mongoose"

export class Database {
    static async inicializacao() {
        connection.on("aberta", () => {
            console.log("Database está conectado")
        })

        await connect(process.env.DATABASE_URL as string)
    }
}