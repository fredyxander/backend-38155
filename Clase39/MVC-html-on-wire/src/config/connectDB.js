const mongoose = require("mongoose");
const {config} = require("./config");

const connectDB = async()=>{
    try {
      await  mongoose.connect(config.mongo.url);
      console.log("base de datos conectada");
    } catch (error) {
        console.log("hubo un error al conectarse a la base de datos");
    }
}

module.exports = {connectDB}