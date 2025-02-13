import academia from "../models/Academia.js";
import { rede } from "../models/Rede.js";

class AcademiaController {
    static async listarAcademias(req, res) {
        try {
            const listaAcademias = await academia.find({});
            res.status(200).json(listaAcademias);
        } catch (error) {
            res.status(500).json({ message: `${error.message} - falha na requisição` });
        }
    }

    static async listarAcademiasPorRede(req, res) {
        const nomerede = req.query.rede;
        try {
            const academiasPorRede = await academia.find({ "rede.nome":nomerede }); //Busca dentro do objeto Rede o campo nome
            res.status(200).json(academiasPorRede);
        } catch (error) {
            res.status(500).json({ message: `${error.message} - falha na busca` });
        }
    }

    static async listarAcademiaPorId(req, res) {
        try {
            const id = req.params.id;
            const academiaEncontrada = await academia.findById(id);
            res.status(200).json(academiaEncontrada);
        } catch (error) {
            res.status(500).json({ message: `${error.message} - falha na requisição da academia` });
        }
    }

    static async cadastrarAcademia(req, res) {
        const newAcademia = req.body;
        try {
            const redeEncontrada = await rede.findById(newAcademia.rede);
            const academiaCompleta = { ...newAcademia, rede: { ...redeEncontrada._doc }}
            const academiaCriada = await academia.create(academiaCompleta);
            res.status(201).json({ message: "Criado com sucesso!", academia: newAcademia });
        } catch (error) {
            res.status(500).json({ message: `${error.message} - falha ao cadastrar academia` });
        }
    }
    static async atualizarAcademia(req, res) {
        try {
            const id = req.params.id;
            await academia.findByIdAndUpdate(id, req.body);
            res.status(200).json({message: "academia atualizada"});
        } catch (error) {
            res.status(500).json({ message: `${error.message} - falha na atualização da academia` });
        }
    }
    static async excluirAcademia(req, res) {
        try {
            const id = req.params.id;
            await academia.findByIdAndDelete(id, req.body);
            res.status(200).json({message: "academia excluida"});
        } catch (error) {
            res.status(500).json({ message: `${error.message} - falha ao excluir academia` });
        }
    }
};

export default AcademiaController;