class UserManagerMemory{
    constructor(){
        this.users = [
            {
                title:"lapiz",
                price:200
            }
        ];
    };

    async create(user){
        this.users.push(user);
    };

    async getAll(){
        return this.users;
    };

    async getById(id){};
}

module.exports = {UserManagerMemory}