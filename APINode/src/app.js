import express from "express";
import conectaNaDatabase from "./config/dbConnect.js";

const conexao = await conectaNaDatabase();

conexao.on("error", (erro) => {
  console.error("erro de conexão", erro);
});

conexao.once("open", () => {
    console.log("Conexão com o banco feita com sucesso");
})

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