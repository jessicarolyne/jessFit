import mongoose from "mongoose";
import { redeSchema } from "./Rede.js";

const academiaSchema =  new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId},
    cnpj: { type: String, required: true},
    nome: { type: String, required: true},
    rede: redeSchema
}, {versionKey: false});

const academia = mongoose.model("academias", academiaSchema);

export default academia;