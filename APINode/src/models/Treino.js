import mongoose from "mongoose";

const treinoSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    nome: {
        type: String,
        required: [true, "O nome do treino é obrigatório"]
    },
    criadoEm: { 
        type: Date,
        required: [true, "A data de criação é obrigatória"]
    },
    atualizadoEm: { 
        type: Date,
        required: false
    },
    finalizadoEm: { 
        type: Date,
        required: false
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required: [true, "O usuário é obrigatório"]
    }
});

const treino = mongoose.model("treino", treinoSchema);

export { treino, treinoSchema };