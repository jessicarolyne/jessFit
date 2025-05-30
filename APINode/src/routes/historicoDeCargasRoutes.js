import express from "express";
import historicodeCargasController from "../controllers/historicodeCargasController.js";
import paginar from "../middlewares/paginar.js";

const routes = express.Router();

routes.get("/historicodeCargas", historicodeCargasController.listarHistoricodeCargas, paginar);
routes.get("/historicodeCargas/busca", historicodeCargasController.listarHistoricodeCargasPorExercicioTreino);
routes.get("/historicodeCargas/:id", historicodeCargasController.listarHistoricodeCargasPorId);
routes.post("/historicodeCargas", historicodeCargasController.cadastrarHistoricodeCargas);
routes.put("/historicodeCargas/:id", historicodeCargasController.atualizarHistoricodeCargas);
routes.delete("/historicodeCargas/:id", historicodeCargasController.excluirHistoricodeCargas);

export default routes;