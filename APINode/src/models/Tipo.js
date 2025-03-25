import mongoose from "mongoose";

const tipoSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    nome: {
        type: String,
        required: [true, "O nome é obrigatório"],
        enum: {
            values: ["Musculação", "HIIT"],
            message: "{VALUE} não é um valor permitido."
        }
    }
}, { versionKey: false });

const tipo = mongoose.model("tipos", tipoSchema);

export { tipo, tipoSchema };