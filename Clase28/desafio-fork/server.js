const express = require("express");
const {sumar} = require("./child");
const {fork} = require("child_process");

const app = express();
const PORT = 8080;

app.listen(PORT,()=>console.log(`Server listening on port ${PORT}`));


let visitas = 0;
app.get("/visitas",(req,res)=>{
    res.send(`Numero de visitas: ${visitas++}`);
});

app.get("/ruta-bloqueante",(req,res)=>{
    const resultado = sumar();
    res.send(`El resultado de la suma es: ${resultado}`);
});

app.get("/ruta-nobloqueante",(req,res)=>{
    const child = fork("child.js");
    child.send("Iniciar");
    child.on("message",(childMsg)=>{
        console.log("mensaje del hijo:",childMsg)
        res.send(`El resultado de la suma es: ${childMsg}`);
    });
});