const {getDaos} = require("../daos/factory");
const {NewsRepository} = require("./news.repository");
const {options} = require("../config/config");

const {newsDao, usersDao, commentsDao} = getDaos(options.server.persistence);

const newsService = new NewsRepository(newsDao);

module.exports = {newsService}