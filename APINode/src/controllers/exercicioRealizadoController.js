import { exercicioRealizado, treino, exercicio } from "../models/index.js";

class ExercicioRealizadoController {
    static async listarExercicioRealizado(req, res, next) {
        try {
            const buscaExercicioRealizado = exercicioRealizado.find();
            req.resultado = buscaExercicioRealizado;
            next();
        } catch (error) {
            next(error)
        }
    }

    static async listarExercicioRealizadoPorId(req, res, next) {
        try {
            const id = req.params.id;
            const exercicioEncontrado = await exercicioRealizado.findById(id);
            res.status(200).json(exercicioEncontrado);
        } catch (error) {
            next(error)
        }
    }

    static async listarExercicioRealizadoPorExercicioTreino(req, res, next) {
        const idTreino = req.query.treino;
        try {
            const listaExercicioRealizado = await exercicioRealizado.find({"treino.id": idTreino});
            res.status(200).json(listaExercicioRealizado);
        } catch (error) {
            next(error)
        }
    }

    static async cadastrarExercicioRealizado(req, res, next) {
        const newExercicioRealizado = req.body;
        try {
            const treinoEncontrado = await treino.findById(newExercicioRealizado.treino);
            const exercicioEncontrado = await exercicio.findById(newExercicioRealizado.exercicio);
            const exercicioRealizadoCompleto = { ...newExercicioRealizado, treino: { ...treinoEncontrado._doc }, exercicio: { ...exercicioEncontrado._doc }};
            await exercicioRealizado.create(exercicioRealizadoCompleto);
            res.status(201).json({ message: "Criado com sucesso!", exercicioRealizado: newExercicioRealizado });
        } catch (error) {
            next(error)
        }
    }

    static async atualizarExercicioRealizado(req, res, next) {
        try {
            const id = req.params.id;
            await exercicioRealizado.findByIdAndUpdate(id, req.body);
            res.status(200).json({message: "Exercicio atualizado!"});
        } catch (error) {
            next(error);
        }
    }

    static async excluirExercicioRealizado(req, res, next) {
        try {
            const id = req.params.id;
            await exercicioRealizado.findByIdAndDelete(id, req.body);
            res.status(200).json({message: "Exercicio excluido!"});
        } catch (error) {
            next(error);
        }
    }
}

export default ExercicioRealizadoController;