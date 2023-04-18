//importar capa de servicio
const {UserService} = require("../repositories/index");

const getUsersController = async(req,res)=>{
    try {
        const users = await UserService.getUsers();
        res.json({status:"success",data:users});
    } catch (error) {
        console.log(error);
        res.json({status:"error",message:error.message});
    }
};

const postUserController = async(req,res)=>{
    try {
        const user = await UserService.saveUser(req.body);
        res.json({status:"success", data:user});
    } catch (error) {
        console.log(error);
        res.json({status:"error",message:error.message});
    }
};

module.exports = {getUsersController,postUserController}