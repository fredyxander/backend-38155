const express = require("express");
const {userManager} = require("../model/index");

const router = express.Router();

router.get("/",async(req,res)=>{
    const users = await userManager.getAll();
    console.log("users: ", users);
    res.render("home",{users:users});
});

module.exports = {viewRouter:router}