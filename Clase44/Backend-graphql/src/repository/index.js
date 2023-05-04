const {getDaos} = require("../daos/factory");
const {NewsRepository} = require("./news.repository");
const {options} = require("../config/config");
const {UsersRepository} = require("./users.repository");

const {newsDao, usersDao, commentsDao} = getDaos(options.server.persistence);

const newsService = new NewsRepository(newsDao);
const rootGraphqlService = new UsersRepository(usersDao);

module.exports = {newsService, rootGraphqlService}