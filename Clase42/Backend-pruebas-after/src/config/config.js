const dotenv = require("dotenv");
dotenv.config();

const PORT= process.env.PORT;
const DB_USER = process.env.DB_USER;
const DB_PASS = process.env.DB_PASS;
const DB_NAME = process.env.DB_NAME;
const PERSISTENCE = process.env.PERSISTENCE;

const options = {
    server:{
        port:PORT,
        persistence:PERSISTENCE
    },
    mongo:{
        url:`mongodb+srv://${DB_USER}:${DB_PASS}@coderbackend.d0kaklh.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`
    }
}

module.exports= {options}