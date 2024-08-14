import express from 'express';
import {
    createEmergencyContact,
    getAllEmergencyContacts,
    updateEmergencyContact,
    deleteEmergencyContact,
    sendMessageToEmergencyContact
} from '../controllers/EmergencyContactController.js';

const router = express.Router();

router.post('/emergency-contacts', createEmergencyContact);
router.get('/emergency-contacts', getAllEmergencyContacts);
router.put('/emergency-contacts/:id', updateEmergencyContact);
router.delete('/emergency-contacts/:id', deleteEmergencyContact);
router.post('/emergency-contacts/:id/send-message', sendMessageToEmergencyContact);

export default router;
