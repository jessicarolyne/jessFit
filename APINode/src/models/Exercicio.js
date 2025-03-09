import mongoose from "mongoose";

const exercicioSchema =  new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    nome: {
        type: String,
        required: [true, "O nome do exercicio é obrigatório"]
    },
    imagem: {
        type: String,
        required: false
    },
    tipo: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "tipo",
        required: false
    }
})

const exercicio = mongoose.model("exercicios", exercicioSchema);

export default exercicio;