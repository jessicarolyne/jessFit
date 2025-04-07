import express from "express";
import ExercicioTreinoController from "../controllers/exercicioTreinoController.js";
import paginar from "../middlewares/paginar.js";

const routes = express.Router();

routes.get("/exerciciosTreinos", ExercicioTreinoController.listarExerciciosTreinos, paginar);
routes.get("/exerciciosTreinos/busca", ExercicioTreinoController.listarExerciciosTreinosPorTreino);
routes.get("/exerciciosTreinos/:id", ExercicioTreinoController.listarExercicioTreinoPorId);
routes.post("/exerciciosTreinos", ExercicioTreinoController.cadastrarExercicioTreino);
routes.put("/exerciciosTreinos/:id", ExercicioTreinoController.atualizarExercicioTreino);
routes.delete("/exerciciosTreinos/:id", ExercicioTreinoController.excluirExercicioTreino);

export default routes;