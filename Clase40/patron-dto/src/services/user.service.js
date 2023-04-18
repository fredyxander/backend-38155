//importamos la capa de base de datos
const { getDaos } = require("../daos/factory");
const {options} = require("../config/options");
const {UserDTO} = require("../daos/dtos/user.dto");

const {userDao, productDao} = getDaos(options.server.persistence);

class UserService{
    static async getUsers(){
        const users = await userDao.getAll();
        const newUsersDto = users.map(user=>new UserDTO(user));
        // console.log("newUsersDto", newUsersDto);
        return newUsersDto;
    };

    static async saveUser(user){
        return await userDao.create(user);
    };
};

module.exports = {UserService};