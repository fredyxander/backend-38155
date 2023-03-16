const pino = require("pino");
require("dotenv").config();

//configurar loggers utilizando pino
const loggerDev = pino();//si no pasamos argumentos a pino, defecto la salidad consola
loggerDev.level = "info";

const loggerProd = pino("./src/logs/errores.log");
loggerProd.level="error";

let logger=null;
//verificar el ambiente
if(process.env.NODE_ENV === "prod"){
    logger = loggerProd;
} else {
    logger = loggerDev;
}

module.exports = {logger};