import express from 'express';
import { getLogs, entrada, saida } from '../controllers/walletControler.js';
import { verificaToken } from '../middlewares/authMiddleware.js';

const walletRouter = express.Router();
walletRouter.get("/logs", verificaToken, getLogs);
walletRouter.post("/entrada", verificaToken, entrada);
walletRouter.post("/saida", verificaToken, saida);



export default walletRouter