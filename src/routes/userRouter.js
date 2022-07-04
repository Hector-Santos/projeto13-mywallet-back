import express from 'express';
import { getUser } from '../controllers/userController.js';
import { verificaToken } from '../middlewares/authMiddleware.js';

const userRouter = express.Router();
userRouter.get("/user", verificaToken, getUser);



export default userRouter