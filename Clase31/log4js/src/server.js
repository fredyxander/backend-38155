const express = require("express");
const log4js = require("log4js");

const PORT = 8080;
const app = express();

//configurar log4js
log4js.configure(
    {
        appenders:{
            //definir salidas de datos =>mostrar/guardar los mensajes
            consola:{type:"console"},
            archivo:{type:"file", filename:"./src/logs/mensajes.txt"},
            //definir salidas con niveles
            loggerConsola: {type:"logLevelFilter",appender:'consola', level:'trace'},
            loggerArchivo: {type:"logLevelFilter", appender:'archivo', level:'warn'}
        },
        categories:{
            default:{appenders:["loggerConsola","loggerArchivo"],level:"all"}
        }
    }
);

//creamos variable del logger utilizando log4js
const logger =log4js.getLogger();//creando un logger que utiliza la categoria default


app.listen(PORT,()=>console.log(`Server listening on port ${PORT}`));

logger.trace("imprimiendo mensaje con nivel trace");
logger.debug("imprimiendo mensaje con nivel debug");
logger.info("imprimiendo mensaje con nivel info");
logger.warn("imprimiendo mensaje con nivel warn");
logger.error("imprimiendo mensaje con nivel error");
logger.fatal("imprimiendo mensaje con nivel fatal");