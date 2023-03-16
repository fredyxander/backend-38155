const log4js = require("log4js");
require("dotenv").config();

//configurar log4js
log4js.configure(
    {
        appenders:{
            //definir salidas de datos =>mostrar/guardar los mensajes
            consola:{type:"console"},
            archivoErrores:{type:"file", filename:"./src/logs/errores.log"},
            archivoDebug: {type:"file", filename:"./src/logs/debug.log"},
            //definir salidas con niveles
            loggerConsola: {type:"logLevelFilter",appender:'consola', level:'info'},
            loggerErrores: {type:"logLevelFilter", appender:'archivoErrores', level:'error'},
            loggerDebug: {type:"logLevelFilter", appender:'archivoDebug', level:'debug'},
        },
        categories:{
            default:{appenders:["loggerConsola"],level:"all"},
            production:{appenders:["loggerErrores","loggerDebug"], level:"all"}
        }
    }
);

let logger=null;
//verificar el ambiente
if(process.env.NODE_ENV === "prod"){
    logger = log4js.getLogger("production");
} else {
    logger = log4js.getLogger();//categoria default
}

module.exports = {logger};