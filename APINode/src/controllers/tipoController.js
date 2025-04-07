import { tipo } from "../models/index.js";

class TipoController {
    static async listarTipos(req, res, next) {
        try {
            const buscaTipo = tipo.find();
            req.resultado = buscaTipo;
            next();
        } catch (error) {
            next(error)
        }
    }

    static async listarTipoPorId(req, res, next) {
        try {
            const id = req.params.id;
            const tipoEncontrado = await tipo.findById(id);
            res.status(200).json(tipoEncontrado);
        } catch (error) {
            next(error);
        }
    }

    static async cadastrarTipo(req, res, next) {
        const newTipo = req.body;
        try {
            await tipo.create(newTipo);
            res.status(201).json({ message: "Cridado com sucesso!" });
        } catch (error) {
            next(error);
        }
    }

    static async atualizarTipo(req, res, next) {
        try {
            const id = req.params.id;
            await tipo.findByIdAndUpdate(id, req.body);
            res.status(200).json({ message: "Tipo atualizado." });
        } catch (error) {
            next(error);
        }
    }

    static async excluirTipo(req, res, next) {
        try {
            const id = req.params.id;
            await tipo.findByIdAndDelete(id, req.body);
            res.status(200).json({ message: "Tipo excluido." });
        } catch (error) {
            next(error);
        }
    }
}

export default TipoController;