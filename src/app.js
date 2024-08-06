import express from "express";
import sequelize from "./dataBase/configDatabase.js";

const app = express();

try {
    await sequelize.authenticate();
    console.log("Conexão feita com sucesso");
  } catch (error) {
    console.error("falha na conexão", error);
  }

export default app;