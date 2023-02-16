const express = require("express");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const redis = require("redis");
const redisStrategy = require("connect-redis");

const app = express();
app.listen(8080,()=>console.log("server listening on port 8080"));

app.use(cookieParser());
//configuracion de redis
const redisClient = redis.createClient({legacyMode:true});//cliente de nodejs para conectarse a redis
redisClient.connect().then(()=>{
    console.log("conectado correctamente a redis")
}).catch((error)=>{
    console.log(`Hubo un error al conectarse a redis ${error}`)
});
const RedisStore = redisStrategy(session);//viculacion con las sessiones a redis

//configuracion las sesiones del lado del servidor
app.use(session({

    store: new RedisStore({
        host:"localhost",
        port:"6379",
        client:redisClient,
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