const ParsedArgs = require("minimist");

const argumentos = process.argv.slice(2);

const args = ParsedArgs(argumentos,{
    alias:{
        m:"modo",
        p:"puerto",
        d:"debug"
    },
    default:{
        m:"prod",
        p:0,
        d:false
    }
});

// console.log(args);
const {modo, puerto, debug} = args;
const newArgs ={modo, puerto, debug};
console.log(newArgs)