const express = require("express");
const compression = require("compression");

const PORT = 8080;

const app = express();

//compresion general para todos los endpoints
// app.use(compression());

app.listen(PORT,()=>console.log(`Server listening on port ${PORT}`));

app.get("/saludo",(req,res)=>{
    res.send('Hola que tal '.repeat(1000));
});

app.get("/saludoZip",compression(),(req,res)=>{
    res.send('Hola que tal '.repeat(1000));
});