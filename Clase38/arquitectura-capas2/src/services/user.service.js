//importamos la capa de base de datos
const {userManager} = require("../model/index");


class UserService{
    static async getUsers(){
        return await userManager.getAll();
    };

    static async saveUser(user){
        return await userManager.create(user);
    }
};

module.exports = {UserService};