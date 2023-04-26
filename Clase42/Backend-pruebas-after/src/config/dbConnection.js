const mongoose = require("mongoose");
const {options} = require("./config");

const connectDB = async()=>{
    try {
      await  mongoose.connect(options.mongo.url);
      console.log("base de datos conectada");
    } catch (error) {
        console.log("hubo un error al conectarse a la base de datos");
    }
}

module.exports = {connectDB}