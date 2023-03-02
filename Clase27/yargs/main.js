const argumentos = process.argv.slice(2);
const Yargs = require("yargs/yargs")(argumentos);

const args = Yargs
    .default({
        m:"prod",
        p:0,
        d:false
    })
    .alias({
        m:"modo",
        p:"puerto",
        d:"debug"
    })
    .boolean("debug")
    .argv;

// console.log(args)

const PORT = args.puerto;
console.log(PORT)