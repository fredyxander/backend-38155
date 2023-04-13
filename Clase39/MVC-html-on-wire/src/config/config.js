const dotenv = require("dotenv");
dotenv.config();

const config = {
    server:{
        port:process.env.PORT || 8080
    },
    sql:{},
    filesystem:{},
    mongo:{
        url:process.env.MONGO_URL
    }
};

module.exports = {config}