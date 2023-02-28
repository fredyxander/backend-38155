const express = require("express");
const jwt = require("jsonwebtoken");

const app = express();

app.listen(8080,()=>console.log("server running"));

//midlleware
const isValidToken = (req,res,next)=>{
    const headerToken = req.headers.authorization;

    if(!headerToken){
        return res.json({message:"usuario no autorizado"})
    }

    //'Bearer tokenPrueba' ->split(" ") => ["Bearer", "tokenPrueba"];
    const userToken = headerToken.split(" ")[1];
    //validar el token
    jwt.verify(userToken,"claveToken",(error,decodeToken)=>{
        if(error) return res.json({message:"usuario no autorizado"});
        req.user = decodeToken;
        next();
    })
}

//rutas
app.post("/login",(req,res)=>{
    const userLogin = {username:"pepe@gmail.com", password:"1234"};
    //1. validar si el usuario existe en la db y verificar contrasena
    //2. si el usuario es valido, se genera el token desde el servidor
    jwt.sign({username:userLogin.username},"claveToken",{expiresIn:"30s"},(error,token)=>{
        if(error) return res.json({message:"Error al autenticar al usuario"});
        res.json({access_token:token})
    });
});

app.get("/perfil",isValidToken,(req,res)=>{
    res.send(`token valido - datos de perfil de ${req.user.username}`)
});