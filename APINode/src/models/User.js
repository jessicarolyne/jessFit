import mongoose from "mongoose";

const userSchema =  new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    nome: {
        type: String,
        required: [true, "O nome é obrigatório"]
    },
    password: {
        type: String,
        required: [true, "A senha é obrigatória"],
        min: [6, 'A senha deve conter mais de 6 caracteres']
    }
}, { versionKey: false });

const user = mongoose.model("users", userSchema);

export { user, userSchema };