import express from "express";
import TreinoRealizadoController from "../controllers/TreinoRealizadoController.js";

const routes = express.Router();

routes.get("/treinosRealizados", TreinoRealizadoController.listarTreinosRealizados);
routes.get("/treinosRealizados/busca", TreinoRealizadoController.listarTreinoRealizadoPorTreino);
routes.get("/treinosRealizados/:id", TreinoRealizadoController.listarTreinoRealizadoPorId);
routes.post("/treinosRealizados", TreinoRealizadoController.cadastrarTreinoRealizado);
routes.put("/treinosRealizados/:id", TreinoRealizadoController.atualizarTreinoRealizado);
routes.delete("/treinosRealizados/:id", TreinoRealizadoController.excluirTreinoRealizado);

export default routes;