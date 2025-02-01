import express from "express";
import conectaNaDatabase from "./config/dbConnect.js";

async function iniciar() {
    const conexao = await conectaNaDatabase();

    try {
        await conexao.authenticate();
        console.log("Conexão com o banco de dados realizada com sucesso");
    } catch (erro) {
        console.error("Erro de conexão:", erro);
    }
}

iniciar();

const app = express();
app.use(express.json());

const redes = [
    {
        id: 1,
        nome: "Smart Fit"
    },
    {
        id: 2,
        nome: "Life Fit"
    },
    {
        id: 3,
        nome: "Ironberg"
    }
]

function buscaLivros(id) {
    return redes.findIndex(rede => {
        return rede.id === Number(id);
    })
}

app.get("/", (req, res) => {
    res.status(200).send('Cheguei pessoal');
});

app.get("/redes", (req, res) => {
    res.status(200).json(redes);
})

app.post("/redes", (req, res) => {
    redes.push(req.body);
    res.status(201).send('Rede cadastrada com sucesso');
})

app.get("/redes/:id", (req, res) => {
    const index = buscaLivros(req.params.id);
    res.status(200).json(redes[index]);
})

app.put("/redes/:id", (req, res) => {
    const index = buscaLivros(req.params.id);
    redes[index].nome = req.body.nome;
    res.status(200).json(redes);
})

app.delete("/redes/:id", (req, res) => {
    const index = buscaLivros(req.params.id);
    redes.splice(index, 1);
    res.status(200).send("Rede excluida com sucesso");
})

export default app;