//importamos la capa de base de datos
const { userDao } = require("../daos/index");

class UserService{
    static async getUsers(){
        return await userDao.getAll();
    };

    static async saveUser(user){
        return await userDao.create(user);
    };
};

module.exports = {UserService};