const express = require('express');

const app = express();
const port = 8080;

app.listen(port,()=>console.log(`Server listening on port ${port}`));

let numbers=[];
app.post("/ingreso/:numero",(req,res)=>{
    const number = parseInt(req.params.numero);
    numbers.push(number);
    res.json({message:"numero agregado"});
});

app.get("/egreso",(req,res)=>{
    res.json({numbers});
});
