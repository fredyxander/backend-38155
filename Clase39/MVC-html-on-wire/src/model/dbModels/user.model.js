const mongoose = require("mongoose");

const userCollection = "users";

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    lastname:{
        type:String,
        required:true
    },
    dni:{
        type:String,
        required:true,
        unique:true
    }
});

const UserModel = mongoose.model(userCollection,userSchema);

module.exports = {UserModel};