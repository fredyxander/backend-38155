const {newsService} = require("../repository/index");

class NewsController{
    static async getNews(req,res){
        try {
            const news = await newsService.getNews();
            res.json({status:"success", data:news, message:"noticias de la base de datos"});
        } catch (error) {
            res.status(400).json({status:"error", message:error.message});
        }
    };

    static async saveNew(req,res){
        try {
            const newSaved = await newsService.saveNew(req.body);
            res.json({status:"success", data:newSaved, message:"noticia creada"});
        } catch (error) {
            res.status(400).json({status:"error", message:error.message});
        }
    };

    static async deleteNew(req,res){
        try {
            const result = await newsService.deleteNew(req.params.id);
            res.json({status:"success", message:result});
        } catch (error) {
            res.status(400).json({status:"error", message:error.message});
        }
    };
}

module.exports = {NewsController}