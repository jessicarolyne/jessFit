import express from "express";
import conectaNaDatabase from "./config/dbConnect.js";
import routes from "./routes/index.js";

const conexao = await conectaNaDatabase();

conexao.on("error", (erro) => {
  console.error("erro de conexão", erro);
});

conexao.once("open", () => {
    console.log("Conexão com o banco feita com sucesso");
})

const app = express();
routes(app);

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


app.delete("/redes/:id", (req, res) => {
    const index = buscaLivros(req.params.id);
    redes.splice(index, 1);
    res.status(200).send("Rede excluida com sucesso");
})

export default app;