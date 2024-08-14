import EmergencyContact from '../models/EmergencyContactModel.js';  

// Cria um novo contato de emergência
export async function createEmergencyContact(req, res) {
    try {
        const { user_id, nome, telefone } = req.body;
        const emergencyContact = await EmergencyContact.create({ user_id, nome, telefone });
        res.status(201).json(emergencyContact);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao criar contato de emergência', error });
    }
}

// lista contatos de emergência
export const getAllEmergencyContacts = async (req, res) => {
  try {
    const emergencyContacts = await EmergencyContact.findAll();
    res.status(200).json(emergencyContacts);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao listar contatos de emergência', error });
  }
};

// Atualiza um contato de emergência
export const updateEmergencyContact = async (req, res) => {
  try {
    const { id } = req.params;
    const { nome, telefone } = req.body;
    const emergencyContact = await EmergencyContact.findByPk(id);
    if (!emergencyContact) {
      return res.status(404).json({ message: 'Contato de emergência não encontrado' });
    }
    emergencyContact.nome = nome;
    emergencyContact.telefone = telefone;
    await emergencyContact.save();
    res.status(200).json(emergencyContact);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao atualizar contato de emergência', error });
  }
};

// Deleta um contato de emergência
export const deleteEmergencyContact = async (req, res) => {
  try {
    const { id } = req.params;
    const emergencyContact = await EmergencyContact.findByPk(id);
    if (!emergencyContact) {
      return res.status(404).json({ message: 'Contato de emergência não encontrado' });
    }
    await emergencyContact.destroy();
    res.status(200).json({ message: 'Contato de emergência deletado com sucesso' });
  } catch (error) {
    res.status(500).json({ message: 'Erro ao deletar contato de emergência', error });
  }
};

// Envia uma mensagem para um contato de emergência
export const sendMessageToEmergencyContact = async (req, res) => {
  try {
    const { id } = req.params;
    const { message } = req.body;
    const emergencyContact = await EmergencyContact.findByPk(id);
    if (!emergencyContact) {
      return res.status(404).json({ message: 'Contato de emergência não encontrado' });
    }

    // Simulação de envio de mensagem
    console.log(`Enviando mensagem para ${emergencyContact.nome} (${emergencyContact.telefone}): ${message}`);

    res.status(200).json({ message: 'Mensagem enviada com sucesso' });
  } catch (error) {
    res.status(500).json({ message: 'Erro ao enviar mensagem para o contato de emergência', error });
  }
};
