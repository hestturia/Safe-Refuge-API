import { Notificacao } from "../database/notifcacaoDb";

export const getNotificacao = (req, res) => {
    res.json(Notificacao);
};

export const createNotificacao = (req, res) => {
    const { id, type, description } = req.body;
    const Notificacao = newNoticacao(id, type, description);
    Notificacao.push(newNotificacao);
    res.status(201).json(newNotificacao);
};