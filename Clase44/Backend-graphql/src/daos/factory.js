const {connectDB} = require("../config/dbConnection");

const getDaos = (persistence)=>{
    let newsDao;
    let usersDao;
    let commentsDao;
    //logica del patron factory
    switch (persistence) {
        case "mongo":
            //solo cuando se requirea mongo conectamos la base de datos
            connectDB();
            //importar solo lo referente a las clases de mongo.
            const {NewsMongo} = require("./managers/newsMongo");
            const {newsModel} = require("./models/news.model");
            const { UsersMongo} = require("./managers/usersMongo");
            const { usersModel } = require("./models/users.model");
            newsDao = new NewsMongo(newsModel);
            usersDao = new UsersMongo(usersModel);
            break;
        case "memory":
            // const {UserManagerMemory} = require("./manager/users/userManagerMemory");
            // const { ProductManagerMemory} = require("./manager/products/productManagerMemory");
            // userDao = new UserManagerMemory();
            // productDao = new ProductManagerMemory();
            break;
        case "firebase":
            // const {UserManagerMemory} = require("./manager/users/userManagerMemory");
            // const { ProductManagerMemory} = require("./manager/products/productManagerMemory");
            // userDao = new UserManagerMemory();
            // productDao = new ProductManagerMemory();
            break;
    }
    return {newsDao, usersDao, commentsDao}
}

module.exports = {getDaos}