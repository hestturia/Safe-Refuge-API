import request from "supertest";
import { app } from "../index.js";
import Service from "../src/models/Service.js";

describe('Service API', () => {
  beforeAll(async () => {
    await Service.sync({ force: true });
  });

  afterAll(async () => {
    await Service.drop();
  });

  it('Deve criar um novo serviço', async () => {
    const response = await request(app)
      .post('/api/services')
      .send({
        user_id: 1,
        nome: 'Serviço de Teste',
        telefone: '1234567890'
      });

    expect(response.statusCode).toBe(201);
    expect(response.body).toHaveProperty('id');
    expect(response.body.nome).toBe('Serviço de Teste');
  });

  it('Deve buscar todos os serviços', async () => {
    const response = await request(app).get('/api/services');

    expect(response.statusCode).toBe(200);
    expect(response.body.length).toBeGreaterThan(0);
  });

  it('Deve buscar um serviço por ID', async () => {
    const service = await Service.create({ user_id: 1, nome: 'Serviço Individual', telefone: '0987654321' });

    const response = await request(app).get(`/api/services/${service.id}`);

    expect(response.statusCode).toBe(200);
    expect(response.body.nome).toBe('Serviço Individual');
  });

  it('Deve atualizar um serviço', async () => {
    const service = await Service.create({ user_id: 1, nome: 'Serviço Antigo', telefone: '0987654321' });

    const response = await request(app)
      .put(`/api/services/${service.id}`)
      .send({ nome: 'Serviço Atualizado', telefone: '1231231234' });

    expect(response.statusCode).toBe(200);
    expect(response.body.nome).toBe('Serviço Atualizado');
  });

  it('Deve deletar um serviço', async () => {
    const service = await Service.create({ user_id: 1, nome: 'Serviço para Deletar', telefone: '0987654321' });

    const response = await request(app).delete(`/api/services/${service.id}`);

    expect(response.statusCode).toBe(204);
  });
});
