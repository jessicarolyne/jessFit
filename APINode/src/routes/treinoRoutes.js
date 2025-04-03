import express from "express";
import TreinoController from "../controllers/treinoController.js";
import paginar from "../middlewares/paginar.js";

const routes = express.Router();

routes.get("/treinos", TreinoController.listarTreinos, paginar);
routes.get("/treinos/:id", TreinoController.listarTreinoPorId);
routes.post("/treinos", TreinoController.cadastrarTreino);
routes.put("/treinos/:id", TreinoController.atualizarTreino);
routes.delete("/treinos/:id", TreinoController.excluirTreino);

export default routes;