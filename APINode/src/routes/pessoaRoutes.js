import express from "express";
import PessoaController from "../controllers/pessoaController.js";
import paginar from "../middlewares/paginar.js";

const routes = express.Router();

routes.get("/pessoas", PessoaController.listarPessoas, paginar);
routes.get("/pessoas/:id", PessoaController.listarPessoaPorId);
routes.post("/pessoas", PessoaController.cadastrarPessoa);
routes.put("/pessoas/:id", PessoaController.atualizarPessoa);
routes.delete("/pessoas/:id", PessoaController.excluirPessoa);

export default routes;