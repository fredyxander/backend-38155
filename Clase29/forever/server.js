const express = require("express");

const app = express();
const port = 8080;

//modo fork- 1 proceso
app.listen(port,()=>console.log(`Servidor corriendo en el puerto ${port} en el proceso ${process.pid}`));

app.get("/",(req,res)=>{
    for(let i=0;i<1e8;i++){}
    res.send(`Corriendo en el proceso ${process.pid} modificado`);
    // cluster.worker.kill();
});