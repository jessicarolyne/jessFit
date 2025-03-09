import mongoose from "mongoose";

const treinoSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    nome: {
        type: String,
        required: [true, "O nome do treino é obrigatório"]
    }
});

const treino = mongoose.model("treino", treinoSchema);

export { treino, treinoSchema };