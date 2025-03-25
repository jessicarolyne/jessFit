import express from "express";
import AcademiaController from "../controllers/academiaController.js";

const routes = express.Router();

routes.get("/academias", AcademiaController.listarAcademias);
// routes.get("/academias/busca", AcademiaController.listarAcademiasPorRede);
routes.get("/academias/busca", AcademiaController.listarAcademiasPorFiltro);
routes.get("/academias/:id", AcademiaController.listarAcademiaPorId);
routes.post("/academias", AcademiaController.cadastrarAcademia);
routes.put("/academias/:id", AcademiaController.atualizarAcademia);
routes.delete("/academias/:id", AcademiaController.excluirAcademia);

export default routes;