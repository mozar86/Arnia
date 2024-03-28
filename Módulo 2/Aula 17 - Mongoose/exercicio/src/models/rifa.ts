import { Schema, model } from "mongoose"

const RifaSchema = new Schema({
    titulo: {String, },
    valorMinimo: {Number, Required: true},
    valorGerado: {Number, Required: true},
    dataInclusao: Date
})

export const Rifa = model("Rifa", RifaSchema)