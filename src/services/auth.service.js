

import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import "dotenv/config";
import userRepositories from "../repositories/user.repositories.js";

function generateToken(id) {
  return jwt.sign({ id: id }, process.env.SECRET_JWT, { expiresIn: 86400 }); // guardar a sessão do usuário
                                                                             // sem expor o usuário

 // crianado criptografia MD 5 para usar o secret_jwt https://smallseotools.com/pt/md5-generator/                                                                            
}

const loginService = async ({ email, password }) => {
  const user = await userRepositories.findByEmailUserRepository(email);

  if (!user) throw new Error("Wrong password or username");

  const isPasswordValid = await bcrypt.compare(password, user.password);

  if (!isPasswordValid) throw new Error("Invalid password");

  const token = generateToken(user.id);
  res.send({token});
  return token;
 
};

export default { loginService, generateToken };
