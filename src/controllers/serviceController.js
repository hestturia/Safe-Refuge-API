import Service from '../models/Service.js';  

export async function createService(req, res) {
    try {
        const { user_id, nome, telefone } = req.body;
        const service = await Service.create({ user_id, nome, telefone });
        res.status(201).json(service);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao criar serviço', error });
    }
}


export const getAllServices = async (req, res) => {
  try {
    const services = await Service.findAll();
    res.status(200).json(services);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao listar serviços', error });
  }
};


export const updateService = async (req, res) => {
  try {
    const { id } = req.params;
    const { nome, telefone } = req.body;
    const service = await Service.findByPk(id);
    if (!service) {
      return res.status(404).json({ message: 'Serviço não encontrado' });
    }
    service.nome = nome;
    service.telefone = telefone;
    await service.save();
    res.status(200).json(service);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao atualizar serviço', error });
  }
};


export const deleteService = async (req, res) => {
  try {
    const { id } = req.params;
    const service = await Service.findByPk(id);
    if (!service) {
      return res.status(404).json({ message: 'Serviço não encontrado' });
    }
    await service.destroy();
    res.status(200).json({ message: 'Serviço deletado com sucesso' });
  } catch (error) {
    res.status(500).json({ message: 'Erro ao deletar serviço', error });
  }
};
