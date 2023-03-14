//importaciones
const express = require("express");
const session = require("express-session");
const handlebars = require("express-handlebars");
const {checkUserLogged} = require("./middlewares/auth");


//servidor express  nodejs
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
    secret:"claveSecreta", //clave de encriptacion de la sesion

    //config para guardar en la memoria del servidor
    resave:true,
    saveUninitialized:true,
}));


let users=[];
//[{name:"pepe",username:"pepe10",password:"123"}]

//rutas asociadas a las paginas del sitio web
app.get("/",(req,res)=>{
    res.render("home")
});

app.post("/signup",(req,res)=>{
    const {username} = req.body;
    const newUser = req.body;
    //1.Verificar si el usuario existe en la db
    const userDB = users.find(u=>u.username===username);
    if(userDB){
        res.render("signup",{error:"el usuario ya esta registrado"})
    } else {
        //guardar ese nuevo usuario en la db
        users.push(newUser);
        req.session.user=newUser;
        res.redirect("/perfil");
    }
});

app.get("/registro",(req,res)=>{
    res.render("signup")
});

app.post("/login",(req,res)=>{
    //logica login
    const {username, password} = req.body;
    //1.buscar el usuario en la db
    const userDB = users.find(u=>u.username===username);
    if(!userDB){
        res.render("login",{error:"El usuario no esta registrado"});
    } else {
        //2. validar la contrasena
        if(userDB.password === password){
            req.session.user=req.body;
            res.redirect("/perfil");
        } else {
            res.render("login",{error:"La contrasena no es valida"});
        }
    }
});

app.get("/inicio-sesion",(req,res)=>{
    res.render("login");
});

app.get("/logout",(req,res)=>{
    req.session.destroy(error=>{
        if(error) return res.send("Hubo un error al cerrar la sesion");
        res.redirect("/")
    })
});

app.get("/perfil",checkUserLogged,(req,res)=>{
    res.render("profile");
});