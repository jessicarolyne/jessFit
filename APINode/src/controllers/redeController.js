import rede from "../models/Rede.js";

class RedeController {
    static async listarRedes(req, res) {
        try {
            const listaRedes = await rede.find({});
            res.status(200).json(listaRedes);
        } catch (error) {
            res.status(500).json({ message: `${error.message} - falha na requisição` });
        }
    }

    static async listarRedePorId(req, res) {
        try {
            const id = req.params.id;
            const redeEncontrada = await rede.findById(id);
            res.status(200).json(redeEncontrada);
        } catch (error) {
            res.status(500).json({ message: `${error.message} - falha na requisição da rede` });
        }
    }

    static async cadastrarRede(req, res) {
        try {
            const newRede = await rede.create(req.body);
            res.status(201).json({ message: "Criado com sucesso!", rede: newRede });
        } catch (error) {
            res.status(500).json({ message: `${error.message} - falha ao cadastrar rede` });
        }
    }
    static async atualizarRede(req, res) {
        try {
            const id = req.params.id;
            await rede.findByIdAndUpdate(id, req.body);
            res.status(200).json({message: "Rede atualizada"});
        } catch (error) {
            res.status(500).json({ message: `${error.message} - falha na atualização da rede` });
        }
    }
    static async excluirRede(req, res) {
        try {
            const id = req.params.id;
            await rede.findByIdAndDelete(id, req.body);
            res.status(200).json({message: "Rede excluida"});
        } catch (error) {
            res.status(500).json({ message: `${error.message} - falha ao excluir rede` });
        }
    }
};

export default RedeController;