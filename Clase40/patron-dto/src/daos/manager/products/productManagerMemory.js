class ProductManagerMemory{
    constructor(){
        this.products=[];
    };

    async create(product){
        this.products.push(product);
    };

    async getAll(){
        return this.products;
    };

    async getById(id){};
    async modifyStock(productId, newQuantity){};
}

module.exports = {ProductManagerMemory}