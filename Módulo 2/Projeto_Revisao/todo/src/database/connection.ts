import mongoose from "mongoose"

export class Database {
  static async initialize() {
    mongoose.connection.on("open", () => {
      console.log("Database is running")
    })
    await mongoose.connect(process.env.DATABASE_URL as string)
  }
}

