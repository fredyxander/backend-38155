const {UserManagerMongo} = require("./manager/users/userManagerMongo");
const {UserModel} = require("./dbModels/user.model");
const {UserManagerMemory} = require("./manager/users/userManagerMemory");
const {ProductManagerMongo} = require("./manager/products/productManagerMongo");
const {ProductModel} = require("./dbModels/product.model");
const { ProductManagerMemory} = require("./manager/products/productManagerMemory");

const userDao = new UserManagerMongo(UserModel);
// const userDao = new UserManagerMemory();

const productDao = new ProductManagerMongo(ProductModel);
// const productDao = new ProductManagerMemory();

module.exports = {userDao, productDao};