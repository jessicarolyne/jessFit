import express from "express";
import RedeController from "../controllers/redeController.js";
import paginar from "../middlewares/paginar.js";

const routes = express.Router();

routes.get("/redes", RedeController.listarRedes, paginar);
routes.get("/redes/:id", RedeController.listarRedePorId);
routes.post("/redes", RedeController.cadastrarRede);
routes.put("/redes/:id", RedeController.atualizarRede);
routes.delete("/redes/:id", RedeController.excluirRede);

export default routes;