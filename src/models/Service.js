import sequelize from "../database/configDatabase.js";
import { DataTypes } from "sequelize";

const Service = sequelize.define("Service", {
  
  user_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },

  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  
  telefone: {
    type: DataTypes.STRING,
    allowNull: false,
  }
}, {
  tableName: 'services',
  timestamps: false,
}

export default Service;
