import mongoose from "mongoose";

const pessoaSchema =  new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    nome: {
        type: String,
        required: [true, "O nome é obrigatório"]
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required: [true, "O nome de usuário é obrigatório"]
    },
});

const pessoa = mongoose.model("pessoa", pessoaSchema);

export default pessoa;