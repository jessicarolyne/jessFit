import user, { userSchema } from "../models/User.js";

class UserController {
    static async listarUsers(req, res, next) {
        try {
            const listaUsers = await user.find({});
            res.status(200).json(listaUsers);
        } catch (error) {
            next(error);
        }
    }

    static async listarUserPorId(req, res, next) {
        try {
            const id = req.params.id;
            const userEncontrado = await user.findById(id);
            res.status(200).json(userEncontrado);
        } catch (error) {
            next(error);
        }
    }

    static async cadastrarUser(req, res, next) {
        const newUser = req.body;
        try {
            await user.create(newUser);
            res.status(201).json({ message: "Criado com sucesso!" });
        } catch (error) {
            next(error);
        }
    }

    static async atualizarUser(req, res, next) {
        try {
            const id = req.params.id;
            await user.findByIdAndUpdate(id, req.body);
            res.status(200).json({ message: "User atualizado." });
        } catch (error) {
            next(error);
        }
    }

    static async excluirUser(req, res, next) {
        try {
            const id = req.params.id;
            await user.findByIdAndDelete(id, req.body);
            res.status(200).json({ message: "User excluido." });
        } catch (error) {
            next(error);
        }
    }
}

export default UserController;