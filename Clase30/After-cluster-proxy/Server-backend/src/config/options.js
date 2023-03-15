const parseArgs = require("minimist");

//definir argumentos y valores por defecto
const argOptions = {alias:{m:"modo",p:"port"}, default:{modo:"FORK", port:8080}};

const objArguments = parseArgs(process.argv.slice(2), argOptions);
// console.log(objArguments);

const options = {
    server:{
        MODO: objArguments.modo,
        PORT: objArguments.port
    },
    mongoDB:{
        url:"mongodb+srv://fredy:coder@coderbackend.d0kaklh.mongodb.net/authDB?retryWrites=true&w=majority"
    }
};

module.exports = {options};