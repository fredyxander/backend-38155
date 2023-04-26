const {newsValidation} = require("../daos/validations/news.validations");

class NewsRepository{
    constructor(dao){
        this.dao = dao
    };

    async getNews(){
        return await this.dao.getNews();
    };

    async saveNew(newInfo){
        try {
            newsValidation.newsValidate(newInfo,true,true);
            return await this.dao.saveNew(newInfo);
        } catch (error) {
            throw new Error(`Campos invalidos ${error.message}`)
        }
    };

    async deleteNew(id){
        return await this.dao.deleteNew(id);
    };
}

module.exports = {NewsRepository}