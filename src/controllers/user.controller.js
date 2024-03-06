import userService from "../services/user.service.js";


async function createUserController(req, res) {
  const { name, username, email, password, avatar, background } = req.body;
 // desemebrando todos os campos , para validar
  try {
    
      const token = await userService.createUserService({
    
      name,
      username,
      email,
      password,
      avatar,
      background,
    });
   
    res.status(201).send(token);
  } catch (e) {
    return res.status(400).send("Requisição inválida / Bad Request: " + e.message);
  }
}

async function findAllUserController(req, res) {
  try {
    const users = await userService.findAllUserService();
    return res.send(users);
  } catch (e) {
    return res.status(404).send(e.message);
  }
}

async function findUserByIdController(req, res) { // verifica apenas se o ID é válido
  try {
    const user = await userService.findUserByIdService(
      req.params.id,
      req.userId
    );
    return res.send(user);
  } catch (e) {
    return res.status(400).send("Requisição inválida / Bad Request: " + e.message);
  }
}

async function updateUserController(req, res) {// try cath, tente fazer alguma coisa se não se não me mostre um erro!!
  try {
    const { name, username, email, password, avatar, background } = req.body;
    const { id: userId } = req.params;
    const userIdLogged = req.userId;

    const response = await userService.updateUserService(
      { name, username, email, password, avatar, background },
      userId,
      userIdLogged
    );

    return res.send(response);
  } catch (e) {
    return res.status(400).send("Requisição inválida / Bad Request: " + e.message);
  }
}

export default {
  createUserController,
  findAllUserController,
  findUserByIdController,
  updateUserController,
};
