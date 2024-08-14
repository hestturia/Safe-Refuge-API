import { DataTypes } from 'sequelize';
import sequelize from "../database/configDatabase.js";

const EmergencyContact = sequelize.define('EmergencyContact', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Users', 
            key: 'id',
        },
        onDelete: 'CASCADE', // deletar tudo
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
    tableName: 'EmergencyContacts', // nome da tabela bd
    timestamps: true, 
});
export default EmergencyContact;
