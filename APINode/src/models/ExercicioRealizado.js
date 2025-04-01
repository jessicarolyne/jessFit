import mongoose from "mongoose";

const ExercicioRealizadoSchema =  new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    treino: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "treino",
        required: [true, "O treino é obrigatório"]
    },
    exercicio: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "exercicio",
        required: [true, "O exercicio é obrigatório"]
    },
    dataRegistro: {
        type: Date,
        required: [true, "A data de registro é obrigatória"]
    }
}, { versionKey: false });

const ExercicioRealizado =  mongoose.model("exerciciosRealizado", ExercicioRealizadoSchema);

export default ExercicioRealizado;