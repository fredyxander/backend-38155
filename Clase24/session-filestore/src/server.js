const express = require("express");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const fileStrategy = require("session-file-store");

const app = express();
app.listen(8080,()=>console.log("server listening on port 8080"));

app.use(cookieParser());
const FileStore = fileStrategy(session);//vinculando la sesion con el sistema de persistencia

//configuracion las sesiones del lado del servidor
app.use(session({

    store: new FileStore({
        path:"./src/sessions",
        // ttl: 20//tiempo de vida en segundos de la session
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