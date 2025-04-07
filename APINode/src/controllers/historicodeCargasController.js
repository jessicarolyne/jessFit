import { HistoricoDeCarga, exercicioTreino } from "../models/index.js";

class HistoricodeCargasController {
    static async listarHistoricodeCargas(req, res, next) {
        try {
                   const buscaHistoricoDeCargas = HistoricoDeCarga.find();
                   req.resultado = buscaHistoricoDeCargas;
                   next();
               } catch (error) {
                   next(error)
               }
    }

    static async listarHistoricodeCargasPorId(req, res, next) {
        try {
            const id = req.params.id;
            const historicoEncontrado = await HistoricoDeCarga.findById(id);
            res.status(200).json(historicoEncontrado);
        } catch (error) {
            next(error)
        }
    }

    static async listarHistoricodeCargasPorExercicioTreino(req, res, next) {
        const idExercicioTreino = req.query.treino;
        try {
            const listaHistoricodeCargas = await HistoricoDeCarga.find({"exercicioTreino.id": idExercicioTreino});
            res.status(200).json(listaHistoricodeCargas);
        } catch (error) {
            next(error)
        }
    }

    static async cadastrarHistoricodeCargas(req, res, next) {
        const newHistoricodeCargas = req.body;
        try {
            const exercicioTreinoEncontrado = await exercicioTreino.findById(newHistoricodeCargas.exercicioTreino);
            const historicoDeCargaCompleto = { ...newHistoricodeCargas, exercicioTreino: { ...exercicioTreinoEncontrado._doc }};
            await HistoricoDeCarga.create(historicoDeCargaCompleto);
            res.status(201).json({ message: "Criado com sucesso!", historicoDeCarga: newHistoricodeCargas });
        } catch (error) {
            next(error)
        }
    }

    static async atualizarHistoricodeCargas(req, res, next) {
        try {
            const id = req.params.id;
            await HistoricoDeCarga.findByIdAndUpdate(id, req.body);
            res.status(200).json({message: "Histórico atualizado!"});
        } catch (error) {
            next(error);
        }
    }

    static async excluirHistoricodeCargas(req, res, next) {
        try {
            const id = req.params.id;
            await HistoricoDeCarga.findByIdAndDelete(id, req.body);
            res.status(200).json({message: "Histórico excluido!"});
        } catch (error) {
            next(error);
        }
    }
}

export default HistoricodeCargasController;