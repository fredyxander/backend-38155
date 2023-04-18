const {UserRepository} = require("./user.repository");
const { getDaos } = require("../daos/factory");
const {options} = require("../config/options");

const {userDao, productDao} = getDaos(options.server.persistence);

const UserService = new UserRepository(userDao);

module.exports = {UserService}