import { connect, connection } from "mongoose"

export class Database {
  static async initialize() {
    connection.on("open", () => {
      console.log("Database is connected")
    })

    await connect(process.env.DATABASE_URL as string)
  }
}
