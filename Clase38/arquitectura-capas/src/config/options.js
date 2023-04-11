const dotenv = require("dotenv");
dotenv.config();

const options = {
    server:{
        port:process.env.PORT
    },
    mongo:{
        url:process.env.MONGO_DB
    },
    sql:{},
    email:{}
}

module.exports = {options};