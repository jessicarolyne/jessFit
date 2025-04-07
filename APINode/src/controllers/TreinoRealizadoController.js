import { treino, treinoRealizado } from "../models/index.js";

class TreinoRealizadoController {
    static async listarTreinosRealizados(req, res, next) {
        try {
            const buscaTreinoRealizado = treinoRealizado.find();
            req.resultado = buscaTreinoRealizado;
            next();
        } catch (error) {
            next(error)
        }
    }

    static async listarTreinoRealizadoPorId(req, res, next) {
        try {
            const id = req.params.id;
            const treinoRealizadoEncontrado = await treinoRealizado.findById(id);
            res.status(200).json(treinoRealizadoEncontrado);
        } catch (error) {
            next(error)
        }
    }

    static async listarTreinoRealizadoPorTreino(req, res, next) {
        const idTreino = req.query.treino;
        try {
            const listaTreinoRealizado = await treinoRealizado.find({"treino.id": idTreino});
            res.status(200).json(listaTreinoRealizado);
        } catch (error) {
            next(error)
        }
    }

    static async cadastrarTreinoRealizado(req, res, next) {
        const newTreinoRealizado = req.body;
        try {
            const treinoEncontrado = await treino.findById(newTreinoRealizado.treino);
            const treinoRealizadoCompleto = { ...newTreinoRealizado, tipo: { ...treinoEncontrado._doc }};
            await treinoRealizado.create(treinoRealizadoCompleto);
            res.status(201).json({ message: "Criado com sucesso!", treinoRealizado: newTreinoRealizado });
        } catch (error) {
            next(error)
        }
    }

    static async atualizarTreinoRealizado(req, res, next) {
        try {
            const id = req.params.id;
            await treinoRealizado.findByIdAndUpdate(id, req.body);
            res.status(200).json({message: "Treino Realizado atualizado!"});
        } catch (error) {
            next(error);
        }
    }

    static async excluirTreinoRealizado(req, res, next) {
        try {
            const id = req.params.id;
            await treinoRealizado.findByIdAndDelete(id, req.body);
            res.status(200).json({message: "Treino Realizado excluido!"});
        } catch (error) {
            next(error);
        }
    }
}

export default TreinoRealizadoController;