const express = require("express");
const cluster = require("cluster");
const os = require("os");//obtener informacion del sistema operativo que este ejcutando la aplicacion de node

const coresNumber = os.cpus().length;
// console.log("Numero de nucleos en el computador",coresNumber);

const app = express();
const port = 8080;

//modo cluster - multiples procesos
if(cluster.isPrimary){

    //crear los subprocesos del cluster, basado en los nucleos disponibles.
    for(let i=0;i<coresNumber;i++){
        cluster.fork();
    }

    //detectamos cuando un subproceso del cluster deje de funcionar
    cluster.on("exit",(worker)=>{
        console.log(`El proceso ${worker.process.pid} dejo funcionar`);
        cluster.fork();//crear un subproceso que sustituye al proceso que dejo de funcionar.
    });

} else {
    app.listen(port,()=>console.log(`Servidor corriendo en el puerto ${port} en el proceso ${process.pid}`));

    app.get("/",(req,res)=>{
        for(let i=0;i<1e8;i++){}
        res.send(`Corriendo en el proceso ${process.pid}`);
        // cluster.worker.kill();
    });
}

//modo fork- 1 proceso
// app.listen(port,()=>console.log(`Servidor corriendo en el puerto ${port} en el proceso ${process.pid}`));

// app.get("/",(req,res)=>{
//     for(let i=0;i<1e8;i++){}
//     res.send(`Corriendo en el proceso ${process.pid}`);
//     // cluster.worker.kill();
// });