import mongoose from "mongoose";

const treinoRealizadoSchema =  new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    treino: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "treinos",
        required: [true, "O treino é obrigatório"]
    },
    dataExecucao: {
        type: Date,
        required: [true, "A data é obrigatória"]
    },
    duracaoMinutos: {
        type: Number, //Tempo em minutos
        required: [true, "O tempo de treino é obrigatório"],
        min: [1, "O tempo mínimo do treino deve ser 1 minuto"]
    },
});

const treinoRealizado = mongoose.model("treinosRealizados", treinoRealizadoSchema);

export default treinoRealizado;