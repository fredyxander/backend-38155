const express = require("express");

const { sumar,restar,multiplicar,dividir } = require("operaciones-matematicas-38155");

const app = express();
const port = 8080;

app.listen(port,()=>console.log(`Server on port ${port}`));

app.get("/",(req,res)=>{
    res.send("Hola coder!");
});

app.get("/operacion",(req,res)=>{
    const {num1,num2}=req.query;
    const n1 = parseInt(num1);
    const n2 = parseInt(num2);
    const resultado = multiplicar(n1,n2);
    res.send(`El resultado de la multiplicacion es ${resultado}`);
});