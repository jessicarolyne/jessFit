import express from "express";
import TipoController from "../controllers/tipoController.js";
import paginar from "../middlewares/paginar.js";

const routes = express.Router();

routes.get("/tipos", TipoController.listarTipos, paginar);
routes.get("/tipos/:id", TipoController.listarTipoPorId);
routes.post("/tipos", TipoController.cadastrarTipo);
routes.put("/tipos/:id", TipoController.atualizarTipo);
routes.delete("/tipos/:id", TipoController.excluirTipo);

export default routes;