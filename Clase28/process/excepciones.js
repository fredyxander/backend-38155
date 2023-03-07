// process.on("uncaughtException",(error)=>{
//     console.log("Error capturado:", error)
// });

setTimeout(() => {
    console.log("codigo asincrono")
}, 3000);

console.log("primera linea ejecutandose");

llamadoFuncionQueNoExiste();

console.log("otras lineas de codigo");