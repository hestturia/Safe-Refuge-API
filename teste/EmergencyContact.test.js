import request from 'supertest';
import { app } from '../index.js'; 
import { EmergencyContact } from '../src/models/EmergencyContactModel.js'; 

describe('EmergencyContact API', () => {
  beforeAll(async () => {
    await EmergencyContact.sync({ force: true });
  });

  afterAll(async () => {
    await EmergencyContact.drop();
  });

  test('Deve criar um novo contato de emergência', async () => {
    const response = await request(app)
      .post('/api/emergency-contacts')
      .send({
        user_id: 1,
        nome: 'Contato de Teste',
        telefone: '1234567890'
      });

    expect(response.statusCode).toBe(201);
    expect(response.body).toHaveProperty('id');
    expect(response.body.nome).toBe('Contato de Teste');
  });

  test('Deve buscar todos os contatos de emergência', async () => {
    const response = await request(app).get('/api/emergency-contacts');

    expect(response.statusCode).toBe(200);
    expect(response.body.length).toBeGreaterThan(0);
  });

  test('Deve buscar um contato de emergência por ID', async () => {
    const contact = await EmergencyContact.create({ user_id: 1, nome: 'Contato Individual', telefone: '0987654321' });

    const response = await request(app).get(`/api/emergency-contacts/${contact.id}`);

    expect(response.statusCode).toBe(200);
    expect(response.body.nome).toBe('Contato Individual');
  });

  test('Deve atualizar um contato de emergência', async () => {
    const contact = await EmergencyContact.create({ user_id: 1, nome: 'Contato Antigo', telefone: '0987654321' });

    const response = await request(app)
      .put(`/api/emergency-contacts/${contact.id}`)
      .send({ nome: 'Contato Atualizado', telefone: '1231231234' });

    expect(response.statusCode).toBe(200);
    expect(response.body.nome).toBe('Contato Atualizado');
  });


  test('Deve deletar um contato de emergência', async () => {
    const contact = await EmergencyContact.create({ user_id: 1, nome: 'Contato para Deletar', telefone: '0987654321' });

    const response = await request(app).delete(`/api/emergency-contacts/${contact.id}`);

    expect(response.statusCode).toBe(200); 
    expect(response.body.message).toBe('Contato deletado com sucesso');
  });
});
