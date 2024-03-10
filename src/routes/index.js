import { Router } from "express";
import userRouter from "./user.route.js";
import postRouter from "./post.route.js";
import authRouter from "./auth.route.js";
import swaggerRouter from "./swagger.route.cjs";


import mongoose from 'mongoose';
mongoose.set('strictQuery', true);
const router = Router();

router.use("/user", userRouter);   // rota usuarios
router.use("/posts", postRouter);  // rota post
router.use("/auth", authRouter);   // rota autenticação
router.use("/doc", swaggerRouter); // rota da documentação

export default router;
