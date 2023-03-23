const express = require("express");

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.static("public"));

app.listen(PORT,()=>console.log(`Server is listening on port ${PORT}`));

app.get("/",(req,res)=>{
    res.sendFile("index.html");
});

app.get("/user",(req,res)=>{
    res.send({name:"pepe", age:20})
});
