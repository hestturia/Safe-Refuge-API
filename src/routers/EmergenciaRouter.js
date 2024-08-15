import express from "express";
import { createNotificacao, getNotificacao } from "../controllers/NotificacaoEmergencia";

const router = express.Router();

router.get('/', getNotificacao);
router.post('/', createNotificacao);

export { router as Notificacao };
