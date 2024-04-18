import mongoose from "mongoose";
import { env } from "../env";

export async function connectDatabase() {
  mongoose.connection.once("open", () => {
    console.log("Database is running")
  })
  await mongoose.connect(env.DATABASE_URL)
}