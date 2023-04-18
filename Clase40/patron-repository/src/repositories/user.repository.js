const {UserDTO} = require("../daos/dtos/user.dto");

class UserRepository{
    constructor(dao){
        this.dao=dao;
    };

    async getUsers(){
        const users = await this.dao.getAll();
        const newUsersDto = users.map(user=>new UserDTO(user));
        // console.log("newUsersDto", newUsersDto);
        return newUsersDto;
    };

    async saveUser(user){
        return await this.dao.create(user);
    };

    async getUserById(id){
        return await this.dao.getById(id);
    };
}

module.exports = {UserRepository}