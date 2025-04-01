import express from "express";
import redes from "./redeRoutes.js";
import academias from "./academiaRoutes.js";
import treinos from "./treinoRoutes.js";
import users from "./userRoute.js";
import pessoas from "./pessoaRoutes.js";
import tipos from "./tipoRoutes.js";
import exercicios from "./exercicioRoutes.js";
import exerciciosTreinos from "./exercicioTreinoRoutes.js";
import treinoRealizado from "./treinoRealizadoRoutes.js";
import exercicioRealizado from "./exercicioRealizadoRoutes.js";
import historicodeCargas from "./historicoDeCargasRoutes.js";

const routes = (app) => {
    app.route("/").get((req, res) => res.status(200).send("Cheguei pessoal"));
    app.use(express.json(), redes, academias, treinos, pessoas, users, tipos, exercicios, exerciciosTreinos, treinoRealizado, exercicioRealizado, historicodeCargas);
};

export default routes;