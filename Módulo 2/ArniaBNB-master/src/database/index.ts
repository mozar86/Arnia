import mongoose from "mongoose";
import { databaseConfig } from "../config/databaseConfig";

mongoose.connect(String(databaseConfig.uri));

export { mongoose };