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
}, { versionKey: false });

const exercicio = mongoose.model("exercicio", exercicioSchema);

export default exercicio;