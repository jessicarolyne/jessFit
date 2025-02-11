import express from "express";
import RedeController from "../controllers/redeController.js";

const routes = express.Router();

routes.get("/redes", RedeController.listarRedes);
routes.get("/redes/:id", RedeController.listarRedePorId);
routes.post("/redes", RedeController.cadastrarRede);
routes.put("/redes/:id", RedeController.atualizarRede);
routes.delete("/redes/:id", RedeController.excluirRede);

export default routes;