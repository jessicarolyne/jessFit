import NaoEncontrado from "../erros/NaoEncontrado.js";
import RequisicaoIncorreta from "../erros/RequisicaoIncorreta.js";
import { treino, user } from "../models/index.js";

class TreinoController {
    static async listarTreinos(req, res, next) {
        try {
            let { limite = 5, pagina = 1, ordenacao = "_id:-1" } =  req.query;
            const [campoOrdenacao, ordem] = ordenacao.split(":");
            limite = parseInt(limite);
            pagina = parseInt(pagina);
            ordem = parseInt(ordem);

            if(limite > 0  && pagina > 0) {
                const listaTreinos = await treino.find()
                .sort({ [campoOrdenacao]: ordem })
                .skip((pagina - 1) * limite)
                .limite(limite)
                .populate('user')
                .exec();
                res.status(200).json(listaTreinos);
            } else {
                next(new RequisicaoIncorreta());
            }

        } catch (error) {
            next(error)
        }
    }

    static async listarTreinoPorId(req, res, next) {
        try {
            const id = req.params.id;
            const treinoEncontrado = await treino.findById(id).populate('exercicio', 'user').exec();
            if(treinoEncontrado != null) {
                res.status(200).json(treinoEncontrado);
            } else {
                next(new NaoEncontrado("Id do treino não localizado"));
            }
        } catch (error) {
            next(error)
        }
    }

    static async listarTreinosPorIdUser(req, res, next) {
        const idUser = req.query.user;
        try {
            const listaTreinos = await treino.find({"user.id":idUser});
            res.status(200).json(listaTreinos);
        } catch (error) {
            next(error);
        }
    }

    static async cadastrarTreino(req, res, next) {
        const newTreino = req.body;
        try {
            const userEncontrado = await user.findById(newTreino.user);
            const treinoCompleto = { ...newTreino, user: { ...userEncontrado._doc }};
            //const treinoCriado = await treino.create(treinoCompleto);
            await treino.create(treinoCompleto);
            res.status(201).json({ message: "Criado com sucesso!", treino: newTreino });
        } catch (error) {
            next(error);
        }
    }

    static async atualizarTreino(req, res, next) {
        try {
            const id = req.params.id;
            await treino.findByIdAndUpdate(id, req.body);
            res.status(200).json({ message: "Treino atualizado." });
        } catch (error) {
            next(error);
        }
    }

    static async excluirTreino(req, res, next) {
        try {
            const id = req.params.id;
            await treino.findByIdAndDelete(id, req.body);
            res.status(200).json({message: "Treino excluido"});
        } catch (error) {
            next(error);
        }
    }
}

export default TreinoController;