import authService from "../services/auth.service.js";

const loginController = async (req, res) => {
  //res.send("Login ok");
  const { email, password } = req.body;  

  try {
    const token = await authService.loginService({ email, password });
    return res.send(token);
  } catch (e) {

    res.send({token});
    // Retorna uma resposta com status 401 (Não autorizado) e envia a mensagem de erro como resposta
return res.status(401).send(e.message);

  }

};

export default { loginController };
