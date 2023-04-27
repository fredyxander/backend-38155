const {Router} = require("express");

const router = Router();

let products=[];

router.post("/",(req,res)=>{
    const newProduct = req.body;
    products.push(newProduct);
    const productsEmpty = products.length>0 ? false :true;
    res.render("index",{products: products, productsEmpty});
});

module.exports = {productRouter: router};