const express = require("express");
const Contenedor = require("../containers/contenedorProductos");

const {checkLogged, userNotLogged} = require("../middlewares/auth");

//service
const productosApi = new Contenedor("productos.txt");

const router= express.Router();

router.get('/', checkLogged, (req,res)=>{
    res.render('home',{username:req.session.username});
});

router.get('/users',checkLogged, (req,res)=>{
    res.render('users',{username:"fredy"})
});

router.get('/productos',checkLogged,async(req,res)=>{
    res.render('products',{products: await productosApi.getAll()})
});

router.get("/login",userNotLogged,(req,res)=>{
    res.render("login");
});

module.exports ={WebRouter:router};