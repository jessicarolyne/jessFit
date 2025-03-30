import mongoose from "mongoose";

const academiaSchema =  new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId},
    cnpj: { 
        type: String, 
        required: [true, "O CNPJ é obrigatório"]
    },
    nome: { 
        type: String, 
        required: [true, "O nome da academia é obrigatório"]
    },
    rede: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "rede",
        required: false,
        // redeSchema
    }
}, {versionKey: false});

const academia = mongoose.model("academia", academiaSchema);

export default academia;