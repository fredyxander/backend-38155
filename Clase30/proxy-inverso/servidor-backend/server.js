const express = require("express");

const PORT = parseInt(process.argv[2]) || 8080;
const app = express();

app.listen(PORT,()=>console.log(`server listening on port ${PORT}`));

app.get("/hola",(req,res)=>{
    res.send(`servidor en el proceso ${process.pid} en el puerto ${PORT}`);
});