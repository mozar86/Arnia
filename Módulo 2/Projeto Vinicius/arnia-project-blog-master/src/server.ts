require("dotenv").config();
import express from "express";
import router from "./routes";
import { logger } from "./middlewares/logger";

const app = express();
app.use(express.json());
app.use(logger);

app.use("/", router);

app.listen(process.env.PORT, () => console.log(`Servidor rodando na porta ${process.env.PORT}!`));
