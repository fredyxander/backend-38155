const mongoose = require("mongoose");

class ConnectDB{
    static #instance;

    constructor(){
        mongoose.connect("mongodb+srv://fredy:coder@coderbackend.d0kaklh.mongodb.net/mvcDB?retryWrites=true&w=majority")
    }

    static async getInstance(){
        if(ConnectDB.#instance){
            console.log("base de datos ya conectada");
            return ConnectDB.#instance;
        }
        this.#instance = new ConnectDB();
        console.log("base de datos conectada");
        return this.#instance;
    }
}

module.exports = {ConnectDB}