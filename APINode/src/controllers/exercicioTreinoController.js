import { exercicio, exercicioTreino, treino } from "../models/index.js";

class ExercicioTreinoController {
    static async listarExerciciosTreinos(req, res, next) {
        try {
            const listaExercicios = await exercicioTreino.find().populate('treino').populate('exercicio');
            res.status(200).json(listaExercicios);
        } catch (error) {
            next(error)
        }
    }

    static async listarExercicioTreinoPorId(req, res, next) {
        try {
            const id = req.params.id;
            const exercicioEncontrado = await exercicioTreino.findById(id);
            res.status(200).json(exercicioEncontrado);
        } catch (error) {
            next(error)
        }
    }

    static async listarExerciciosTreinosPorTreino(req, res, next) {
        const idTreino = req.query.treino;
        try {
            const listaExercicios = await exercicioTreino.find({"treino.id": idTreino});
            res.status(200).json(listaExercicios);
        } catch (error) {
            next(error)
        }
    }

    static async cadastrarExercicioTreino(req, res, next) {
        const newExercicioTreino = req.body;
        try {
            const treinoEncontrado = await treino.findById(newExercicioTreino.treino);
            const exercicioEncontrado = await exercicio.findById(newExercicioTreino.exercicio);
            const exercicioCompleto = { ...newExercicioTreino, treino: { ...treinoEncontrado._doc }, exercicio: { ...exercicioEncontrado._doc }};
            await exercicioTreino.create(exercicioCompleto);
            res.status(201).json({ message: "Criado com sucesso!", exercicioTreino: newExercicioTreino });
        } catch (error) {
            next(error)
        }
    }

    static async atualizarExercicioTreino(req, res, next) {
        try {
            const id = req.params.id;
            await exercicioTreino.findByIdAndUpdate(id, req.body);
            res.status(200).json({message: "Exercicio atualizado!"});
        } catch (error) {
            next(error);
        }
    }

    static async excluirExercicioTreino(req, res, next) {
        try {
            const id = req.params.id;
            await exercicioTreino.findByIdAndDelete(id, req.body);
            res.status(200).json({message: "Exercicio excluido!"});
        } catch (error) {
            next(error);
        }
    }
}

export default ExercicioTreinoController;