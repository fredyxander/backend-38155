const mongoose = require("mongoose");

const productCollection= "product";

const productSchema= new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    }
})

const ProductModel = mongoose.model(productCollection, productSchema);

module.exports = {ProductModel}