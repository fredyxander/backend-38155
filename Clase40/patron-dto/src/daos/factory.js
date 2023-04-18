const {connectDB} = require("../config/dbConnection");

const getDaos = (persistence)=>{
    let userDao;
    let productDao;
    let cartDao;
    //logica del patron factory
    switch (persistence) {
        case "mongo":
            //solo cuando se requirea mongo conectamos la base de datos
            connectDB();
            //importar solo lo referente a las clases de mongo.
            const {UserManagerMongo} = require("./manager/users/userManagerMongo");
            const {UserModel} = require("./dbModels/user.model");
            const {ProductManagerMongo} = require("./manager/products/productManagerMongo");
            const {ProductModel} = require("./dbModels/product.model");
            userDao = new UserManagerMongo(UserModel);
            productDao = new ProductManagerMongo(ProductModel);
            break;
        case "memory":
            const {UserManagerMemory} = require("./manager/users/userManagerMemory");
            const { ProductManagerMemory} = require("./manager/products/productManagerMemory");
            userDao = new UserManagerMemory();
            productDao = new ProductManagerMemory();
            break;
    }
    return {userDao, productDao}
}

module.exports = {getDaos}