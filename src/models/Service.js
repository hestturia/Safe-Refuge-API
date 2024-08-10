import { Model, DataTypes } from 'sequelize';
import sequelize from '../database/configDatabase'; 

class Service extends Model {}

Service.init({
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
  }
}, {
  sequelize,
  modelName: 'Service',
  tableName: 'services',
});

export { Service };
