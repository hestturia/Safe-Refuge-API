import sequelize from '../database/configDatabase.js';
import { DataTypes } from 'sequelize';

const Service = sequelize.define('Service', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  telefone: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  tableName: 'services',
});

export default Service;

