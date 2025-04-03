import express from "express";
import AcademiaController from "../controllers/academiaController.js";
import paginar from "../middlewares/paginar.js";

const routes = express.Router();

routes.get("/academias", AcademiaController.listarAcademias, paginar);
// routes.get("/academias/busca", AcademiaController.listarAcademiasPorRede);
routes.get("/academias/busca", AcademiaController.listarAcademiasPorFiltro, paginar);
routes.get("/academias/:id", AcademiaController.listarAcademiaPorId);
routes.post("/academias", AcademiaController.cadastrarAcademia);
routes.put("/academias/:id", AcademiaController.atualizarAcademia);
routes.delete("/academias/:id", AcademiaController.excluirAcademia);

export default routes;