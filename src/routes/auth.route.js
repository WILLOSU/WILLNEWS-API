import authController from "../controllers/auth.controller.js";

import { Router } from "express"; // express é um objeto

/*
consigo fazer a importação direto, importando o router aqui dentro do express
ai não precisa importar o express e do express importar o router, pois o express
é um objeto, sempre que tenho o PONTO. --> é alguma coisa que tenho aqui dentro.
 nesse caso é uma função, e ai consigo desestruturar definitivamente.
*/

const authRouter = Router();

authRouter.post("/login", authController.loginController);

export default authRouter;
