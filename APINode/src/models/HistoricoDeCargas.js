import mongoose from "mongoose";

const HistoricoDeCargasSchema =  new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    exercicioTreino: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "ExerciciosRealizados",
        required: [true, "Exercicio/Treino obrigatório"]
    },
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
    dataRegistro: {
        type: Date,
        required: [true, "A data de registro é obrigatória"]
    }
}, {versionKey: false});

const HistoricoDeCarga = mongoose.model("HistoricoDeCargas", HistoricoDeCargasSchema);

export default HistoricoDeCarga;