import express from "express";
import sequelize from "./database/configDatabase.js";
import routes from "./routers/index.js";

const app = express();
routes(app);


sequelize.sync()
  .then(() => {
    console.log("Banco sincronizado");
  }) 
  .catch (error => console.error("falha na conexão", error));
  
  
// try {
//     await sequelize.authenticate();
//     console.log("Conexão feita com sucesso");
//   } catch (error) {
//     console.error("falha na conexão", error);
//   }

export default app;