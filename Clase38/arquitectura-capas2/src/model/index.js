const {UserManagerMongo} = require("./manager/user.manager");
const {UserModel} = require("./dbModels/user.model");

const userManager = new UserManagerMongo(UserModel);

module.exports = {userManager};