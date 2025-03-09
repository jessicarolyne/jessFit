import mongoose from "mongoose";

const ExercicioRealizadoSchema =  new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    treino: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "treinos",
        required: [true, "O treino é obrigatório"]
    },
    exercicio: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "exercicios",
        required: [true, "O exercicio é obrigatório"]
    },
    dataRegistro: {
        type: Date,
        required: [true, "A data de registro é obrigatória"]
    }
});

const ExercicioRealizado =  mongoose.model("ExerciciosRealizados", ExercicioRealizadoSchema);

export default ExercicioRealizado;