const express = require("express");
const {userManager} = require("../model/index");

const router = express.Router();

router.post("/users",async(req,res)=>{
    try {
        const user = req.body;
        const userCreated = await userManager.create(user);
        res.json({status:"success", message:"user created", data:userCreated});
    } catch (error) {
        console.log(error.message);
        res.status(400).json({status:"error", message:"hubo un error al crear el usuario"});
    }
});

router.get("/users",async(req,res)=>{
    try {
        const users = await userManager.getAll();
        res.json({status:"success", data:users});
    } catch (error) {
        console.log(error.message);
        res.status(400).json({status:"error", message:"hubo un error al obtener todos los usuarios"});
    }
});

module.exports = {userRouter:router}