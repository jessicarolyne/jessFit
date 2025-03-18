import pessoa from "../models/Pessoa.js";
import { user } from "../models/User.js";

class PessoaController {
    static async listarPessoas(req, res, next) {
        try {
            const listarPessoas = await pessoa.find({});
            res.status(200).json(listarPessoas);
        } catch (error) {
            next(error);
        }
    }

    static async listarPessoaPorId(req, res, next) {
        try {
            const id = req.params.id;
            const pessoaEncontrada = await pessoa.findById(id);
            res.status(200).json(pessoaEncontrada);
        } catch (error) {
            next(error);
        }
    }

    static async listarPessoasPorIdUser(req, res, next) {
        const idUser = req.query.user;
        try {
            const listarPessoas = await pessoa.find({"user.id":idUser});
            res.status(200).json(listarPessoas);
        } catch (error) {
            next(error);
        }
    }

    static async cadastrarPessoa(req, res, next) {
        const newPessoa = req.body;
        try {
            const userEncontrado = await user.findById(newPessoa.user);
            const pessoaCompleta = { ...newPessoa, user: { ...userEncontrado._doc }};
            await pessoa.create(pessoaCompleta);
            res.status(201).json({message: "Criado com sucesso!"});
        } catch (error) {
            next(error);
        }
    }

    static async atualizarPessoa(req, res, next) {
        try {
            const id = req.params.id;
            await pessoa.findByIdAndUpdate(id, req.body);
            res.status(200).json({ message: "Pessoa atualizado." });
        } catch (error) {
            next(error);
        }
    }

    static async excluirPessoa(req, res, next) {
        try {
            const id = req.params.id;
            await pessoa.findByIdAndDelete(id, req.body);
            res.status(200).json({message: "Pessoa excluida."});
        } catch (error) {
            next(error);
        }
    }
}

export default PessoaController;