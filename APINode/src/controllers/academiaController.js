import { academia } from "../models/index.js";
import { rede } from "../models/index.js";

class AcademiaController {
    static listarAcademias = async (req, res, next) => {
        try {
            const buscaAcademias = academia.find();
            req.resultado = buscaAcademias;
            next();
        } catch (erro) {
            next(erro);
        }
    };

    static async listarAcademiasPorFiltro(req, res, next) {
        try {
            const busca = await processaBusca(req.query);

            if (busca !== null) {
                const academiasResultado = academia
                    .find(busca)

                req.resultado = academiasResultado;

                next();
            } else {
                res.status(200).send([]);
            }
        } catch (erro) {
            next(erro);
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
            const academiaCompleta = { ...newAcademia, rede: { ...redeEncontrada._doc } }
            await academia.create(academiaCompleta);
            res.status(201).json({ message: "Criado com sucesso!", academia: newAcademia });
        } catch (error) {
            next(error);
        }
    }
    static async atualizarAcademia(req, res, next) {
        try {
            const id = req.params.id;
            await academia.findByIdAndUpdate(id, req.body);
            res.status(200).json({ message: "academia atualizada" });
        } catch (error) {
            next(error);
        }
    }
    static async excluirAcademia(req, res, next) {
        try {
            const id = req.params.id;
            await academia.findByIdAndDelete(id, req.body);
            res.status(200).json({ message: "academia excluida" });
        } catch (error) {
            next(error);
        }
    }
};

async function processaBusca(params) {
    const { nomeRede, nome } = params;
    let busca = {};
    if (nome) busca.nome = { $regex: nome, $options: 'i' };
    if (nomeRede) {
        const buscarRede = await rede.findOne({ nome: nomeRede });
        if (buscarRede != null) {
            busca.buscarRede = buscarRede._id;
        }
        else {
            busca = null;
        }
    }
    //gte = Greater Than or Equal = Maior ou igual que
    //lte = Less Than or Equal = Menor ou igual que
    return busca;
}

export default AcademiaController;