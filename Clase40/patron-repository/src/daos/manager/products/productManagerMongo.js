class ProductManagerMongo{
    constructor(model){
        this.model=model;
    };

    async create(product){
        try {
            const productCreated = await this.model.create(product);
            if(productCreated){
                return productCreated;
            } else {
                throw new Error("hubo un error al crear el producto");
            }
        } catch (error) {
            throw new Error(`hubo un error al crear el producto ${error.message}`);
        }
    };

    async getAll(){
        try {
            const users = await this.model.find();
            return users;
        } catch (error) {
            throw new Error("No se pudo obtener los productos");
        }
    };

    async getById(id){
        try {
            const product = await this.model.findById(id);
            if(product){
                return product;
            } else {
                throw new Error("El producto no existe");
            }
        } catch (error) {
            throw new Error("No se pudo obtener el producto");
        }
    };

    async modifyStock(productId, newQuantity){}
}

module.exports = {ProductManagerMongo}