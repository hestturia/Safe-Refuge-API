import { Sequelize } from "sequelize";

const sequelize = new Sequelize(
   "safe-haven", //database
   "root", //user
   "{#bej&Bu_fJ}&~vt", /*pass*/  { 
    host: "34.69.21.255",
    dialect: "mysql"
 });

export default sequelize;