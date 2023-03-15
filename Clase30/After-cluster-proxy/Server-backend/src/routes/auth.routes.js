const Router = require("express").Router;
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const {UserModel} = require("../models/user.model");

const router = Router();

//serailizacion y deserializacion
//{..usuario}-> {id:1}
passport.serializeUser((user,done)=>{
    return done(null,user.id)
}); //req.session.passport.user={id:1}

//deserializacion: {id:1}->{usuario}
passport.deserializeUser((id,done)=>{
    //verificamos si el usuario existe en la base de datos
    UserModel.findById(id,(err,userDB)=>{
        return done(err,userDB);
    })
}); //req.user

//crear estrategia para registrar a los usuarios
passport.use("signupStrategy",new LocalStrategy(
    {
        passReqToCallback:true,
        usernameField:"email"
    },
    (req,username, password, done)=>{
        // console.log("body", req.body);
        //logica del registro
        //1.verificar si ya el usuario existe en la db
        UserModel.findOne({username:username},(err,userDB)=>{
            if(err) return done(err,false,{message:`Hubo un error al buscar el usuario ${err}`});
            if(userDB) return done(null, false, {message:"El usuario ya existe"});
            //2.si el usuario no existe, creamos el usuario en la db
            const newUser ={
                name:req.body.name,
                username:username,
                password:password
            };
            UserModel.create(newUser,(err,userCreated)=>{
                if(err) return done(err,false,{message:"Hubo un error al crear al usuario"});
                return done(null, userCreated,{message:"Usuaurio creado"})
            })
        })
    }
));

router.post("/signup", passport.authenticate("signupStrategy", {
    failureRedirect:"/registro",
    failureMessage:true// req.session.messages
}) ,(req,res)=>{
    res.redirect("/perfil")
});

router.get("/registro",(req,res)=>{
    const errorMsg = req.session.messages ? req.session.messages[0] : '';
    res.render("signup", {error:errorMsg});
    req.session.messages = [];
});

router.post("/login",(req,res)=>{
});

router.get("/inicio-sesion",(req,res)=>{
    res.render("login");
});

router.get("/logout",(req,res)=>{
    req.logout(error=>{
        if(error) return res.send("Hubo un error al cerrar la sesion");
        req.session.destroy(error=>{
            if(error) return res.send("Hubo un error al cerrar la sesion");
            res.redirect("/")
        });
    })
});


module.exports = {AuthRouter:router};