//importamos la capa de base de datos
const { getDaos } = require("../daos/factory");
const {options} = require("../config/options");

const {userDao, productDao} = getDaos(options.server.persistence);

class UserService{
    static async getUsers(){
        return await userDao.getAll();
    };

    static async saveUser(user){
        return await userDao.create(user);
    };
};

module.exports = {UserService};