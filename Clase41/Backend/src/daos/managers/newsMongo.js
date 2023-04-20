class NewsMongo{
    constructor(model){
        this.model=model;
    };

    async getNews(){
        try {
            const news = await this.model.find();
            return news;
        } catch (error) {
            throw new Error(error)
        }
    };

    async saveNew(newInfo){
        try {
            const newSaved = await this.model.create(newInfo);
            if(!newSaved){
                throw new Error("no se pudo guardar la noticia");
            }
            return newSaved;
        } catch (error) {
            throw new Error(error)
        }
    };

    async deleteNew(id){
        try {
            const newDeleted = await this.model.findByIdAndDelete(id);
            if(!newDeleted){
                throw new Error("no se encontro la noticia");
            }
            return "noticia eliminada";
        } catch (error) {
            throw new Error(error)
        }
    };
}

module.exports = {NewsMongo}