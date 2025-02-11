import express from "express";
import redes from "./redeRoutes.js";

const routes = (app) => {
    app.route("/").get((req, res) => res.status(200).send("Cheguei pessoal"));
    app.use(express.json(), redes);
};

export default routes;