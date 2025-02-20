import NaoEncontrado from "../erros/NaoEncontrado.js";

function manipulador404(req, res, next) {
    const Erro404 = new NaoEncontrado();
    next(Erro404);
}

export default manipulador404;