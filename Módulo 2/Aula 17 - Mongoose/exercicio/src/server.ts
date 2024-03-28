import "doentv/config"
import express from "express"
import {Database} from "./database/connection"
import {Rifa} from "./models/rifa"

Database.inicializacao()

const app = express()
app.use(express.json())

