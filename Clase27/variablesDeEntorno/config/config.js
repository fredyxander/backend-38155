const dotenv = require("dotenv");
dotenv.config(); //asignar las variables del archivo .env al objeto process.env

const config = {
    PORT: process.env.PORT || 3000,
    MONGO_URL: process.env.MONGO_URL || "http/mongo/dbPruebas"
};

module.exports = config;