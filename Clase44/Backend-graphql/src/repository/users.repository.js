class UsersRepository{
    constructor(dao){
        this.dao=dao;
    }

    async getUsers(){
        return await this.dao.getUsers();
    };

    async getUserById({id}){
        return await this.dao.getUserById(id);
    };

    async addUser({user}){
        return await this.dao.addUser(user);
    };

    async deleteUser({id}){
        return await this.dao.deleteUser(id);
    };
};

module.exports = {UsersRepository}


// getUsers: [User],
// getUserById(id:String): User

// addUser(user:UserInput): User,
// deleteUser(id:String): String