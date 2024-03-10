import mongoose from "mongoose";

// função do middleware é validar o ID, recebo e verifico ele
// através do parâmetro
// funciona assim é uma função funções de interceptações, chamada minha rota e a função de callBack

export function validId(req, res, next) {
  let idParam;
  if (!req.params.id) {
    req.params.id = req.userId;
    idParam = req.params.id;
  } else {
    idParam = req.params.id;
  }

  if (!mongoose.Types.ObjectId.isValid(idParam)) {
    return res.status(400).send({ message: "Invalid id!" });
  }
  next();
}

