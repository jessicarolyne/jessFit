import { exercicio, tipo } from "../models/index.js";

class ExercicioController {
    static async listarExercicios(req, res, next) {
        try {
            const listaExercicios = await exercicio.find().populate('tipo');
            res.status(200).json(listaExercicios);
        } catch (error) {
            next(error)
        }
    }

    static async listarExercicioPorId(req, res, next) {
        try {
            const id = req.params.id;
            const exercicioEncontrado = await exercicio.findById(id);
            res.status(200).json(exercicioEncontrado);
        } catch (error) {
            next(error)
        }
    }

    static async listarExerciciosPorTreino(req, res, next) {
        const idTreino = req.query.treino;
        try {
            const listaExercicios = await exercicio.find({"treino.id": idTreino});
            res.status(200).json(listaExercicios);
        } catch (error) {
            next(error)
        }
    }

    static async cadastrarExercicio(req, res, next) {
        const newExercicio = req.body;
        try {
            const tipoEncontrado = await tipo.findById(newExercicio.tipo);
            const exercicioCompleto = { ...newExercicio, tipo: { ...tipoEncontrado._doc }};
            await exercicio.create(exercicioCompleto);
            res.status(201).json({ message: "Criado com sucesso!", exercicio: newExercicio });
        } catch (error) {
            next(error)
        }
    }

    static async atualizarExercicico(req, res, next) {
        try {
            const id = req.params.id;
            await exercicio.findByIdAndUpdate(id, req.body);
            res.status(200).json({message: "Exercicio atualizado!"});
        } catch (error) {
            next(error);
        }
    }

    static async excluirExercicio(req, res, next) {
        try {
            const id = req.params.id;
            await exercicio.findByIdAndDelete(id, req.body);
            res.status(200).json({message: "Exercicio excluido!"});
        } catch (error) {
            next(error);
        }
    }
}

export default ExercicioController;