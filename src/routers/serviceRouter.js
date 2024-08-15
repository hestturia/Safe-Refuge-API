import express from 'express';
import * as serviceController from '../controllers/NotificacaoEmergencia.js'; 

const router = express.Router();

router.post('/services', serviceController.createService);
router.get('/services', serviceController.getAllServices);
router.put('/services/:id', serviceController.updateService);
router.delete('/services/:id', serviceController.deleteService);

export default router;
