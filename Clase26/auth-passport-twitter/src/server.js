//importaciones
const express = require("express");
const session = require("express-session");
const handlebars = require("express-handlebars");
const {checkUserLogged} = require("./middlewares/auth");
const {AuthRouter} = require("./routes/auth.routes");
const mongoose = require("mongoose");
const {options} = require("./config/options");
const MongoStore = require("connect-mongo");
const passport = require("passport");

mongoose.set('strictQuery', false);
mongoose.connect(options.mongoDB.url,(err)=>{
    if(err) return console.log(`Error al conectarse a la db ${err}`);
    console.log("conexion a la db exitosa :)")
});

//servidor express
const app = express();
const PORT = process.env.PORT || 8080;
app.listen(PORT, ()=>console.log(`Server listening on port ${PORT}`));


//archivos estaticos
app.use(express.static(__dirname+"/public"));//ruta carpeta public


//motor de plantilla
//inicializar el motor de plantillas
app.engine(".hbs",handlebars.engine({extname: '.hbs'}));
//ruta de las vistas
app.set("views", __dirname+"/views");
//vinculacion del motor a express
app.set("view engine", ".hbs");


//interpretacion de formato json desde el cliente
app.use(express.json()); //lectura de json desde el cuerpo de la peticion.
app.use(express.urlencoded({extended:true})); //lectura de json desde un metodo post de formulario


//configuracion de la sesion
app.use(session({
    store:MongoStore.create({
        mongoUrl:options.mongoDB.url
    }),
    secret:"claveSecreta", //clave de encriptacion de la sesion

    //config para guardar en la memoria del servidor
    resave:false,
    saveUninitialized:false,
}));

//configurar passport
app.use(passport.initialize());//inicializar a passport dentro de nuestro servidor
app.use(passport.session());

//rutas asociadas a las paginas del sitio web
app.get("/",(req,res)=>{
    res.render("home")
});

app.get("/perfil",checkUserLogged,(req,res)=>{
    res.render("profile");
});

app.use(AuthRouter);