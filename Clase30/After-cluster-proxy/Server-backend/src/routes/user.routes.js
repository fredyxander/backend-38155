const Router = require("express").Router;
const {UserModel} = require("../models/user.model");

const router = Router();

router.get("/",async(req,res)=>{
    try {
        const users = await UserModel.find({});
        res.json({users});
    } catch (error) {
        res.send(`Hubo un error ${error}`);
    }
});

module.exports = {UserRouter:router};