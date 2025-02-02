import mongoose from "mongoose";

const redeSchema = new mongoose.Schema ({
    id: { type: mongoose.Schema.Types.ObjectId },
    nome: { type: String, required: true }
}, { versionKey: false });

const rede = mongoose.model("redes", redeSchema);

export default rede;