import express from "express";
import PessoaController from "../controllers/pessoaController.js";

const routes = express.Router();

routes.get("/pessoas", PessoaController.listarPessoas);
routes.get("/pessoas/:id", PessoaController.listarPessoaPorId);
routes.post("/pessoas", PessoaController.cadastrarPessoa);
routes.put("/pessoas/:id", PessoaController.atualizarPessoa);
routes.delete("/pessoas/:id", PessoaController.excluirPessoa);

export default routes;