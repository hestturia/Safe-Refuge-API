import sequelize from "../database/configDatabase.js";
import { DataTypes } from "sequelize";

const Report = sequelize.define("Report", {
    id: {
        type: DataTypes.INTEGER,
		primaryKey: true,
		autoIncrement: true,
    },

    descrition : {
        type: DataTypes.STRING,
        allowNull: false, 
    },

    location: {
        type: DataTypes.STRING,
    },

    anonymous: {
        type: DataTypes.BOOLEAN,
    }
}, {
    tableName: "reports",
    timestamps: false,
});

export default Report;