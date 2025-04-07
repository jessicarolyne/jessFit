import express from "express";
import exercicioRealizadoController from "../controllers/exercicioRealizadoController.js";
import paginar from "../middlewares/paginar.js";

const routes = express.Router();

routes.get("/exercicioRealizado", exercicioRealizadoController.listarExercicioRealizado, paginar);
routes.get("/exercicioRealizado/busca", exercicioRealizadoController.listarExercicioRealizadoPorExercicioTreino);
routes.get("/exercicioRealizado/:id", exercicioRealizadoController.listarExercicioRealizadoPorId);
routes.post("/exercicioRealizado", exercicioRealizadoController.cadastrarExercicioRealizado);
routes.put("/exercicioRealizado/:id", exercicioRealizadoController.atualizarExercicioRealizado);
routes.delete("/exercicioRealizado/:id", exercicioRealizadoController.excluirExercicioRealizado);

export default routes;