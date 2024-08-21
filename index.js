import express from 'express';
import swaggerUi from 'swagger-ui-express';
import YAML from 'yamljs';
import cors from 'cors';
import morgan from 'morgan'; 

 const app = express();

import serviceRouter from './src/routers/serviceRouter.js'; 
import EmergenciaRouter from './src/routers/EmergenciaRouter.js'; 
const app = express();

app.use(cors());
app.use(morgan('combined'));

const swaggerDocument = YAML.load('./swagger.yaml');
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));


app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).json({
    message: err.message || 'Internal Server Error',
    error: process.env.NODE_ENV === 'development' ? err : {}
  });
});


let server;
if (process.env.NODE_ENV !== 'test') {
  const PORT = process.env.PORT || 3000;
  server = app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
    console.log(`Swagger disponível em http://localhost:${PORT}/api-docs`);
  });
}

export { app, server }; async (params) => {
  // Exportar o servidor para testes pls
}
