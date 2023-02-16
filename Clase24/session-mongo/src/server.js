const express = require("express");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const MongoStore = require("connect-mongo");

const app = express();
app.listen(8080,()=>console.log("server listening on port 8080"));

app.use(cookieParser());

//configuracion las sesiones del lado del servidor
app.use(session({

    store: MongoStore.create({
        mongoUrl:"AGREGAR RUTA DE LA BASE DE DATOS DE MONGO, REEMPLAZAR CONTRASE;A Y AGREGAR EL NOMBRE DE LA BASE DE DATOS PARA ALMACENAR LAS SESIONES",
        ttl:30
    }),

    //clave de encriptacion de la informacion
    secret:"claveSecreta",

    //donde vamos a almacenar las sesiones, sesiones en memoria
    resave:true,
    saveUninitialized:true,

    //configurar cookie de la sesion
    // cookie:{
    //     maxAge: 20000 //10seg
    // }
}));


app.get("/login",(req,res) => {
    // console.log(req.session)
    const {nombre} = req.query;
    if(req.session.username){
        res.redirect("/perfil")
    } else {
        if(nombre){
            req.session.username = nombre;
            res.send("sesion inciada");
        } else {
            res.send("por favor ingresa un nombre")
        }
    }
});

app.get("/perfil", (req,res)=>{
    console.log(req.session)
    if(req.session.username){
        res.send(`Bienvenido ${req.session.username}`)
    } else {
        res.redirect("/login")
    }
});

app.get("/logout",(req,res)=>{
    req.session.destroy(error=>{
        if(!error) return res.send("logout exitoso")
        res.send(`Error:${error}`).status(500)
    })
});