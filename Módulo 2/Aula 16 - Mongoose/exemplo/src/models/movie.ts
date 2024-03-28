import { Schema, model } from "mongoose"

// Configurar o Schema -> Template do objeto que iremos salvar no banco de dados
const MovieSchema = new Schema({
  title: { type: String  },
  releasedAt: { type: Date },
  category: { type: String, default: 'action'},
  durationInMinutes: { type: Number, min: 10 },
  review: { type: Number, default: 0 },
  status: { type: String, default: 'available' },
})

// Configurar o model -> Representação/Espelhamento da collection no nosso sistema
export const Movie = model("Movie", MovieSchema)

