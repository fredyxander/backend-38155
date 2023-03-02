const dotenv = require("dotenv");
const envFile = process.env.NODE_ENV === "dev" ? ".env.development" : ".env.production";


dotenv.config({
    path:envFile
}); //asignar las variables del archivo .env al objeto process.env

const config = {
    PORT: process.env.PORT || 3000,
    MONGO_URL: process.env.MONGO_URL || "http/mongo/dbPruebas",
    MODE: process.env.MODE || ""
};

module.exports = config;