import NaoEncontrado from "../erros/NaoEncontrado.js";
import { rede } from "../models/Rede.js";

class RedeController {
    static async listarRedes(req, res, next) {
        try {
            const listaRedes = await rede.find({});
            res.status(200).json(listaRedes);
        } catch (error) {
            next(error);
        }
    }

    static async listarRedePorId(req, res, next) {
        try {
            const id = req.params.id;
            const redeEncontrada = await rede.findById(id);

            if(redeEncontrada != null) {
                res.status(200).json(redeEncontrada);
            } else {
               next(new NaoEncontrado("Id da rede não localizado"));
            }
        } catch (error) {
           next(error);
        }
    }

    static async cadastrarRede(req, res, next) {
        try {
            const newRede = await rede.create(req.body);
            res.status(201).json({ message: "Criado com sucesso!", rede: newRede });
        } catch (error) {
            next(error);
        }
    }
    static async atualizarRede(req, res, next) {
        try {
            const id = req.params.id;
            await rede.findByIdAndUpdate(id, req.body);
            res.status(200).json({message: "Rede atualizada"});
        } catch (error) {
            next(error);
        }
    }
    static async excluirRede(req, res, next) {
        try {
            const id = req.params.id;
            await rede.findByIdAndDelete(id, req.body);
            res.status(200).json({message: "Rede excluida"});
        } catch (error) {
            next(error);
        }
    }
};

export default RedeController;