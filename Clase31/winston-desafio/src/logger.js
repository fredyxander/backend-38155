const winston = require("winston");
require("dotenv").config();

//configurar winston
const loggerDev = winston.createLogger({
    transports:[
        //definimos salidas con niveles
        new winston.transports.Console({level:"info"})
    ]
});

const loggerProd = winston.createLogger({
    transports:[
        //definimos salidas con niveles
        new winston.transports.File({filename:"./src/logs/errores.log", level:"warn"}),
        new winston.transports.File({filename:"./src/logs/debug.log", level:"debug"})
    ]
});

let logger=null;
//verificar el ambiente
if(process.env.NODE_ENV === "prod"){
    logger = loggerProd;
} else {
    logger = loggerDev;
}

module.exports = {logger};