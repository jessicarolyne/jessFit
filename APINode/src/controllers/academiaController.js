import academia from "../models/Academia.js";
import { rede } from "../models/Rede.js";

class AcademiaController {
    static async listarAcademias(req, res, next) {
        try {
            const listaAcademias = await academia.find({});
            res.status(200).json(listaAcademias);
        } catch (error) {
           next(error);
        }
    }

    static async listarAcademiasPorRede(req, res, next) {
        const nomerede = req.query.rede;
        try {
            const academiasPorRede = await academia.find({ "rede.nome":nomerede }); //Busca dentro do objeto Rede o campo nome
            res.status(200).json(academiasPorRede);
        } catch (error) {
            next(error);
        }
    }

    static async listarAcademiaPorId(req, res, next) {
        try {
            const id = req.params.id;
            const academiaEncontrada = await academia.findById(id);
            res.status(200).json(academiaEncontrada);
        } catch (error) {
           next(error);
        }
    }

    static async cadastrarAcademia(req, res, next) {
        const newAcademia = req.body;
        try {
            const redeEncontrada = await rede.findById(newAcademia.rede);
            const academiaCompleta = { ...newAcademia, rede: { ...redeEncontrada._doc }}
            const academiaCriada = await academia.create(academiaCompleta);
            res.status(201).json({ message: "Criado com sucesso!", academia: newAcademia });
        } catch (error) {
            next(error);
        }
    }
    static async atualizarAcademia(req, res, next) {
        try {
            const id = req.params.id;
            await academia.findByIdAndUpdate(id, req.body);
            res.status(200).json({message: "academia atualizada"});
        } catch (error) {
            next(error);
        }
    }
    static async excluirAcademia(req, res, next) {
        try {
            const id = req.params.id;
            await academia.findByIdAndDelete(id, req.body);
            res.status(200).json({message: "academia excluida"});
        } catch (error) {
            next(error);
        }
    }
};

export default AcademiaController;