class UsersMongo{
    constructor(model){
        this.model = model;
    }

    async getUsers(){
        try {
            const users = await this.model.find();
            return users;
        } catch (error) {
            throw new Error(error.message);
        }
    };

    async getUserById(id){
        try {
            const user = await this.model.findById(id);
            if(!user){
                throw new Error("no se elcontro el usuario");
            } else {
                return user;
            }
        } catch (error) {
            throw new Error(error.message);
        }
    };

    async addUser(user){
        try {
            const userSaved = await this.model.create(user);
            return userSaved
        } catch (error) {
            throw new Error(error.message);
        }
    };

    async deleteUser(id){
        try {
            const userDeleted = await this.model.findByIdAndDelete(id);
            if(!userDeleted){
                throw new Error("no se puede borrar el usuario porque no existe");
            } else {
                return "usuario eliminado"
            }
        } catch (error) {
            throw new Error(error.message);
        }
    };
}

module.exports = {UsersMongo}