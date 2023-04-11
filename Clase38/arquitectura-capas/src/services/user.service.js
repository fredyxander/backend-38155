//importamos la capa de base de datos
const {userManager} = require("../model/index");

const getUsers = async()=>{
    return await userManager.getAll();
};

const saveUser = async(user)=>{
    return await userManager.create(user);
};

// const addPetsToUser = async()=>{
//     const user = await userManager.getById(userId);
//     const pets = await petManager.getAll();
//     user.pets = pets;
//     return user;
// };

module.exports = {getUsers,saveUser};