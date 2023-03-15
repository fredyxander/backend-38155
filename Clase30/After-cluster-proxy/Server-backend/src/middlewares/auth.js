const checkUserLogged = (req,res,next)=>{
    //si el usuario esta autenticado
    if(req.isAuthenticated()){
        next()
    } else {
        res.send('<div>debes iniciar sesion <a href="/inicio-sesion">inicia sesion</a></div>')
    }
};

module.exports = {checkUserLogged};