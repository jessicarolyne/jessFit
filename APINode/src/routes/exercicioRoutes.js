import express from "express";
import ExercicioController from "../controllers/exercicioController.js";

const routes = express.Router();

routes.get("/exercicios", ExercicioController.listarExercicios);
routes.get("/exercicios/busca", ExercicioController.listarExerciciosPorTreino);
routes.get("/exercicios/:id", ExercicioController.listarExercicioPorId);
routes.post("/exercicios", ExercicioController.cadastrarExercicio);
routes.put("/exercicios/:id", ExercicioController.atualizarExercicico);
routes.delete("/exercicios/:id", ExercicioController.excluirExercicio);

export default routes;