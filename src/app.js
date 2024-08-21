import express from "express";
import sequelize from "./database/configDatabase.js";
import routes from "./routers/index.js";

const app = express();
routes(app);


sequelize.sync({alter: true})
  .then(() => {
    console.log("Banco sincronizado");
  }) 
  .catch (error => console.error("falha na conexão", error));
  

export default app;