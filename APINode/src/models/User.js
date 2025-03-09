import mongoose from "mongoose";

const userSchema =  new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    nome: {
        type: String,
        required: [true, "O nome é obrigatório"]
    },
    password: {
        type: String,
        required: [true, "A senha é obrigatória"]
    }
});

const user = mongoose.model("user", userSchema);

export {user, userSchema };