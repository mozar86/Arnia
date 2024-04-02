import mongoose from "mongoose";
import { databaseConfig } from "../config/databaseConfig";

mongoose.connect(databaseConfig.uri);

export { mongoose };
