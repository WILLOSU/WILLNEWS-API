
import "dotenv/config";
import jwt from "jsonwebtoken";
import userRepositories from "../repositories/user.repositories.js";

// usar o import ECMAScript 6 é muito melhor que comon js = const
// porém preciso falar que é do tipo module
// ir no package.jason e colocar module

function authMiddleware(req, res, next) {

  const authHeader = req.headers.authorization;
  if (!authHeader)
    return res.status(401).send({ message: "The token was not informed!" });


  const parts = authHeader.split(" "); // ["Bearer", "asdasdasdadsadasd"]
  if (parts.length !== 2)
    return res.status(401).send({ message: "Invalid token!" });

  const [scheme, token] = parts;

  if (!/^Bearer$/i.test(scheme))
    return res.status(401).send({ message: "Malformatted Token!" });

  jwt.verify(token, process.env.SECRET_JWT, async (err, decoded) => {
    if (err) return res.status(401).send({ message: "Invalid token!" });

    const user = await userRepositories.findByIdUserRepository(decoded.id);
    if (!user || !user.id)
      return res.status(401).send({ message: "Invalid token!" });

    req.userId = user.id;

    return next();
  });
}

export default authMiddleware;

