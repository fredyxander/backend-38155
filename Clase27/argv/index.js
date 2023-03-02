// console.log(process.argv)
const argumentos = process.argv.slice(2);
console.log(argumentos)

if(argumentos[0] === "es"){
    console.log("servidor funcionando en espanol")
} else {
    console.log("server working in english")
}