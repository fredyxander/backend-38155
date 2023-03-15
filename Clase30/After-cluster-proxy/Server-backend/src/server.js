//importaciones
const express = require("express");
const session = require("express-session");
const handlebars = require("express-handlebars");
const {checkUserLogged} = require("./middlewares/auth");
const mongoose = require("mongoose");
const {options} = require("./config/options");
const MongoStore = require("connect-mongo");
const passport = require("passport");
const cluster = require("cluster");
const os = require("os");
const numCores = os.cpus().length;

//importaciones de rutas
const {AuthRouter} = require("./routes/auth.routes");
const {UserRouter} = require("./routes/user.routes");

mongoose.set('strictQuery', false);
mongoose.connect(options.mongoDB.url,(err)=>{
    if(err) return console.log(`Error al conectarse a la db ${err}`);
    console.log("conexion a la db exitosa :)")
});

//servidor express nodejs
const app = express();
const PORT = options.server.PORT;

if(options.server.MODO === "CLUSTER" && cluster.isPrimary){
    //modo cluster
    for(let i=0;i<numCores;i++){
        cluster.fork();
    };

    cluster.on("exit",(worker)=>{
        console.log(`proceso ${worker.process.pid} murio`);
        cluster.fork();
    });

} else {
    //modo fork
    app.listen(PORT, ()=>console.log(`Server listening on port ${PORT} on process ${process.pid}`));

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
    app.use("/users", UserRouter);
}