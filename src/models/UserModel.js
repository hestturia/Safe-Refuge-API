import sequelize from "../database/configDatabase.js";
import { DataTypes } from "sequelize";

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
        type: DataTypes.NUMBER,
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
})

export default User;