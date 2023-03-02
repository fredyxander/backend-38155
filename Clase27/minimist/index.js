const ParsedArgs = require("minimist");

const argumentos = process.argv.slice(2);

const args = ParsedArgs(argumentos,{
    alias:{
        a:"age"
    },
    default:{//propiedades con valores con defecto
        idioma:"español"
    }
});

console.log(args);