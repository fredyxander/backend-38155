const express = require("express");
//importamos la capa de controlador
const {getUsersController,postUserController} = require("../controllers/user.controller");

const router = express();

//definir las rutas para usuarios
router.get("/",getUsersController);
router.post("/",postUserController);


module.exports = {userRouter:router};