import { Sequelize } from "sequelize";

 const sequelize = new Sequelize("safe-haven", "pda-safe-haven1", `BpJY)LNkQa"0p(EC`, {
    host: "34.69.115.225",
    dialect: "mysql"
 })

export default sequelize;