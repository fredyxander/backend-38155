const dotenv = require("dotenv");
dotenv.config();

const options = {
    server:{
        port:process.env.PORT,
        persistence:process.env.PERSISTENCE
    },
    mongo:{
        url:process.env.MONGO_DB
    },
    sql:{},
    email:{}
}

module.exports = {options};