class UserManagerMongo{
    constructor(model){
        this.model=model;
    };

    async create(user){
        try {
            const userCreated = await this.model.create(user);
            if(userCreated){
                return userCreated;
            } else {
                throw new Error("hubo un error al crear el usuario");
            }
        } catch (error) {
            throw new Error(`hubo un error al crear el usuario ${error.message}`);
        }
    };

    async getAll(){
        try {
            const users = await this.model.find();
            const data = JSON.parse(JSON.stringify(users));
            return data;
        } catch (error) {
            throw new Error("No se pudo obtener los usuarios");
        }
    };

    async getById(id){
        try {
            const user = await this.model.findById(id);
            if(user){
                return user;
            } else {
                throw new Error("El usuario no existe");
            }
        } catch (error) {
            throw new Error("No se pudo obtener el usuario");
        }
    };
}

module.exports = {UserManagerMongo}