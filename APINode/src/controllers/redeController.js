import rede from "../models/Rede.js";

class RedeController {
    static async listarRedes(req, res) {
        const listaRedes = await rede.find({});
        res.status(200).json(listaRedes);
    }

    static async cadastrarRede(req, res) {
        try {
            const newRede = await rede.create(req.body);
            res.status(201).json({message: "Criado com sucesso!", rede: newRede});
        } catch (error) {
            res.status(500).json({message: `${error.message} - falha ao cadastrar rede`});
        }
    }
};

export default RedeController;