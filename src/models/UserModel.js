import sequelize from "../database/configDatabase.js";
import { DataTypes } from "sequelize";
import EmergencyContact from './EmergencyContactModel.js';

const User = sequelize.define("User", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull:false,
    },

    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    age: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            isInt: true,
            min: 0,
        }
    },

    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true,
        }
    },

    password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [8, 100],
        }
    }
}, {
    tableName: "users",
});

// relacionando o usuario com os contatos de emergencia

User.hasMany(EmergencyContact, {
    foreignKey: 'user_id',
    as: 'EmergencyContacts', // Nome do campo usado para acessar os contatos de emergência
});

EmergencyContact.belongsTo(User, {
    foreignKey: 'user_id',
    as: 'user', // Nome do campo usado para acessar o usuário associado
});

export default User;