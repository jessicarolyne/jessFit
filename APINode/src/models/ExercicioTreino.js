import mongoose from "mongoose";

const exercicioTreinoSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    series: {
        type: Number,
        required: [true, "O númere de séries é obrigatório"],
        min: [1, "O número de séries não pode ser inferior a 1"]
    },
    repeticoes: {
        type: Number,
        required: [true, "O número de repetições é obrigatório"],
        min: [1, "O número de repetições não pode ser inferior a 1"]
    },
    peso: {
        type: Number,
        required: [true, "O peso é obrigatório"],
        min: [1, "O peso não pode ser inferior a 1"]
    },
    criadoEm: { 
        type: Date,
        required: [true, "A data de criação é obrigatória"]
    },
    atualizadoEm: { 
        type: Date,
        required: false
    },
    observacoes: {
        type: String,
        required: false
    },
    exercicio: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "exercicio",
        required: [true, "O exercicio é obrigatório"]
    },
    treino: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "treino",
        required: [true, "O treino é obrigatório"]
    }
});

const exercicioTreino = mongoose.model("exercicioTreino", exercicioTreinoSchema);

export default exercicioTreino;