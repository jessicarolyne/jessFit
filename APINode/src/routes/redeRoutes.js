import express from "express";
import RedeController from "../controllers/redeController.js";

const routes = express.Router();

routes.get("/redes", RedeController.listarRedes);

export default routes;