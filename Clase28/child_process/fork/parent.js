const {fork} = require("child_process");

//crear el proceso hijo o secundario
const child = fork("child.js");

//comenzar el programa-el proceso padre(principal)
console.log("comienza el proceso padre");

//enviamos un mensaje al proceso hijo para comenzar
child.send({message:"Iniciar"});

child.on("message",(childMsg)=>{
    console.log("mensaje recibido del hijo: ", childMsg);
    process.exit();
});